import DCloudUTSFoundation
import DCloudUniappRuntime
import Foundation
import UIKit
import JVerification

private var customViewCallback: JVerificationCustomViewCallback?
private var customViewListeners = [JVerificationCustomViewListener]()
private var subscribedAuthPageEventCallback: JVerificationEventCallback?
private var legacyAuthPageEventCallback: JVerificationEventCallback?

private final class JVerificationCustomViewListener: NSObject {
  private let identifier: String
  private let shouldFinish: Bool

  init(identifier: String, shouldFinish: Bool) {
    self.identifier = identifier
    self.shouldFinish = shouldFinish
    super.init()
  }

  @objc func onCustomViewClick() {
    if shouldFinish {
      JVERIFICATIONService.dismissLoginController(animated: true, completion: {})
    }
    customViewCallback?(identifier)
  }
}

private final class JVerificationAgreementViewListener: NSObject {
  private let identifier: String
  private let action: String
  private let hideAlertView: () -> Void

  init(identifier: String, action: String, hideAlertView: @escaping () -> Void) {
    self.identifier = identifier
    self.action = action
    self.hideAlertView = hideAlertView
    super.init()
  }

  @objc func onCustomViewClick() {
    if action == "hideAlertView" {
      hideAlertView()
    }
    if !identifier.isEmpty {
      customViewCallback?(identifier)
    }
  }
}

/** UIButton 的 target 不负责监听器生命周期，由按钮本身强持有监听器。 */
private final class JVerificationAgreementButton: UIButton {
  var clickListener: JVerificationAgreementViewListener?
}

private func result(_ code: Int, _ content: String, _ operatorName: String? = nil, _ uuid: String? = nil, _ msg: String? = nil) -> JVerificationResult {
  let value = JVerificationResult()
  value.code = NSNumber(value: code)
  value.content = content
  value.operator = operatorName
  value.uuid = uuid
  value.msg = msg
  return value
}

private func boolResult(_ enable: Bool) -> JVerificationResult {
  let value = JVerificationResult()
  value.enable = enable
  return value
}

private func nativeResult(_ values: [AnyHashable: Any], contentKey: String = "content") -> JVerificationResult {
  let code = (values["code"] as? NSNumber)?.intValue ?? -1
  let content = (values[contentKey] as? String) ?? (values["content"] as? String) ?? (values["message"] as? String) ?? ""
  return result(code, content, values["operator"] as? String, values["uuid"] as? String, values["msg"] as? String)
}

private func configuredInfoValue(_ key: String) -> String? {
  guard let values = Bundle.main.object(forInfoDictionaryKey: "JCore") as? [String: Any] else {
    return nil
  }
  return values[key] as? String
}

private func appKey(_ options: JVerificationInitOptions) -> String {
  if let key = options.appKey, !key.isEmpty {
    return key
  }
  return configuredInfoValue("APP_KEY") ?? ""
}

private func channel(_ options: JVerificationInitOptions) -> String {
  if let channel = options.channel, !channel.isEmpty {
    return channel
  }
  return configuredInfoValue("CHANNEL") ?? "developer-default"
}

private func has(_ values: UTSJSONObject, _ key: String) -> Bool {
  return values.hasOwnProperty(key)
}

private func string(_ values: UTSJSONObject, _ key: String) -> String {
  return values.getString(key, "")
}

private func number(_ values: UTSJSONObject, _ key: String) -> CGFloat {
  return CGFloat(values.getNumber(key, 0).doubleValue)
}

private func integer(_ values: UTSJSONObject, _ key: String) -> Int {
  return values.getNumber(key, 0).intValue
}

private func boolean(_ values: UTSJSONObject, _ key: String) -> Bool {
  return values.getBoolean(key, false)
}

private func color(_ values: UTSJSONObject, _ key: String) -> UIColor {
  let rgb = values.getNumber(key, 0).intValue
  return UIColor(
    red: CGFloat((rgb >> 16) & 0xff) / 255.0,
    green: CGFloat((rgb >> 8) & 0xff) / 255.0,
    blue: CGFloat(rgb & 0xff) / 255.0,
    alpha: CGFloat((rgb >> 24) & 0xff) / 255.0
  )
}

private func resourceImage(_ path: String) -> UIImage? {
  guard !path.isEmpty else { return nil }
  let resourcePath = UTSiOS.getResourcePath(path.hasPrefix("/") ? path : "/" + path)
  return UIImage(contentsOfFile: resourcePath) ?? UIImage(named: path)
}

private func resourcePath(_ path: String) -> String {
  guard !path.isEmpty else { return "" }
  return UTSiOS.getResourcePath(path.hasPrefix("/") ? path : "/" + path)
}

private func resourceImages(_ values: UTSJSONObject, _ key: String) -> [UIImage]? {
  guard let paths = values.getArray(key) as? [Any] else { return nil }
  let images = paths.compactMap { ($0 as? String).flatMap(resourceImage) }
  return images.isEmpty ? nil : images
}

private func attributedText(_ values: UTSJSONObject, _ key: String) -> NSAttributedString? {
  guard let items = values.getArray(key) as? [Any], items.count >= 2,
        let text = items[0] as? String, let rgb = items[1] as? NSNumber else {
    return nil
  }
  let textColor = UIColor(
    red: CGFloat((rgb.intValue >> 16) & 0xff) / 255.0,
    green: CGFloat((rgb.intValue >> 8) & 0xff) / 255.0,
    blue: CGFloat(rgb.intValue & 0xff) / 255.0,
    alpha: CGFloat((rgb.intValue >> 24) & 0xff) / 255.0
  )
  var attributes: [NSAttributedString.Key: Any] = [.foregroundColor: textColor]
  if items.count > 2, let size = items[2] as? NSNumber {
    attributes[.font] = UIFont.systemFont(ofSize: CGFloat(size.doubleValue))
  }
  return NSAttributedString(string: text, attributes: attributes)
}

/**
 * 将 UTS JSON 字体对象转换为 UIKit 字体。配置格式为
 * `{ size: number, weight?: regular|medium|semibold|bold|heavy, name?: string }`。
 */
private func configuredFont(_ values: UTSJSONObject, _ key: String) -> UIFont? {
  guard let descriptor = values.getJSON(key) else { return nil }
  let size = CGFloat(descriptor.getNumber("size", 0).doubleValue)
  guard size > 0 else { return nil }
  let name = string(descriptor, "name")
  if !name.isEmpty, let font = UIFont(name: name, size: size) {
    return font
  }
  switch string(descriptor, "weight") {
  case "medium": return UIFont.systemFont(ofSize: size, weight: .medium)
  case "semibold": return UIFont.systemFont(ofSize: size, weight: .semibold)
  case "bold": return UIFont.systemFont(ofSize: size, weight: .bold)
  case "heavy": return UIFont.systemFont(ofSize: size, weight: .heavy)
  default: return UIFont.systemFont(ofSize: size, weight: .regular)
  }
}

private func edgeInsets(_ values: UTSJSONObject, _ key: String) -> UIEdgeInsets? {
  guard let source = values.getJSON(key) else { return nil }
  return UIEdgeInsets(
    top: number(source, "top"),
    left: number(source, "left"),
    bottom: number(source, "bottom"),
    right: number(source, "right")
  )
}

private func configuredNavControl(_ values: UTSJSONObject) -> UIBarButtonItem? {
  guard let entry = values.getJSON("navControl") else { return nil }
  let button = UIButton(type: .system)
  button.setTitle(string(entry, "title"), for: .normal)
  if has(entry, "textFont") { button.titleLabel?.font = UIFont.systemFont(ofSize: number(entry, "textFont")) }
  if has(entry, "textColor") { button.setTitleColor(color(entry, "textColor"), for: .normal) }
  if has(entry, "imagePath") { button.setImage(resourceImage(string(entry, "imagePath")), for: .normal) }
  if has(entry, "backgroundImagePath") { button.setBackgroundImage(resourceImage(string(entry, "backgroundImagePath")), for: .normal) }
  let width = has(entry, "width") ? number(entry, "width") : 44
  let height = has(entry, "height") ? number(entry, "height") : 44
  button.frame = CGRect(x: 0, y: 0, width: width, height: height)
  let listener = JVerificationCustomViewListener(identifier: string(entry, "id"), shouldFinish: boolean(entry, "isFinish"))
  customViewListeners.append(listener)
  button.addTarget(listener, action: #selector(JVerificationCustomViewListener.onCustomViewClick), for: .touchUpInside)
  return UIBarButtonItem(customView: button)
}

private func applyPrivacyTextAttributes(_ config: JVUIConfig, _ values: UTSJSONObject) {
  guard let entries = values.getArray("privacyTextAttributes") as? [Any] else { return }
  for case let entry as UTSJSONObject in entries {
    let location = integer(entry, "location")
    let length = integer(entry, "length")
    guard location >= 0, length > 0 else { continue }
    let range = NSRange(location: location, length: length)
    switch string(entry, "name") {
    case "foregroundColor":
      config.addPrivacyTextAttribute(.foregroundColor, value: color(entry, "value"), range: range)
    case "backgroundColor":
      config.addPrivacyTextAttribute(.backgroundColor, value: color(entry, "value"), range: range)
    case "underlineColor":
      config.addPrivacyTextAttribute(.underlineColor, value: color(entry, "value"), range: range)
    case "strikethroughColor":
      config.addPrivacyTextAttribute(.strikethroughColor, value: color(entry, "value"), range: range)
    case "underlineStyle":
      config.addPrivacyTextAttribute(.underlineStyle, value: NSNumber(value: integer(entry, "value")), range: range)
    case "strikethroughStyle":
      config.addPrivacyTextAttribute(.strikethroughStyle, value: NSNumber(value: integer(entry, "value")), range: range)
    case "kern":
      config.addPrivacyTextAttribute(.kern, value: entry.getNumber("value", 0), range: range)
    case "font":
      if let font = configuredFont(entry, "value") {
        config.addPrivacyTextAttribute(.font, value: font, range: range)
      }
    default:
      continue
    }
  }
}

private func applyCustomPrivacyAlert(_ config: JVUIConfig, _ descriptor: UTSJSONObject) {
  let title = string(descriptor, "title")
  let configuredMessage = string(descriptor, "message")
  let confirmText = string(descriptor, "confirmText").isEmpty ? "同意并登录" : string(descriptor, "confirmText")
  let cancelText = string(descriptor, "cancelText")
  config.customPrivacyAlertViewBlock = { (controller: UIViewController, appPrivacys: [Any], loginAction: @escaping () -> Void) in
    let message = configuredMessage.isEmpty ? String(describing: appPrivacys) : configuredMessage
    let alert = UIAlertController(title: title, message: message, preferredStyle: .alert)
    if !cancelText.isEmpty {
      alert.addAction(UIAlertAction(title: cancelText, style: .cancel))
    }
    alert.addAction(UIAlertAction(title: confirmText, style: .default) { _ in loginAction() })
    controller.present(alert, animated: true)
  }
}

private func applyCustomLoadingView(_ config: JVUIConfig, _ values: UTSJSONObject) {
  guard let descriptor = values.getJSON("customLoadingViewBlock") else { return }
  let style = string(descriptor, "style")
  let text = string(descriptor, "text")
  let textFont = has(descriptor, "textFont") ? number(descriptor, "textFont") : 14
  let textColor = has(descriptor, "textColor") ? color(descriptor, "textColor") : UIColor.white
  let indicatorColor = has(descriptor, "indicatorColor") ? color(descriptor, "indicatorColor") : UIColor.white
  let backgroundColor = has(descriptor, "backgroundColor") ? color(descriptor, "backgroundColor") : UIColor.clear

  config.customLoadingViewBlock = { container in
    let indicator: UIActivityIndicatorView
    if #available(iOS 13.0, *) {
      indicator = UIActivityIndicatorView(style: style == "medium" ? .medium : .large)
    } else {
      indicator = UIActivityIndicatorView(style: style == "medium" ? .gray : .whiteLarge)
    }
    indicator.color = indicatorColor
    indicator.startAnimating()

    let arrangedViews: [UIView]
    if text.isEmpty {
      arrangedViews = [indicator]
    } else {
      let label = UILabel()
      label.text = text
      label.font = UIFont.systemFont(ofSize: textFont)
      label.textColor = textColor
      label.textAlignment = .center
      arrangedViews = [indicator, label]
    }
    let stack = UIStackView(arrangedSubviews: arrangedViews)
    stack.axis = .vertical
    stack.alignment = .center
    stack.spacing = 8
    stack.backgroundColor = backgroundColor
    stack.translatesAutoresizingMaskIntoConstraints = false
    container.addSubview(stack)
    NSLayoutConstraint.activate([
      stack.centerXAnchor.constraint(equalTo: container.centerXAnchor),
      stack.centerYAnchor.constraint(equalTo: container.centerYAnchor)
    ])
  }
}

private func statusBarStyle(_ value: Int) -> UIStatusBarStyle {
  switch value {
  case 1:
    return .lightContent
  case 3:
    if #available(iOS 13.0, *) {
      return .darkContent
    }
    return .default
  default:
    return .default
  }
}

private func transitionStyle(_ value: String) -> UIModalTransitionStyle? {
  switch value {
  case "FlipHorizontal": return .flipHorizontal
  case "CrossDissolve": return .crossDissolve
  case "PartialCurl": return .partialCurl
  case "CoverVertical": return .coverVertical
  default: return nil
  }
}

private func layoutAttribute(_ value: String) -> NSLayoutConstraint.Attribute? {
  switch value {
  case "left": return .left
  case "right": return .right
  case "top": return .top
  case "bottom": return .bottom
  case "leading": return .leading
  case "trailing": return .trailing
  case "width": return .width
  case "height": return .height
  case "centerX": return .centerX
  case "centerY": return .centerY
  case "firstBaseline": return .firstBaseline
  case "lastBaseline": return .lastBaseline
  case "notAnAttribute": return .notAnAttribute
  default: return nil
  }
}

private func layoutRelation(_ value: String) -> NSLayoutConstraint.Relation {
  switch value {
  case "lessThanOrEqual": return .lessThanOrEqual
  case "greaterThanOrEqual": return .greaterThanOrEqual
  default: return .equal
  }
}

private func layoutItem(_ value: String) -> JVLayoutItem? {
  switch value {
  case "none": return JVLayoutItem.none
  case "logo": return .logo
  case "number": return .number
  case "slogan": return .slogan
  case "login": return .login
  case "check": return .check
  case "privacy": return .privacy
  case "super": return .super
  default: return nil
  }
}

private func layoutConstraints(_ values: UTSJSONObject, _ key: String) -> [JVLayoutConstraint]? {
  guard let items = values.getArray(key) as? [Any] else { return nil }

  // 兼容传统插件的四数字简写：[centerX, centerY, width, height]。
  if items.count == 4,
     let centerX = items[0] as? NSNumber, let centerY = items[1] as? NSNumber,
     let width = items[2] as? NSNumber, let height = items[3] as? NSNumber {
    return [
      JVLayoutConstraint(attribute: .centerX, relatedBy: .equal, to: .super, attribute: .centerX, multiplier: 1, constant: CGFloat(centerX.doubleValue)),
      JVLayoutConstraint(attribute: .centerY, relatedBy: .equal, to: .super, attribute: .centerY, multiplier: 1, constant: CGFloat(centerY.doubleValue)),
      JVLayoutConstraint(attribute: .width, relatedBy: .equal, to: .none, attribute: .width, multiplier: 1, constant: CGFloat(width.doubleValue)),
      JVLayoutConstraint(attribute: .height, relatedBy: .equal, to: .none, attribute: .height, multiplier: 1, constant: CGFloat(height.doubleValue))
    ].compactMap { $0 }
  }

  // 对齐 JVerification 官方 JVLayoutConstraint：用于复选框相对隐私栏等
  // 无法通过四数字简写表达的关系约束。
  var constraints = [JVLayoutConstraint]()
  for case let descriptor as UTSJSONObject in items {
    guard let attribute = layoutAttribute(string(descriptor, "attribute")),
          let item = layoutItem(string(descriptor, "toItem")) else {
      continue
    }
    let targetName = string(descriptor, "toAttribute")
    let targetAttribute = layoutAttribute(targetName) ?? attribute
    let multiplier = has(descriptor, "multiplier") ? number(descriptor, "multiplier") : 1
    if let constraint = JVLayoutConstraint(
      attribute: attribute,
      relatedBy: layoutRelation(string(descriptor, "relation")),
      to: item,
      attribute: targetAttribute,
      multiplier: multiplier,
      constant: number(descriptor, "constant")
    ) {
      constraints.append(constraint)
    }
  }
  return constraints.isEmpty ? nil : constraints
}

private func setConstraints(_ values: UTSJSONObject, _ key: String, _ setter: ([JVLayoutConstraint]) -> Void) {
  if let constraints = layoutConstraints(values, key) {
    setter(constraints)
  }
}

private func applyCustomViewConstraints(_ view: UIView, in container: UIView, values: UTSJSONObject) {
  view.translatesAutoresizingMaskIntoConstraints = false
  func add(_ attribute: NSLayoutConstraint.Attribute, _ item: UIView?, _ target: NSLayoutConstraint.Attribute, _ constant: CGFloat, _ multiplier: CGFloat = 1) {
    container.addConstraint(NSLayoutConstraint(item: view, attribute: attribute, relatedBy: .equal, toItem: item, attribute: target, multiplier: multiplier, constant: constant))
  }
  if has(values, "top") { add(.top, container, .top, number(values, "top")) }
  if has(values, "left") { add(.left, container, .left, number(values, "left")) }
  if has(values, "right") { add(.right, container, .right, number(values, "right")) }
  if has(values, "bottom") { add(.bottom, container, .bottom, number(values, "bottom")) }
  if has(values, "widthRatio") { add(.width, container, .width, 0, number(values, "widthRatio")) }
  else if has(values, "width") { add(.width, nil, .width, number(values, "width")) }
  if has(values, "heightRatio") { add(.height, container, .height, 0, number(values, "heightRatio")) }
  else if has(values, "height") { add(.height, nil, .height, number(values, "height")) }
}

private func appendCustomViews(_ values: UTSJSONObject, to container: UIView) {
  guard let entries = values.getArray("addCustomViews") as? [Any] else { return }
  for case let entry as UTSJSONObject in entries {
    let type = string(entry, "type")
    let view: UIView
    if type == "label" {
      let label = UILabel()
      label.text = string(entry, "text")
      if has(entry, "textFont") { label.font = UIFont.systemFont(ofSize: number(entry, "textFont")) }
      if has(entry, "textColor") { label.textColor = color(entry, "textColor") }
      if has(entry, "numberOfLines") { label.numberOfLines = integer(entry, "numberOfLines") }
      if has(entry, "textAlignment") {
        switch integer(entry, "textAlignment") {
        case 1: label.textAlignment = .center
        case 2: label.textAlignment = .right
        default: label.textAlignment = .left
        }
      }
      view = label
    } else if type == "imageView" {
      let imageView = UIImageView()
      imageView.image = resourceImage(string(entry, "imagePath"))
      view = imageView
    } else if type == "button" {
      let button = UIButton()
      button.setTitle(string(entry, "title"), for: .normal)
      if has(entry, "textFont") { button.titleLabel?.font = UIFont.systemFont(ofSize: number(entry, "textFont")) }
      if has(entry, "textColor") { button.setTitleColor(color(entry, "textColor"), for: .normal) }
      button.setImage(resourceImage(string(entry, "normalImagePath")), for: .normal)
      button.setImage(resourceImage(string(entry, "selectImagePath")), for: .highlighted)
      button.setBackgroundImage(resourceImage(string(entry, "backgroundImagePath")), for: .normal)
      let listener = JVerificationCustomViewListener(identifier: string(entry, "id"), shouldFinish: boolean(entry, "isFinish"))
      customViewListeners.append(listener)
      button.addTarget(listener, action: #selector(JVerificationCustomViewListener.onCustomViewClick), for: .touchUpInside)
      view = button
    } else {
      continue
    }
    if has(entry, "backgroundColor") { view.backgroundColor = color(entry, "backgroundColor") }
    if has(entry, "cornerRadius") {
      view.layer.masksToBounds = true
      view.layer.cornerRadius = number(entry, "cornerRadius")
    }
    container.addSubview(view)
    applyCustomViewConstraints(view, in: container, values: entry)
  }
}

private func appendAgreementCustomViews(_ values: UTSJSONObject, to container: UIView, hideAlertView: @escaping () -> Void) {
  guard let descriptor = values.getJSON("customAgreementAlertView"),
        let entries = descriptor.getArray("views") as? [Any] else { return }
  for case let entry as UTSJSONObject in entries {
    let type = string(entry, "type")
    let view: UIView
    if type == "label" {
      let label = UILabel()
      label.text = string(entry, "text")
      if has(entry, "textFont") { label.font = UIFont.systemFont(ofSize: number(entry, "textFont")) }
      if has(entry, "textColor") { label.textColor = color(entry, "textColor") }
      if has(entry, "numberOfLines") { label.numberOfLines = integer(entry, "numberOfLines") }
      if has(entry, "textAlignment") {
        switch integer(entry, "textAlignment") {
        case 1: label.textAlignment = .center
        case 2: label.textAlignment = .right
        default: label.textAlignment = .left
        }
      }
      view = label
    } else if type == "imageView" {
      let imageView = UIImageView()
      imageView.image = resourceImage(string(entry, "imagePath"))
      view = imageView
    } else if type == "button" {
      let button = JVerificationAgreementButton(type: .system)
      button.setTitle(string(entry, "title"), for: .normal)
      if has(entry, "textFont") { button.titleLabel?.font = UIFont.systemFont(ofSize: number(entry, "textFont")) }
      if has(entry, "textColor") { button.setTitleColor(color(entry, "textColor"), for: .normal) }
      button.setImage(resourceImage(string(entry, "normalImagePath")), for: .normal)
      button.setImage(resourceImage(string(entry, "selectImagePath")), for: .highlighted)
      button.setBackgroundImage(resourceImage(string(entry, "backgroundImagePath")), for: .normal)
      let listener = JVerificationAgreementViewListener(
        identifier: string(entry, "id"),
        action: string(entry, "action"),
        hideAlertView: hideAlertView
      )
      button.clickListener = listener
      button.addTarget(listener, action: #selector(JVerificationAgreementViewListener.onCustomViewClick), for: .touchUpInside)
      view = button
    } else {
      continue
    }
    if has(entry, "backgroundColor") { view.backgroundColor = color(entry, "backgroundColor") }
    if has(entry, "cornerRadius") {
      view.layer.masksToBounds = true
      view.layer.cornerRadius = number(entry, "cornerRadius")
    }
    container.addSubview(view)
    applyCustomViewConstraints(view, in: container, values: entry)
  }
}

private func configuredFrame(_ values: UTSJSONObject, _ key: String) -> CGRect? {
  guard let items = values.getArray(key) as? [Any], items.count == 4,
        let x = items[0] as? NSNumber, let y = items[1] as? NSNumber,
        let width = items[2] as? NSNumber, let height = items[3] as? NSNumber else {
    return nil
  }
  return CGRect(
    x: CGFloat(x.doubleValue),
    y: CGFloat(y.doubleValue),
    width: CGFloat(width.doubleValue),
    height: CGFloat(height.doubleValue)
  )
}

private func applyAgreementAlertViewExtensions(_ config: JVUIConfig, _ values: UTSJSONObject) {
  if let frames = values.getJSON("resetAgreementAlertViewFrameBlock") {
    let preset = string(frames, "preset")
    let shouldCenterSuperView = boolean(frames, "centerSuperView")
    let configuredSuperViewFrame = configuredFrame(frames, "superViewFrame")
    let configuredAlertViewFrame = configuredFrame(frames, "alertViewFrame")
    let configuredTitleFrame = configuredFrame(frames, "titleFrame")
    let configuredContentFrame = configuredFrame(frames, "contentFrame")
    let configuredButtonFrame = configuredFrame(frames, "buttonFrame")
    // 主授权页使用 window 样式时，JVerification SDK 会把二次弹窗的
    // agreementAlertViewShowWindow 强制改成 false，这里按 SDK 实际行为计算。
    let showAgreementWindow = boolean(values, "agreementAlertViewShowWindow") && !boolean(values, "showWindow")

    config.resetAgreementAlertViewFrameBlock = { superViewFrame, alertViewFrame, titleFrame, contentFrame, buttonFrame in
      let screen = UIScreen.main.bounds
      if preset == "officialDemo" {
        if showAgreementWindow {
          superViewFrame?.pointee = NSValue(cgRect: CGRect(x: (screen.width - 280) / 2, y: (screen.height - 180) / 2, width: 280, height: 200))
          alertViewFrame?.pointee = NSValue(cgRect: CGRect(x: 0, y: 0, width: 280, height: 200))
          titleFrame?.pointee = NSValue(cgRect: CGRect(x: 20, y: 10, width: 240, height: 50))
          contentFrame?.pointee = NSValue(cgRect: CGRect(x: 20, y: 65, width: 240, height: 80))
          buttonFrame?.pointee = NSValue(cgRect: CGRect(x: 140, y: 150, width: 140, height: 50))
        } else {
          alertViewFrame?.pointee = NSValue(cgRect: CGRect(x: 0, y: screen.height - 180, width: screen.width, height: 180))
          buttonFrame?.pointee = NSValue(cgRect: CGRect(x: screen.width / 2, y: 130, width: screen.width / 2, height: 50))
        }
      }

      if var frame = configuredSuperViewFrame {
        if shouldCenterSuperView {
          frame.origin.x = (screen.width - frame.width) / 2
          frame.origin.y = (screen.height - frame.height) / 2
        }
        superViewFrame?.pointee = NSValue(cgRect: frame)
      }
      if let frame = configuredAlertViewFrame { alertViewFrame?.pointee = NSValue(cgRect: frame) }
      if let frame = configuredTitleFrame { titleFrame?.pointee = NSValue(cgRect: frame) }
      if let frame = configuredContentFrame { contentFrame?.pointee = NSValue(cgRect: frame) }
      if let frame = configuredButtonFrame { buttonFrame?.pointee = NSValue(cgRect: frame) }
    }
  }

  if values.getJSON("customAgreementAlertView") != nil {
    config.customAgreementAlertView = { superView, hideAlertView in
      appendAgreementCustomViews(values, to: superView, hideAlertView: hideAlertView)
    }
  }
}

private func applyConfig(_ config: JVUIConfig, _ values: UTSJSONObject) {
  if has(values, "appLanguageType"), let language = JVLanguageType(rawValue: integer(values, "appLanguageType")) {
    config.appLanguageType = language
  }
  if has(values, "operatorType") { config.operatorType = string(values, "operatorType") }
  if has(values, "authPageBackgroundImage"), let image = resourceImage(string(values, "authPageBackgroundImage")) { config.authPageBackgroundImage = image }
  if has(values, "authPageGifImagePath") { config.authPageGifImagePath = resourcePath(string(values, "authPageGifImagePath")) }
  if has(values, "authPageVideoPath") { config.authPageVideoPath = resourcePath(string(values, "authPageVideoPath")) }
  if has(values, "authPageVideoPlaceHolderImageName") { config.authPageVideoPlaceHolderImageName = resourcePath(string(values, "authPageVideoPlaceHolderImageName")) }
  if has(values, "authPageVideoPlaceholderImageName") { config.authPageVideoPlaceHolderImageName = resourcePath(string(values, "authPageVideoPlaceholderImageName")) }
  if has(values, "autoLayout") { config.autoLayout = boolean(values, "autoLayout") }
  if has(values, "shouldAutorotate") { config.shouldAutorotate = boolean(values, "shouldAutorotate") }
  if has(values, "supportedInterfaceOrientations") {
    let rawValue = integer(values, "supportedInterfaceOrientations")
    if rawValue >= 0 {
      config.supportedInterfaceOrientations = UIInterfaceOrientationMask(rawValue: UInt(rawValue))
    }
  }
  if has(values, "orientation"), let orientation = UIInterfaceOrientation(rawValue: integer(values, "orientation")) {
    config.orientation = orientation
  }
  if has(values, "dismissAnimationFlag") { config.dismissAnimationFlag = boolean(values, "dismissAnimationFlag") }
  if has(values, "navCustom") { config.navCustom = boolean(values, "navCustom") }
  if has(values, "navColor") { config.navColor = color(values, "navColor") }
  if has(values, "barStyle"), let style = UIBarStyle(rawValue: integer(values, "barStyle")) { config.barStyle = style }
  if has(values, "preferredStatusBarStyle") { config.preferredStatusBarStyle = statusBarStyle(integer(values, "preferredStatusBarStyle")) }
  if has(values, "agreementPreferredStatusBarStyle") { config.agreementPreferredStatusBarStyle = statusBarStyle(integer(values, "agreementPreferredStatusBarStyle")) }
  if has(values, "navText"), let text = attributedText(values, "navText") { config.navText = text }
  if has(values, "navReturnImg"), let image = resourceImage(string(values, "navReturnImg")) { config.navReturnImg = image }
  if let insets = edgeInsets(values, "navReturnImageEdgeInsets") { config.navReturnImageEdgeInsets = insets }
  if has(values, "prefersStatusBarHidden") { config.prefersStatusBarHidden = boolean(values, "prefersStatusBarHidden") }
  if has(values, "navTransparent") { config.navTransparent = boolean(values, "navTransparent") }
  if has(values, "navReturnHidden") { config.navReturnHidden = boolean(values, "navReturnHidden") }
  if has(values, "navDividingLineHidden") { config.navDividingLineHidden = boolean(values, "navDividingLineHidden") }
  if has(values, "navBarBackGroundImage"), let image = resourceImage(string(values, "navBarBackGroundImage")) { config.navBarBackGroundImage = image }
  if let navControl = configuredNavControl(values) { config.navControl = navControl }

  if has(values, "logoImg"), let image = resourceImage(string(values, "logoImg")) { config.logoImg = image }
  if has(values, "logoWidth") { config.logoWidth = number(values, "logoWidth") }
  if has(values, "logoHeight") { config.logoHeight = number(values, "logoHeight") }
  if has(values, "logoOffsetY") { config.logoOffsetY = number(values, "logoOffsetY") }
  if has(values, "logoHidden") { config.logoHidden = boolean(values, "logoHidden") }
  setConstraints(values, "logoConstraints") { config.logoConstraints = $0 }
  setConstraints(values, "logoHorizontalConstraints") { config.logoHorizontalConstraints = $0 }

  if has(values, "logBtnText") { config.logBtnText = string(values, "logBtnText") }
  if let font = configuredFont(values, "logBtnFont") { config.logBtnFont = font }
  if has(values, "logBtnOffsetY") { config.logBtnOffsetY = number(values, "logBtnOffsetY") }
  if has(values, "logBtnTextColor") { config.logBtnTextColor = color(values, "logBtnTextColor") }
  if let images = resourceImages(values, "logBtnImgs") { config.logBtnImgs = images }
  setConstraints(values, "logBtnConstraints") { config.logBtnConstraints = $0 }
  setConstraints(values, "logBtnHorizontalConstraints") { config.logBtnHorizontalConstraints = $0 }

  if has(values, "numberColor") { config.numberColor = color(values, "numberColor") }
  if has(values, "numberSize") { config.numberSize = number(values, "numberSize") }
  if let font = configuredFont(values, "numberFont") { config.numberFont = font }
  if has(values, "numFieldOffsetY") { config.numFieldOffsetY = number(values, "numFieldOffsetY") }
  setConstraints(values, "numberConstraints") { config.numberConstraints = $0 }
  setConstraints(values, "numberHorizontalConstraints") { config.numberHorizontalConstraints = $0 }

  if has(values, "uncheckedImg"), let image = resourceImage(string(values, "uncheckedImg")) { config.uncheckedImg = image }
  if has(values, "checkedImg"), let image = resourceImage(string(values, "checkedImg")) { config.checkedImg = image }
  if has(values, "checkViewHidden") { config.checkViewHidden = boolean(values, "checkViewHidden") }
  if has(values, "privacyState") { config.privacyState = boolean(values, "privacyState") }
  setConstraints(values, "checkViewConstraints") { config.checkViewConstraints = $0 }
  setConstraints(values, "checkViewHorizontalConstraints") { config.checkViewHorizontalConstraints = $0 }

  if let value = values.getArray("appPrivacyOne") { config.appPrivacyOne = value }
  if let value = values.getArray("appPrivacyTwo") { config.appPrivacyTwo = value }
  if let value = values.getArray("appPrivacys") { config.appPrivacys = value }
  if let colors = values.getArray("appPrivacyColor") as? [Any], colors.count > 1,
     let first = colors[0] as? NSNumber, let second = colors[1] as? NSNumber {
    config.appPrivacyColor = [UIColor(red: CGFloat((first.intValue >> 16) & 0xff) / 255, green: CGFloat((first.intValue >> 8) & 0xff) / 255, blue: CGFloat(first.intValue & 0xff) / 255, alpha: CGFloat((first.intValue >> 24) & 0xff) / 255), UIColor(red: CGFloat((second.intValue >> 16) & 0xff) / 255, green: CGFloat((second.intValue >> 8) & 0xff) / 255, blue: CGFloat(second.intValue & 0xff) / 255, alpha: CGFloat((second.intValue >> 24) & 0xff) / 255)]
  }
  if has(values, "privacyTextFontSize") { config.privacyTextFontSize = number(values, "privacyTextFontSize") }
  if has(values, "privacyOffsetY") { config.privacyOffsetY = number(values, "privacyOffsetY") }
  if let value = values.getArray("privacyComponents") as? [String] { config.privacyComponents = value }
  if has(values, "privacyShowBookSymbol") { config.privacyShowBookSymbol = boolean(values, "privacyShowBookSymbol") }
  if has(values, "privacyLineSpacing") { config.privacyLineSpacing = number(values, "privacyLineSpacing") }
  if has(values, "privacyTextAlignment") { config.privacyTextAlignment = string(values, "privacyTextAlignment") == "center" ? .center : .left }
  if has(values, "privacysNavCustom") { config.privacysNavCustom = boolean(values, "privacysNavCustom") }
  if has(values, "textVerAlignment"), let alignment = JVVerAlignment(rawValue: integer(values, "textVerAlignment")) {
    config.textVerAlignment = alignment
  }
  if has(values, "openPrivacyInBrowser") { config.openPrivacyInBrowser = boolean(values, "openPrivacyInBrowser") }
  if has(values, "isAlertPrivacyVC") { config.isAlertPrivacyVC = boolean(values, "isAlertPrivacyVC") }
  if has(values, "agreementAlertViewShowWindow") { config.agreementAlertViewShowWindow = boolean(values, "agreementAlertViewShowWindow") }
  // JVerification iOS SDK 只有在 customPrivacyAlertViewBlock 非空时才会让
  // 未勾选协议的登录按钮可点击。isAlertPrivacyVC 为 true 时，SDK 会优先
  // 展示其内置二次隐私弹窗，下面这个空 block 不会参与实际弹窗逻辑。
  if config.isAlertPrivacyVC {
    config.customPrivacyAlertViewBlock = { _, _, _ in }
  } else if let descriptor = values.getJSON("customPrivacyAlertViewBlock") {
    applyCustomPrivacyAlert(config, descriptor)
  } else if has(values, "privacyCheckToastMessage") {
    let message = string(values, "privacyCheckToastMessage")
    config.customPrivacyAlertViewBlock = { controller, _, _ in
      let alert = UIAlertController(title: message, message: nil, preferredStyle: .alert)
      alert.addAction(UIAlertAction(title: "确定", style: .cancel))
      controller.present(alert, animated: true)
    }
  }
  applyPrivacyTextAttributes(config, values)
  setConstraints(values, "privacyConstraints") { config.privacyConstraints = $0 }
  setConstraints(values, "privacyHorizontalConstraints") { config.privacyHorizontalConstraints = $0 }

  if has(values, "agreementNavBackgroundColor") { config.agreementNavBackgroundColor = color(values, "agreementNavBackgroundColor") }
  if has(values, "agreementNavText"), let text = attributedText(values, "agreementNavText") { config.agreementNavText = text }
  if has(values, "firstPrivacyAgreementNavText"), let text = attributedText(values, "firstPrivacyAgreementNavText") { config.firstPrivacyAgreementNavText = text }
  if has(values, "secondPrivacyAgreementNavText"), let text = attributedText(values, "secondPrivacyAgreementNavText") { config.secondPrivacyAgreementNavText = text }
  if has(values, "agreementNavReturnImage"), let image = resourceImage(string(values, "agreementNavReturnImage")) { config.agreementNavReturnImage = image }
  if let font = configuredFont(values, "agreementNavTextFont") { config.agreementNavTextFont = font }
  if has(values, "agreementNavTextColor") { config.agreementNavTextColor = color(values, "agreementNavTextColor") }

  if has(values, "sloganOffsetY") { config.sloganOffsetY = number(values, "sloganOffsetY") }
  if has(values, "sloganTextColor") { config.sloganTextColor = color(values, "sloganTextColor") }
  if let font = configuredFont(values, "sloganFont") { config.sloganFont = font }
  setConstraints(values, "sloganConstraints") { config.sloganConstraints = $0 }
  setConstraints(values, "sloganHorizontalConstraints") { config.sloganHorizontalConstraints = $0 }

  if has(values, "agreementAlertViewContentTextFontSize") { config.agreementAlertViewContentTextFontSize = integer(values, "agreementAlertViewContentTextFontSize") }
  if has(values, "agreementAlertViewContentTextAlignment") {
    switch integer(values, "agreementAlertViewContentTextAlignment") {
    case 1: config.agreementAlertViewContentTextAlignment = .center
    case 2: config.agreementAlertViewContentTextAlignment = .right
    default: config.agreementAlertViewContentTextAlignment = .left
    }
  }
  if let font = configuredFont(values, "agreementAlertViewTitleTextFont") ?? configuredFont(values, "agreementAlertViewTitleTexFont") { config.agreementAlertViewTitleTexFont = font }
  else if has(values, "agreementAlertViewTitleTextFontSize") { config.agreementAlertViewTitleTexFont = UIFont.systemFont(ofSize: number(values, "agreementAlertViewTitleTextFontSize")) }
  if has(values, "agreementAlertViewTitleTextColor") { config.agreementAlertViewTitleTextColor = color(values, "agreementAlertViewTitleTextColor") }
  if has(values, "agreementAlertViewLogBtnTextColor") { config.agreementAlertViewLogBtnTextColor = color(values, "agreementAlertViewLogBtnTextColor") }
  if let images = resourceImages(values, "agreementAlertViewLogBtnImgs") { config.agreementAlertViewLogBtnImgs = images }
  if has(values, "agreementAlertViewBackgroundImage"), let image = resourceImage(string(values, "agreementAlertViewBackgroundImage")) { config.agreementAlertViewBackgroundImage = image }
  if has(values, "agreementAlertViewBackgroundColor") { config.agreementAlertViewBackgroundColor = color(values, "agreementAlertViewBackgroundColor") }
  if has(values, "agreementAlertViewTitleText") { config.agreementAlertViewTitleText = string(values, "agreementAlertViewTitleText") }
  if has(values, "agreementAlertViewLogBtnText") { config.agreementAlertViewLogBtnText = string(values, "agreementAlertViewLogBtnText") }
  if has(values, "agreementAlertViewLogBtnTextFontSize") { config.agreementAlertViewLogBtnTextFontSize = integer(values, "agreementAlertViewLogBtnTextFontSize") }
  applyAgreementAlertViewExtensions(config, values)

  if has(values, "showWindow") { config.showWindow = boolean(values, "showWindow") }
  if has(values, "windowBackgroundImage"), let image = resourceImage(string(values, "windowBackgroundImage")) { config.windowBackgroundImage = image }
  if has(values, "windowBackgroundAlpha") { config.windowBackgroundAlpha = number(values, "windowBackgroundAlpha") }
  if has(values, "windowCornerRadius") { config.windowCornerRadius = number(values, "windowCornerRadius") }
  if let images = resourceImages(values, "windowCloseBtnImgs") { config.windowCloseBtnImgs = images }
  setConstraints(values, "windowConstraints") { config.windowConstraints = $0 }
  setConstraints(values, "windowHorizontalConstraints") { config.windowHorizontalConstraints = $0 }
  setConstraints(values, "windowCloseBtnConstraints") { config.windowCloseBtnConstraints = $0 }
  setConstraints(values, "windowCloseBtnHorizontalConstraints") { config.windowCloseBtnHorizontalConstraints = $0 }
  setConstraints(values, "loadingConstraints") { config.loadingConstraints = $0 }
  setConstraints(values, "loadingHorizontalConstraints") { config.loadingHorizontalConstraints = $0 }
  applyCustomLoadingView(config, values)

  if let video = values.getJSON("authPageBackgroudVideo") {
    let path = string(video, "videoPath")
    if !path.isEmpty {
      config.setVideoBackgroudResource(resourcePath(path), placeHolder: resourcePath(string(video, "videoPlaceHolderImagePath")))
    }
  }
  if let style = transitionStyle(string(values, "modalTransitionStyle")) { config.modalTransitionStyle = style }
  if let style = transitionStyle(string(values, "agreementAlertViewModalTransitionStyle")) { config.agreementAlertViewModalTransitionStyle = style }
}

func jverificationSetDebug(_ enable: Bool) {
  JVERIFICATIONService.setDebug(enable)
}

func jverificationInit(_ options: JVerificationInitOptions, _ callback: @escaping JVerificationCallback) {
  let key = appKey(options)
  guard !key.isEmpty else {
    callback(result(-1, "iOS init requires options.appKey or Info.plist JCore.APP_KEY"))
    return
  }
  let config = JVAuthConfig()
  config.appKey = key
  config.channel = channel(options)
  if let advertisingId = options.advertisingId { config.advertisingId = advertisingId }
  config.isProduction = options.isProduction
  if let timeout = options.timeout { config.timeout = timeout.doubleValue }
  config.authBlock = { callback(nativeResult($0)) }
  JVERIFICATIONService.setup(with: config)
}

func jverificationIsInitSuccess(_ callback: @escaping JVerificationCallback) {
  callback(boolResult(JVERIFICATIONService.isSetupClient()))
}

func jverificationCheckVerifyEnable(_ callback: @escaping JVerificationCallback) {
  callback(boolResult(JVERIFICATIONService.checkVerifyEnable()))
}

func jverificationGetToken(_ timeout: NSNumber, _ callback: @escaping JVerificationCallback) {
  JVERIFICATIONService.getToken(timeout.doubleValue) { callback(nativeResult($0, contentKey: "token")) }
}

func jverificationPreLogin(_ timeout: NSNumber, _ callback: @escaping JVerificationCallback) {
  JVERIFICATIONService.preLogin(timeout.doubleValue) { callback(nativeResult($0, contentKey: "message")) }
}

func jverificationClearPreLoginCache() {
  JVERIFICATIONService.clearPreLoginCache()
}

func jverificationLoginAuth(_ options: JVerificationLoginAuthOptions, _ callback: @escaping JVerificationCallback, _ eventCallback: JVerificationEventCallback?) {
  // HBuilderX 生成的可空 Bool 必须在原生边界再次兜底，确保直接原生调用
  // 与 UTS 代理调用都保持传统插件的默认值。
  let autoFinish = options.autoFinish ?? true
  let animation = options.animationFlag ?? true
  let timeout = options.timeout?.doubleValue ?? 10000
  // 旧 loginAuth 第三参数使用“最近一次调用”槽位；每次调用都覆盖（包括 nil），
  // 不根据平台事件码推断生命周期，也不得覆盖 onAuthPageEvent 的持续订阅。
  legacyAuthPageEventCallback = eventCallback
  DispatchQueue.main.async {
    JVERIFICATIONService.getAuthorizationWith(
      UTSiOS.getCurrentViewController(),
      hide: autoFinish,
      animated: animation,
      timeout: timeout,
      completion: { callback(nativeResult($0, contentKey: "loginToken")) },
      actionBlock: { code, content in
        let event = result(code, content)
        legacyAuthPageEventCallback?(event)
        subscribedAuthPageEventCallback?(event)
      }
    )
  }
}

func jverificationDismissLoginAuth(_ needCloseAnim: Bool, _ callback: JVerificationCallback?) {
  customViewListeners.removeAll()
  JVERIFICATIONService.dismissLoginController(animated: needCloseAnim) {
    callback?(result(0, "ok"))
  }
}

func jverificationSetCustomUI(_ values: UTSJSONObject, _ landscapeValues: UTSJSONObject?) {
  // 传统 iOS 桥接仅接收并应用纵屏配置；保留第二参数仅维持跨端 UTS 类型契约。
  _ = landscapeValues
  DispatchQueue.main.async {
    let config = JVUIConfig()
    customViewListeners.removeAll()
    applyConfig(config, values)
    JVERIFICATIONService.customUI(with: config, customViews: { appendCustomViews(values, to: $0) })
  }
}

func jverificationSetCustomViewClickCallback(_ callback: JVerificationCustomViewCallback?) {
  customViewCallback = callback
}

func jverificationSetAuthPageEventCallback(_ callback: JVerificationEventCallback?) {
  subscribedAuthPageEventCallback = callback
  if callback == nil {
    // offAuthPageEvent 是统一注销入口；同时释放仍被旧第三参数持有的闭包。
    legacyAuthPageEventCallback = nil
  }
}

func jverificationGetSMSCode(_ options: JVerificationSMSOptions, _ callback: @escaping JVerificationCallback) {
  JVERIFICATIONService.getSMSCode(options.phoneNumber, templateID: options.templateID, signID: options.signID) {
    callback(nativeResult($0, contentKey: "msg"))
  }
}

func jverificationSetSMSInterval(_ interval: NSNumber) {
  JVERIFICATIONService.setGetCodeInternal(interval.doubleValue)
}
