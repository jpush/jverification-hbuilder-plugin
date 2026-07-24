# iOS 授权页 UI 配置

iOS 使用：

```ts
setCustomUIWithConfigiOS(config)
```

必须在 `loginAuth` 前调用。颜色使用 `0xAARRGGBB` 数值。iOS 插件不内置授权页 UI 图片或视频；宿主需要把资源放在 uni-app x 项目的 `static/...` 等可打包目录中，再通过对应字段显式传入。插件通过 `UTSiOS.getResourcePath` 转为原生 SDK 可读路径。

字体对象格式：

```ts
{
  size: 16,
  weight: 'semibold', // regular、medium、semibold、bold、heavy
  name: ''            // 可选，自定义字体名
}
```

## 1. 语言、导航栏和状态栏

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `appLanguageType` | `number` | 0 简体中文、1 繁体中文、2 英文。 |
| `operatorType` | `number` | 运营商类型，由 iOS SDK 解释。 |
| `navColor` | `number` | 导航栏背景色。 |
| `navText` | `[string,number,number]` | 标题、标题颜色、标题字号。 |
| `navReturnHidden` | `boolean` | 是否隐藏返回按钮。 |
| `navReturnImg` | `string` | 返回按钮图片路径。 |
| `navReturnImageEdgeInsets` | `object` | `{top,left,bottom,right}`。 |
| `navControl` | `object` | 声明式导航自定义按钮，见“自定义原生 UI 包装”。 |
| `navCustom` | `boolean` | 是否使用自定义/隐藏系统导航栏。 |
| `navTransparent` | `boolean` | 导航栏是否透明。 |
| `navBarBackGroundImage` | `string` | 导航栏背景图片；不要与 `navTransparent` 同时使用。 |
| `navDividingLineHidden` | `boolean` | 是否隐藏导航栏分割线。 |
| `prefersStatusBarHidden` | `boolean` | 竖屏时是否隐藏状态栏。 |
| `preferredStatusBarStyle` | `number` | 授权页状态栏样式。 |
| `agreementPreferredStatusBarStyle` | `number` | 协议页状态栏样式。 |
| `barStyle` | `number` | 已废弃兼容字段，优先使用 `preferredStatusBarStyle`。 |

## 2. 背景、布局和旋转

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `authPageBackgroundImage` | `string` | 授权页背景图片。 |
| `authPageGifImagePath` | `string` | GIF 背景路径。 |
| `authPageVideoPath` | `string` | 视频路径。 |
| `authPageVideoPlaceHolderImageName` | `string` | 视频未准备完成时的占位图。 |
| `authPageVideoPlaceholderImageName` | `string` | 上一字段的兼容拼写。 |
| `authPageBackgroudVideo` | `object` | 旧兼容格式 `{videoPath,videoPlaceHolderImagePath}`。 |
| `autoLayout` | `boolean` | 是否使用 Auto Layout。 |
| `shouldAutorotate` | `boolean` | 是否支持自动旋转。 |
| `supportedInterfaceOrientations` | `number` | `UIInterfaceOrientationMask` 原始数值，例如全部方向为 30。 |
| `orientation` | `number` | 初始方向。 |
| `modalTransitionStyle` | `string` | `CoverVertical`、`FlipHorizontal`、`CrossDissolve`、`PartialCurl`。 |
| `dismissAnimationFlag` | `boolean` | 关闭授权页是否显示动画。 |

背景视频示例：

```ts
setCustomUIWithConfigiOS({
  authPageVideoPath: 'static/jverification/videobg.mp4',
  authPageVideoPlaceHolderImageName: 'static/jverification/bg.jpeg',
  supportedInterfaceOrientations: 30
})
```

## 3. Logo、号码、slogan 和登录按钮

| 区域 | 字段 |
| --- | --- |
| Logo | `logoImg`、`logoWidth`、`logoHeight`、`logoOffsetY`、`logoHidden`、`logoConstraints`、`logoHorizontalConstraints` |
| 号码 | `numberColor`、`numberSize`、`numberFont`、`numFieldOffsetY`、`numberConstraints`、`numberHorizontalConstraints` |
| slogan | `sloganOffsetY`、`sloganTextColor`、`sloganFont`、`sloganConstraints`、`sloganHorizontalConstraints` |
| 登录按钮 | `logBtnText`、`logBtnFont`、`logBtnOffsetY`、`logBtnTextColor`、`logBtnImgs`、`logBtnConstraints`、`logBtnHorizontalConstraints` |

`logBtnImgs` 按以下顺序传入三张图片：

```ts
logBtnImgs: [
  'static/jverification/login-active.png',
  'static/jverification/login-disabled.png',
  'static/jverification/login-highlighted.png'
]
```

顺序为激活、失效、高亮。

## 4. 布局约束

所有 `*Constraints` 字段支持传统四数字简写：

```ts
[centerX, centerY, width, height]
```

也支持原生约束描述数组：

```ts
checkViewConstraints: [{
  attribute: 'left',
  relation: 'equal',
  toItem: 'super',
  toAttribute: 'left',
  constant: 20
}, {
  attribute: 'top',
  relation: 'equal',
  toItem: 'privacy',
  toAttribute: 'top',
  constant: 0
}, {
  attribute: 'width',
  relation: 'equal',
  toItem: 'none',
  toAttribute: 'width',
  constant: 18
}, {
  attribute: 'height',
  relation: 'equal',
  toItem: 'none',
  toAttribute: 'height',
  constant: 18
}]
```

支持值：

- `attribute` / `toAttribute`：`left`、`right`、`top`、`bottom`、`leading`、`trailing`、`width`、`height`、`centerX`、`centerY`、`firstBaseline`、`lastBaseline`、`notAnAttribute`。
- `relation`：`equal`、`lessThanOrEqual`、`greaterThanOrEqual`。
- `toItem`：`none`、`logo`、`number`、`slogan`、`login`、`check`、`privacy`、`super`。
- `multiplier` 默认 1，`constant` 默认 0。

## 5. checkbox、隐私栏和协议页

### checkbox

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `uncheckedImg` | `string` | 未选中图片。 |
| `checkedImg` | `string` | 选中图片。 |
| `checkViewHidden` | `boolean` | 是否隐藏 checkbox。 |
| `checkViewConstraints` | `array` | 竖屏约束。 |
| `checkViewHorizontalConstraints` | `array` | 横屏约束。 |
| `privacyState` | `boolean` | 默认是否勾选。 |

### 隐私协议栏

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `appPrivacyOne` / `appPrivacyTwo` | `[string,string]` | 自定义协议名称和 URL。 |
| `appPrivacys` | `array` | 多条协议组合；使用后单条协议字段不生效。 |
| `appPrivacyColor` | `[number,number]` | 普通文字颜色和协议文字颜色。 |
| `privacyTextAlignment` | `string` | `left` 或 `center`。 |
| `privacyTextFontSize` | `number` | 协议字号。 |
| `privacyShowBookSymbol` | `boolean` | 是否显示书名号。 |
| `privacyLineSpacing` | `number` | 协议行距。 |
| `privacyOffsetY` | `number` | 协议区域相对底部的偏移。 |
| `privacyComponents` | `[string,string]` | 头部和尾部文字。 |
| `privacyTextAttributes` | `object[]` | 协议富文本属性，见后文。 |
| `privacysNavCustom` | `boolean` | 是否自定义协议导航。 |
| `textVerAlignment` | `number` | 协议文本垂直对齐方式。 |
| `openPrivacyInBrowser` | `boolean` | 是否使用浏览器打开协议。 |
| `privacyConstraints` | `array` | 竖屏约束。 |
| `privacyHorizontalConstraints` | `array` | 横屏约束。 |
| `customPrivacyAlertViewBlock` | `object` | 未启用 SDK 内置二次弹窗时的声明式提示框。 |

协议页支持：

```text
agreementNavBackgroundColor
agreementNavText
firstPrivacyAgreementNavText
secondPrivacyAgreementNavText
agreementNavTextFont
agreementNavTextColor
agreementNavReturnImage
agreementPreferredStatusBarStyle
```

`agreementNavText`、`firstPrivacyAgreementNavText`、`secondPrivacyAgreementNavText` 使用 `[text,color,size]`。

## 6. Window 弹窗授权页和 loading

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `showWindow` | `boolean` | 是否以 window 弹窗方式显示授权页。 |
| `windowBackgroundImage` | `string` | 弹窗背景图片。 |
| `windowBackgroundAlpha` | `number` | 弹窗外侧透明度，0～1。 |
| `windowCornerRadius` | `number` | 弹窗圆角。 |
| `windowConstraints` | `array` | 竖屏弹窗约束。 |
| `windowHorizontalConstraints` | `array` | 横屏弹窗约束。 |
| `windowCloseBtnImgs` | `array` | 关闭按钮图片。 |
| `windowCloseBtnConstraints` | `array` | 竖屏关闭按钮约束。 |
| `windowCloseBtnHorizontalConstraints` | `array` | 横屏关闭按钮约束。 |
| `loadingConstraints` | `array` | 竖屏 loading 约束。 |
| `loadingHorizontalConstraints` | `array` | 横屏 loading 约束。 |
| `customLoadingViewBlock` | `object` | 声明式自定义 loading。 |

## 7. 二次隐私弹窗

支持字段：

```text
isAlertPrivacyVC
agreementAlertViewShowWindow
agreementAlertViewModalTransitionStyle
agreementAlertViewTitleText
agreementAlertViewTitleTextFont
agreementAlertViewTitleTexFont
agreementAlertViewTitleTextFontSize
agreementAlertViewTitleTextColor
agreementAlertViewContentTextAlignment
agreementAlertViewContentTextFontSize
agreementAlertViewBackgroundColor
agreementAlertViewBackgroundImage
agreementAlertViewLogBtnImgs
agreementAlertViewLogBtnText
agreementAlertViewLogBtnTextFontSize
agreementAlertViewLogBtnTextColor
resetAgreementAlertViewFrameBlock
customAgreementAlertView
```

`agreementAlertViewTitleTexFont` 是 iOS SDK 拼写的兼容字段；新配置可使用 `agreementAlertViewTitleTextFont`。

当 `isAlertPrivacyVC: true` 时，插件会设置 iOS SDK 所需的内部回调，使未勾选协议的登录按钮仍可点击并进入 SDK 二次弹窗。此模式不需要 `privacyCheckToastMessage`。

### resetAgreementAlertViewFrameBlock

该字段不接收 JS 函数，而是声明式对象：

```ts
resetAgreementAlertViewFrameBlock: {
  preset: 'officialDemo',
  centerSuperView: true,
  superViewFrame: [0, 0, 280, 200],
  alertViewFrame: [0, 0, 280, 200],
  titleFrame: [20, 10, 240, 50],
  contentFrame: [20, 65, 240, 80],
  buttonFrame: [140, 150, 140, 50]
}
```

`preset: 'officialDemo'` 对应极光 iOS Demo 的 280×200 window 卡片或底部 180 高弹层。

### customAgreementAlertView

使用 `views` 声明 label、button、imageView：

```ts
customAgreementAlertView: {
  views: [{
    type: 'button',
    id: 'agreement-disagree',
    title: '不同意',
    textFont: 14,
    textColor: 0xffffffff,
    left: 0,
    bottom: 0,
    widthRatio: 0.5,
    height: 50,
    action: 'hideAlertView'
  }]
}
```

支持 `top/left/right/bottom/width/height` 和 `widthRatio/heightRatio`。按钮 `action: 'hideAlertView'` 会调用 SDK 的关闭二次弹窗动作；非空 `id` 也会进入 `addCustomViewsClickCallback`。

## 8. 自定义原生 UI 包装

插件在 Swift 层创建 UIKit 对象，UTS 只传稳定 JSON：

- `navControl`：支持 `id/title/textFont/textColor/imagePath/backgroundImagePath/width/height/isFinish`。
- `customLoadingViewBlock`：支持 `style: 'medium' | 'large'`、`text/textFont/textColor/indicatorColor/backgroundColor`。
- `customPrivacyAlertViewBlock`：仅在 `isAlertPrivacyVC: false` 时生效，支持 `title/message/confirmText/cancelText`。
- `privacyTextAttributes`：数组元素为 `{name,value,location,length}`。

`privacyTextAttributes.name` 支持：

```text
foregroundColor
backgroundColor
underlineColor
strikethroughColor
underlineStyle
strikethroughStyle
kern
font
```

其中 `font` 的 value 使用 `{size,weight?,name?}`；`location/length` 必须落在最终协议拼接文本范围内。

## 9. 授权页自定义控件

顶层 `addCustomViews` 支持 `label`、`button` 和 `imageView`：

```ts
addCustomViews: [{
  type: 'button',
  id: 'ios-help',
  title: '其他登录方式',
  textColor: 0xff2563eb,
  textFont: 15,
  width: 180,
  height: 44,
  top: 260,
  isFinish: false
}]
```

通用字段包括 `width/height/top/left/right/bottom/backgroundColor/cornerRadius`；label 还支持 `numberOfLines`、`textAlignment`，按钮还支持 `normalImagePath/backgroundImagePath/selectImagePath`。

使用 `addCustomViewsClickCallback` 接收按钮 ID，页面销毁时调用 `removeCustomViewsClickCallback`。
