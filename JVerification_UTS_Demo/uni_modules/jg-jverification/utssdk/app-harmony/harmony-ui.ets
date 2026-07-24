import { AuthLoginCallBack, GenAuthThemeConfigBuilder } from '@jg/verify'
import { getCurrentPages, UniPageImpl } from '@dcloudio/uni-app-x-runtime'

export function resolveHarmonyDialogPage(): object | null {
  const pages = getCurrentPages()
  if (pages.length === 0) {
    return null
  }
  // @jg/verify@1.2.0 会把 Dialog Builder 绑定到 setDialogPage 的对象；
  // 必须返回 uni-app x 当前页面背后的真实 ArkUI PageContainer，普通空对象无法构建 Dialog。
  const page = pages[pages.length - 1] as UniPageImpl
  return page.getNativePage().page
}

export function configureHarmonyCmWindowMode(
  builder: GenAuthThemeConfigBuilder,
  width: string,
  height: string
): void {
  builder.setWindowMode({
    width: width,
    height: height
  })
}

export function configureHarmonyCmDefaultImages(builder: GenAuthThemeConfigBuilder): void {
  builder.setLoginBtnImgPath($r('app.media.jverify_login_back'))
}

function resolveHorizontalAlign(value: string): HorizontalAlign {
  if (value === 'start') {
    return HorizontalAlign.Start
  }
  if (value === 'end') {
    return HorizontalAlign.End
  }
  return HorizontalAlign.Center
}

function resolveVerticalAlign(value: string): VerticalAlign {
  if (value === 'top') {
    return VerticalAlign.Top
  }
  if (value === 'bottom') {
    return VerticalAlign.Bottom
  }
  return VerticalAlign.Center
}

export function configureHarmonyCmClauseAlignRule(
  builder: GenAuthThemeConfigBuilder,
  middleAnchor: string,
  middleAlign: string,
  centerAnchor: string,
  centerAlign: string
): void {
  builder.setClauseAlignRuleOption({
    middle: {
      anchor: middleAnchor,
      align: resolveHorizontalAlign(middleAlign)
    },
    center: {
      anchor: centerAnchor,
      align: resolveVerticalAlign(centerAlign)
    }
  })
}

export function configureHarmonyCmClauseTopAlignRule(
  builder: GenAuthThemeConfigBuilder,
  middleAnchor: string,
  middleAlign: string,
  topAnchor: string,
  topAlign: string
): void {
  builder.setClauseAlignRuleOption({
    middle: {
      anchor: middleAnchor,
      align: resolveHorizontalAlign(middleAlign)
    },
    top: {
      anchor: topAnchor,
      align: resolveVerticalAlign(topAlign)
    }
  })
}

export function configureHarmonyCmClauseBottomAlignRule(
  builder: GenAuthThemeConfigBuilder,
  middleAnchor: string,
  middleAlign: string,
  bottomAnchor: string,
  bottomAlign: string
): void {
  builder.setClauseAlignRuleOption({
    middle: {
      anchor: middleAnchor,
      align: resolveHorizontalAlign(middleAlign)
    },
    bottom: {
      anchor: bottomAnchor,
      align: resolveVerticalAlign(bottomAlign)
    }
  })
}

export function configureHarmonyCmCheckBoxAlignRule(
  builder: GenAuthThemeConfigBuilder,
  leftAnchor: string,
  leftAlign: string,
  bottomAnchor: string,
  bottomAlign: string
): void {
  builder.setCheckBoxAlignRuleOption({
    left: {
      anchor: leftAnchor,
      align: resolveHorizontalAlign(leftAlign)
    },
    bottom: {
      anchor: bottomAnchor,
      align: resolveVerticalAlign(bottomAlign)
    }
  })
}

export function configureHarmonyCmCheckBoxCenterAlignRule(
  builder: GenAuthThemeConfigBuilder,
  leftAnchor: string,
  leftAlign: string,
  centerAnchor: string,
  centerAlign: string
): void {
  builder.setCheckBoxAlignRuleOption({
    left: {
      anchor: leftAnchor,
      align: resolveHorizontalAlign(leftAlign)
    },
    center: {
      anchor: centerAnchor,
      align: resolveVerticalAlign(centerAlign)
    }
  })
}

export function configureHarmonyCmCheckBoxTopAlignRule(
  builder: GenAuthThemeConfigBuilder,
  leftAnchor: string,
  leftAlign: string,
  topAnchor: string,
  topAlign: string
): void {
  builder.setCheckBoxAlignRuleOption({
    left: {
      anchor: leftAnchor,
      align: resolveHorizontalAlign(leftAlign)
    },
    top: {
      anchor: topAnchor,
      align: resolveVerticalAlign(topAlign)
    }
  })
}

class HarmonyCustomViewStyle {
  type: string = 'button'
  text: string = ''
  textSize: number = 15
  textColor: number = 0xffffffff
  backgroundColor: number = 0xff359af3
  width: number = 120
  height: number = 40
  borderRadius: number = 8
  marginTop: number = 0
  marginRight: number = 0
  marginBottom: number = 0
  marginLeft: number = 0
  onClick: () => void = () => {}
}

let authCustomViewStyle = new HarmonyCustomViewStyle()
let checkDialogCustomViewStyle = new HarmonyCustomViewStyle()

export function configureHarmonyAuthCustomView(
  type: string,
  text: string,
  textSize: number,
  textColor: number,
  backgroundColor: number,
  width: number,
  height: number,
  borderRadius: number,
  marginTop: number,
  marginRight: number,
  marginBottom: number,
  marginLeft: number,
  onClick: () => void
): void {
  authCustomViewStyle.type = type
  authCustomViewStyle.text = text
  authCustomViewStyle.textSize = textSize
  authCustomViewStyle.textColor = textColor
  authCustomViewStyle.backgroundColor = backgroundColor
  authCustomViewStyle.width = width
  authCustomViewStyle.height = height
  authCustomViewStyle.borderRadius = borderRadius
  authCustomViewStyle.marginTop = marginTop
  authCustomViewStyle.marginRight = marginRight
  authCustomViewStyle.marginBottom = marginBottom
  authCustomViewStyle.marginLeft = marginLeft
  authCustomViewStyle.onClick = onClick
}

export function configureHarmonyCheckDialogCustomView(
  type: string,
  text: string,
  textSize: number,
  textColor: number,
  backgroundColor: number,
  width: number,
  height: number,
  borderRadius: number,
  marginTop: number,
  marginRight: number,
  marginBottom: number,
  marginLeft: number,
  onClick: () => void
): void {
  checkDialogCustomViewStyle.type = type
  checkDialogCustomViewStyle.text = text
  checkDialogCustomViewStyle.textSize = textSize
  checkDialogCustomViewStyle.textColor = textColor
  checkDialogCustomViewStyle.backgroundColor = backgroundColor
  checkDialogCustomViewStyle.width = width
  checkDialogCustomViewStyle.height = height
  checkDialogCustomViewStyle.borderRadius = borderRadius
  checkDialogCustomViewStyle.marginTop = marginTop
  checkDialogCustomViewStyle.marginRight = marginRight
  checkDialogCustomViewStyle.marginBottom = marginBottom
  checkDialogCustomViewStyle.marginLeft = marginLeft
  checkDialogCustomViewStyle.onClick = onClick
}

@Builder
export function buildHarmonyAuthCustomView() {
  if (authCustomViewStyle.type === 'text') {
    Text(authCustomViewStyle.text)
      .fontSize(authCustomViewStyle.textSize)
      .fontColor(authCustomViewStyle.textColor)
      .width(authCustomViewStyle.width)
      .height(authCustomViewStyle.height)
      .margin({
        top: authCustomViewStyle.marginTop,
        right: authCustomViewStyle.marginRight,
        bottom: authCustomViewStyle.marginBottom,
        left: authCustomViewStyle.marginLeft
      })
      .onClick(authCustomViewStyle.onClick)
  } else {
    Button() {
      Text(authCustomViewStyle.text)
        .fontSize(authCustomViewStyle.textSize)
        .fontColor(authCustomViewStyle.textColor)
    }
    .width(authCustomViewStyle.width)
    .height(authCustomViewStyle.height)
    .backgroundColor(authCustomViewStyle.backgroundColor)
    .borderRadius(authCustomViewStyle.borderRadius)
    .margin({
      top: authCustomViewStyle.marginTop,
      right: authCustomViewStyle.marginRight,
      bottom: authCustomViewStyle.marginBottom,
      left: authCustomViewStyle.marginLeft
    })
    .onClick(authCustomViewStyle.onClick)
  }
}

@Builder
export function buildHarmonyCheckDialogCustomView() {
  if (checkDialogCustomViewStyle.type === 'text') {
    Text(checkDialogCustomViewStyle.text)
      .fontSize(checkDialogCustomViewStyle.textSize)
      .fontColor(checkDialogCustomViewStyle.textColor)
      .width(checkDialogCustomViewStyle.width)
      .height(checkDialogCustomViewStyle.height)
      .margin({
        top: checkDialogCustomViewStyle.marginTop,
        right: checkDialogCustomViewStyle.marginRight,
        bottom: checkDialogCustomViewStyle.marginBottom,
        left: checkDialogCustomViewStyle.marginLeft
      })
      .onClick(checkDialogCustomViewStyle.onClick)
  } else {
    Button() {
      Text(checkDialogCustomViewStyle.text)
        .fontSize(checkDialogCustomViewStyle.textSize)
        .fontColor(checkDialogCustomViewStyle.textColor)
    }
    .width(checkDialogCustomViewStyle.width)
    .height(checkDialogCustomViewStyle.height)
    .backgroundColor(checkDialogCustomViewStyle.backgroundColor)
    .borderRadius(checkDialogCustomViewStyle.borderRadius)
    .margin({
      top: checkDialogCustomViewStyle.marginTop,
      right: checkDialogCustomViewStyle.marginRight,
      bottom: checkDialogCustomViewStyle.marginBottom,
      left: checkDialogCustomViewStyle.marginLeft
    })
    .onClick(checkDialogCustomViewStyle.onClick)
  }
}

class HarmonyCmLoginPageButtonStyle {
  id: string = ''
  anchor: string = 'loginBtn'
  type: string = 'button'
  text: string = ''
  textSize: number = 16
  textColor: number = 0xffffffff
  backgroundColor: number = 0xff359af3
  width: number = 180
  height: number = 44
  borderRadius: number = 22
  marginTop: number = 0
  marginRight: number = 0
  marginBottom: number = 0
  marginLeft: number = 0
  action: string = 'callback'
}

class HarmonyCmLoginPageStyle {
  showTitle: boolean = false
  title: string = '极光认证'
  titleSize: number = 24
  titleColor: number = 0xff17233d
  backgroundColor: number = 0xffffffff
  backgroundImage: string = ''
  buttons: Array<HarmonyCmLoginPageButtonStyle> = []
  onButtonClick: (id: string, action: string) => void = (_id: string, _action: string): void => {}
}

let cmLoginPageStyle = new HarmonyCmLoginPageStyle()

export function configureHarmonyCmLoginPage(
  showTitle: boolean,
  title: string,
  titleSize: number,
  titleColor: number,
  backgroundColor: number,
  backgroundImage: string,
  onButtonClick: (id: string, action: string) => void
): void {
  cmLoginPageStyle.showTitle = showTitle
  cmLoginPageStyle.title = title
  cmLoginPageStyle.titleSize = titleSize
  cmLoginPageStyle.titleColor = titleColor
  cmLoginPageStyle.backgroundColor = backgroundColor
  cmLoginPageStyle.backgroundImage = backgroundImage
  cmLoginPageStyle.buttons = []
  cmLoginPageStyle.onButtonClick = onButtonClick
}

export function addHarmonyCmLoginPageButton(
  id: string,
  anchor: string,
  type: string,
  text: string,
  textSize: number,
  textColor: number,
  backgroundColor: number,
  width: number,
  height: number,
  borderRadius: number,
  marginTop: number,
  marginRight: number,
  marginBottom: number,
  marginLeft: number,
  action: string
): void {
  const style = new HarmonyCmLoginPageButtonStyle()
  style.id = id
  style.anchor = anchor
  style.type = type
  style.text = text
  style.textSize = textSize
  style.textColor = textColor
  style.backgroundColor = backgroundColor
  style.width = width
  style.height = height
  style.borderRadius = borderRadius
  style.marginTop = marginTop
  style.marginRight = marginRight
  style.marginBottom = marginBottom
  style.marginLeft = marginLeft
  style.action = action
  cmLoginPageStyle.buttons.push(style)
}

@Builder
function buildHarmonyCmLoginPageButton(style: HarmonyCmLoginPageButtonStyle) {
  if (style.type === 'text') {
    Text(style.text)
      .id(style.id)
      .fontSize(style.textSize)
      .fontColor(style.textColor)
      .width(style.width)
      .height(style.height)
      .alignRules({
        middle: { anchor: '__container__', align: HorizontalAlign.Center },
        top: { anchor: style.anchor, align: VerticalAlign.Bottom }
      })
      .margin({
        top: style.marginTop,
        right: style.marginRight,
        bottom: style.marginBottom,
        left: style.marginLeft
      })
      .onClick((): void => {
        cmLoginPageStyle.onButtonClick(style.id, style.action)
      })
  } else {
    Button() {
      Text(style.text)
        .fontSize(style.textSize)
        .fontColor(style.textColor)
    }
    .id(style.id)
    .width(style.width)
    .height(style.height)
    .backgroundColor(style.backgroundColor)
    .borderRadius(style.borderRadius)
    .alignRules({
      middle: { anchor: '__container__', align: HorizontalAlign.Center },
      top: { anchor: style.anchor, align: VerticalAlign.Bottom }
    })
    .margin({
      top: style.marginTop,
      right: style.marginRight,
      bottom: style.marginBottom,
      left: style.marginLeft
    })
    .onClick((): void => {
      cmLoginPageStyle.onButtonClick(style.id, style.action)
    })
  }
}

@Builder
export function buildHarmonyCmLoginPage(_obj?: object) {
  if (cmLoginPageStyle.backgroundImage.length > 0) {
    Image(cmLoginPageStyle.backgroundImage)
      .width('100%')
      .height('100%')
      .objectFit(ImageFit.Cover)
      .backgroundColor(cmLoginPageStyle.backgroundColor)
      .hitTestBehavior(HitTestMode.None)
  } else {
    Column()
      .width('100%')
      .height('100%')
      .backgroundColor(cmLoginPageStyle.backgroundColor)
      .hitTestBehavior(HitTestMode.None)
  }
  if (cmLoginPageStyle.showTitle && cmLoginPageStyle.title.length > 0) {
    Text(cmLoginPageStyle.title)
      .id('jg-cm-login-page-title')
      .fontSize(cmLoginPageStyle.titleSize)
      .fontColor(cmLoginPageStyle.titleColor)
      .fontWeight(FontWeight.Bold)
      .alignRules({
        middle: { anchor: '__container__', align: HorizontalAlign.Center },
        top: { anchor: '__container__', align: VerticalAlign.Top }
      })
      .margin({ top: 80 })
  }
  ForEach(cmLoginPageStyle.buttons, (style: HarmonyCmLoginPageButtonStyle) => {
    buildHarmonyCmLoginPageButton(style)
  })
}

class HarmonyCmAuthLoginListenerContext {}

export class HarmonyCmAuthLoginListener {
  // GenAuthLoginListener 是结构化接口，1.2.0 的声明要求实现对象同时带有 obj。
  obj: object = new HarmonyCmAuthLoginListenerContext()
  private message: string
  private confirmText: string
  private cancelText: string
  private confirmColor: string
  private cancelColor: string

  constructor(
    message: string,
    confirmText: string,
    cancelText: string,
    confirmColor: string,
    cancelColor: string
  ) {
    this.message = message
    this.confirmText = confirmText
    this.cancelText = cancelText
    this.confirmColor = confirmColor
    this.cancelColor = cancelColor
  }

  onAuthLoginListener(context: UIContext, callBack: AuthLoginCallBack): void {
    context.getPromptAction().showDialog({
      message: this.message,
      buttons: [{
        text: this.confirmText,
        color: this.confirmColor
      }, {
        text: this.cancelText,
        color: this.cancelColor
      }]
    }).then((data) => {
      callBack.onAuthLoginCallBack(data.index === 0)
    }).catch(() => {
      callBack.onAuthLoginCallBack(false)
    })
  }
}
