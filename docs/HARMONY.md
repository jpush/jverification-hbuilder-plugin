# HarmonyOS 授权页 UI 配置

HarmonyOS 使用：

```ts
setCustomUIWithConfigHarmony(config)
```

必须在 `loginAuth` 前调用。本文以 `@jg/verify@1.2.0` 的实际能力为准；插件固定使用 Router，不使用 Navigation 或 `navPathStack`。

颜色使用 `0xAARRGGBB` 数值，边距使用：

```ts
{ top: 0, right: 0, bottom: 0, left: 0 }
```

HarmonyOS 图片字段传宿主 `AppScope/resources/base/media` 中的原生资源名，不传 Android/iOS 的 `static/...` 路径；背景视频放在 `AppScope/resources/rawfile`。

## 1. 弹窗、背景和安全区

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `setStackLayout` | `boolean` | 是否使用 SDK Stack 布局。当前 Demo 使用非 Stack 布局。 |
| `enableDialogMode` | `boolean` | 是否启用授权页弹窗模式。 |
| `setDialogPage` | `boolean` | 弹窗模式下绑定插件提供的 ArkUI Page Builder。 |
| `setDialogWidth` | `number` | 弹窗宽度。 |
| `setDialogHeight` | `number` | 弹窗高度。 |
| `setAuthBGImgPath` / `setAuthBGImgPathFromJs` | `string` | 背景图片资源名；`FromJs` 只是兼容别名，不转换 `static/...`。 |
| `setAuthBGGifPath` / `setAuthBGGifPathFromJs` | `string` | GIF 背景资源名。 |
| `setAuthBGVideoPath` / `setAuthBGVideoPathFromJs` | `string` | `rawfile` 中的视频文件名。 |
| `setAuthBGVideoPlaceholderPath` / `setAuthBGVideoPlaceholderPathFromJs` | `string` | 视频占位图的 media 资源名。 |
| `setTopSafeAreaHeight` | `number` | 顶部安全区高度。 |
| `setBottomSafeAreaHeight` | `number` | 底部安全区高度。 |

弹窗示例：

```ts
setCustomUIWithConfigHarmony({
  enableDialogMode: true,
  setDialogPage: true,
  setDialogWidth: 275,
  setDialogHeight: 400
})
```

背景视频示例：

```ts
setCustomUIWithConfigHarmony({
  setAuthBGVideoPath: 'videobg.mp4',
  setAuthBGVideoPlaceholderPath: 'jverify_background'
})
```

## 2. 返回按钮

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `setReturnBtnImgPath` / `setNavReturnImgPath` | `string` | 返回按钮图片资源名。 |
| `setReturnBtnHidden` / `setNavReturnBtnHidden` | `boolean` | 是否隐藏返回按钮。 |
| `setReturnBtnWidth` | `number` | 返回按钮宽度。 |
| `setReturnBtnHeight` | `number` | 返回按钮高度。 |
| `setReturnBtnOffsetX` | `number` | 横向偏移。 |
| `setReturnBtnOffsetY` | `number` | 纵向偏移。 |

全屏授权页会由适配层处理状态栏安全区，避免关闭按钮落入状态栏不可点击区域。

## 3. Logo、号码、slogan 和登录按钮

| 区域 | 字段 |
| --- | --- |
| Logo | `setLogoImgPath`、`setLogoImgPathFromJs`、`setLogoWidth`、`setLogoHeight`、`setLogoOffsetX`、`setLogoOffsetY`、`setLogoHidden` |
| 号码 | `setNumberColor`、`setNumberSize`、`setNumFieldOffsetX`、`setNumFieldOffsetY`、`setNumberFieldWidth`、`setNumberFieldHeight`、`setNumberTextBold` |
| slogan | `setSloganTextColor`、`setSloganTextSize`、`setSloganOffsetX`、`setSloganOffsetY`、`setSloganTextBold` |
| 登录按钮 | `setLogBtnText`、`setLogBtnTextColor`、`setLogBtnImgPath`、`setLogBtnOffsetX`、`setLogBtnOffsetY`、`setLogBtnWidth`、`setLogBtnHeight`、`setLogBtnTextSize`、`setLogBtnTextBold` |

图片字段为原生资源名，颜色和尺寸为 `number`，加粗/隐藏字段为 `boolean`。

## 4. 隐私协议栏和协议页

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `setPrivacyColor` | `array` | 普通文字和协议文字颜色。 |
| `setPrivacyMargin` | `object` | 协议栏四边距。 |
| `setPrivacyText` | `array` | 协议栏头尾文字。 |
| `setUncheckedImgPath` | `string` | checkbox 未选中图片。 |
| `setCheckedImgPath` | `string` | checkbox 选中图片。 |
| `setPrivacyState` | `boolean` | 默认是否勾选。 |
| `setPrivacyTextCenterGravity` | `boolean` | 协议文字是否居中。 |
| `setPrivacyTextSize` | `number` | 协议字号。 |
| `setPrivacyCheckboxSize` | `number` | checkbox 尺寸。 |
| `setPrivacyCheckboxInCenter` | `boolean` | checkbox 是否与协议文字垂直居中。 |
| `setEnableHintToastText` | `string` | 未勾选时的提示文字。 |
| `setEnablePrivacyCheckDialog` | `boolean` | 是否开启二次隐私弹窗。 |
| `setPrivacyTextBold` | `boolean` | 协议文字是否加粗。 |
| `setPrivacyUnderlineText` | `boolean` | 协议文字是否显示下划线。 |
| `setPrivacyNameAndUrlBeanList` | `object[]` | 元素为 `{name,url,separator?,beforeName?,text?}`；`beforeName` 是 `separator` 的兼容字段。 |
| `setPrivacyWithBookTitleMark` | `boolean` | 协议名是否使用书名号。 |
| `setPrivacyNavColor` | `number` | 协议页导航背景色。 |
| `setPrivacyNavTitleTextColor` | `number` | 协议页标题颜色。 |
| `setPrivacyNavTitleTextSize` | `number` | 协议页标题字号。 |
| `setPrivacyNavReturnBtnPath` | `string` | 协议页返回按钮资源名。 |
| `setPrivacyNavTitleTextBold` | `boolean` | 协议页标题是否加粗。 |

## 5. 二次隐私弹窗

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `setPrivacyCheckDialogTitleText` | `string` | 标题。 |
| `setPrivacyCheckDialogLogBtnText` | `string` | 同意按钮文字。 |
| `setPrivacyCheckDialogTitleTextSize` | `number` | 标题字号。 |
| `setPrivacyCheckDialogTitleTextColor` | `number` | 标题颜色。 |
| `setPrivacyCheckDialogContentTextGravityCenter` | `boolean` | 内容是否居中。 |
| `setPrivacyCheckDialogContentTextSize` | `number` | 内容字号。 |
| `setPrivacyCheckDialogContentTextMargin` | `object` | 内容区域边距。 |
| `setPrivacyCheckDialogLogBtnImgPath` | `string` | 登录按钮图片资源名。 |
| `setPrivacyCheckDialogLogBtnTextColor` | `number` | 登录按钮文字颜色。 |
| `setPrivacyCheckDialogWidth` / `setPrivacyCheckDialogHeight` | `number` | 弹窗尺寸。 |
| `setPrivacyCheckDialogLogBtnWidth` / `setPrivacyCheckDialogLogBtnHeight` | `number` | 登录按钮尺寸。 |
| `setPrivacyCheckDialogLogBtnMargin` | `object` | 登录按钮边距。 |
| `setPrivacyCheckDialogBackgroundColor` | `number` | 弹窗背景色。 |
| `setPrivacyCheckDialogBackgroundImgPath` | `string` | 弹窗背景图片资源名。 |

若需要增加“取消”等控件，使用 `addCustomViewToCheckDialog`。`type` 支持 `text`、`button` 和 `image`：

- `image` 是 `AppScope/resources/base/media` 中不含扩展名的资源名。
- `imageSource` 是直接交给 ArkUI `Image` 的 URI 或 Base64 字符串，有值时优先于 `image`。
- `type: 'image'` 渲染为可点击图片；`type: 'button'` 同时传 `image` 或 `imageSource` 时，以图片作为 Button 的内容。

```ts
addCustomViewToCheckDialog: {
  id: 'harmony-check-cancel',
  type: 'button',
  image: 'jverify_culogo',
  width: 48,
  height: 48,
  action: 'closeCheckDialog'
}
```

点击 ID 通过 `addCustomViewsClickCallback` 返回。

## 6. 授权页自定义控件

`addCustomView` 支持在电信/联通授权页增加声明式控件：

```ts
addCustomView: {
  id: 'harmony-help',
  type: 'image',
  image: 'jverify_ctlogo',
  width: 48,
  height: 48,
  margin: { top: 16, right: 0, bottom: 0, left: 0 },
  action: 'none'
}
```

支持字段：

```text
id
type: button | text | image
image: media 资源名
imageSource: URI 或 Base64（优先于 image）
text
textSize
textColor
backgroundColor
width
height
borderRadius
margin
action
```

所有非空 `id` 点击后都会通过 `addCustomViewsClickCallback` 返回。授权页控件的 `action` 支持 `none` 和 `dismissLoginAuth`；二次弹窗控件支持 `closeCheckDialog`。`setLoginBtnImgPath` 仅用于移动 SDK 自身的登录按钮，不用于此类自定义控件。

## 7. 移动运营商 setCmUIConfig

`setCmUIConfig` 是移动运营商专属配置。它与电信/联通普通 Builder 字段不是同一套 UI。

当前声明式协议覆盖：

- 状态栏、导航、号码和登录按钮。
- 登录按钮正常态与禁用态。
- checkbox、协议文案和服务条款。
- window 尺寸与位置。
- 协议与 checkbox 对齐规则。
- `setLoginPageComponent` 背景和自定义控件（`buttons` / `widgets`）。
- 登录确认弹窗。

### 全部 setCmUIConfig 字段

| 区域 | 字段 |
| --- | --- |
| 页面与导航 | `setAuthPageGrayScale`、`setNavTextSize`、`setNavTextColor`、`setNavColor`、`setLanguageType` |
| 号码 | `setNumberSize`、`setNumberBold`、`setNumberColor`、`setNumberMargin`、`setNumberWidth`、`setNumberHeight` |
| 登录按钮 | `setLogBtnText`、`setLoginBtnTextSize`、`setLoginBtnTextColor`、`setLoginBtnBorderRadius`、`setLoginBtnColor`、`setLoginBtnImgPath`、`setLoginBtnWidth`、`setLoginBtnHeight`、`setLoginBtnMargin`、`setLoginBtnMarginRight`、`setLoginBtnBorderColor`、`setLoginBtnBorderWidth` |
| 登录按钮禁用态 | `setLoginBtnDisabledTextColor`、`setLoginBtnDisabledColor`、`setLoginBtnDisabledImgPath`、`setLoginBtnDisabledBorderColor`、`setLoginBtnDisabledBorderWidth` |
| checkbox | `setCheckBox: [width,height]`、`setCheckBoxMargin`、`setCheckTipText`、`setClauseState`、`setCheckedColor`、`setcheckBoxLocation`、`setCheckBoxAlignRuleOption` |
| 协议 | `setprivacyTextSize`、`setPrivacyTextBold`、`setclauseBaseColor`、`setclauseColor`、`setisPrivacyTextGravityCenter`、`setClauseMargin`、`setprivacyMarginRight`、`setprivacyOffsetY`、`setprivacyOffsetYB`、`setprivacyBookSymbol`、`setClauses`、`setClauseAlignRuleOption`、`setClauseNavMarginTop` |
| 动画 | `setauthPageActIn`、`setactivityOut`、`setauthPageActOut`、`setactivityIn` |
| Window | `setWindowWidth`、`setWindowHeight`、`setwindowX`、`setwindowY`、`setwindowBottom`、`setWindowMode: {width,height}` |
| 系统 | `setthemeId`、`setisFitsSystemWindows`、`setWebDomStorage`、`setSystemBarProperties`、`useDefaultLoginButtonImage` |
| 高级 UI | `setLoginPageComponent`、`setGenAuthLoginConfirmDialog` |

`setNumberMargin`、`setLoginBtnMargin`、`setCheckBoxMargin`、`setClauseMargin` 使用 `{top,right,bottom,left}`。`setClauses` 元素支持：

```ts
{
  text: '《用户协议》',
  url: 'https://example.com',
  fontSize: 14,
  fontColor: 0xff2563eb,
  bold: false,
  isProtocol: true
}
```

`setSystemBarProperties` 使用字符串颜色：

```ts
setSystemBarProperties: {
  statusBarColor: '#00000000',
  navigationBarColor: '#00000000',
  statusBarContentColor: '#000000',
  navigationBarContentColor: '#000000'
}
```

示例：

```ts
setCmUIConfig: {
  setNumberMargin: { top: 70, right: 0, bottom: 0, left: 0 },
  setWindowMode: { width: '80%', height: '55%' },
  setLogBtnText: '本机号码一键登录',
  setLoginBtnTextColor: 0xffffffff,
  setLoginBtnColor: 0xff2563eb,
  setLoginBtnDisabledColor: 0xff94a3b8,
  setClauseState: false,
  setClauses: [{
    text: '《用户协议》',
    url: 'https://example.com',
    fontSize: 14,
    fontColor: 0xff2563eb,
    isProtocol: true
  }],
  setClauseAlignRuleOption: {
    middle: { anchor: '__container__', align: 'center' },
    bottom: { anchor: '__container__', align: 'bottom' }
  },
  setClauseMargin: { top: 0, right: 20, bottom: 20, left: 44 },
  setCheckBoxAlignRuleOption: {
    left: { anchor: '__container__', align: 'start' },
    center: { anchor: 'clause_text', align: 'center' }
  },
  setCheckBoxMargin: { top: 0, right: 0, bottom: 0, left: 16 },
  setLoginPageComponent: {
    backgroundColor: 0xffffffff,
    backgroundImage: 'jverify_background',
    buttons: [{
      id: 'harmony-cm-image-button',
      anchor: 'loginBtn',
      type: 'button',
      image: 'jverify_login_test_back',
      width: 120,
      height: 40,
      borderRadius: 20,
      margin: { top: 16, right: 0, bottom: 0, left: 0 },
      action: 'callback'
    }],
    widgets: [{
      id: 'harmony-cm-image-exit',
      anchor: 'harmony-cm-image-button',
      type: 'image',
      image: 'jverify_return',
      width: 32,
      height: 32,
      margin: { top: 12, right: 0, bottom: 0, left: 0 },
      action: 'dismissLoginAuth'
    }]
  },
  setGenAuthLoginConfirmDialog: {
    message: '是否使用本机号码登录',
    confirmText: '确定',
    cancelText: '取消',
    confirmColor: '#2563eb',
    cancelColor: '#64748b'
  }
}
```

### setLoginPageComponent

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `backgroundColor` | `number` | 自定义登录页背景色。 |
| `backgroundImage` | `string` | `media` 中不带扩展名的资源名。 |
| `backgroundImageSource` | `string` | ArkUI `Image` 可直接读取的 URL 或 Base64。 |
| `buttons` | `object[]` | 自定义 button/text/image 控件。 |
| `widgets` | `object[]` | 与 `buttons` 同协议的附加控件，按配置顺序追加。 |
| `showTitle` | `boolean` | 是否显示自定义页面标题。 |
| `title` | `string` | 标题文字。 |
| `titleSize` | `number` | 标题字号。 |
| `titleColor` | `number` | 标题颜色。 |

按钮字段：

```text
id
anchor
type
image
imageSource
text
textSize
textColor
backgroundColor
width
height
borderRadius
margin
action
```

为兼容单按钮配置，也支持直接在 `setLoginPageComponent` 中传：

```text
buttonId
buttonAnchor
buttonText
buttonTextSize
buttonTextColor
buttonBackgroundColor
buttonWidth
buttonHeight
buttonBorderRadius
buttonMarginTop
buttonImage
buttonImageSource
buttonAction
```

SDK 登录按钮和协议文本的固定锚点 ID 分别是 `loginBtn` 和 `clause_text`：

- `buttons[].anchor` 默认使用 `loginBtn`。
- 按钮的 `top` 与 anchor 的 `bottom` 对齐，`margin.top` 是两者间距。
- 多个按钮可以让后一项 `anchor` 指向前一项的 `id`。
- `type: 'image'` 生成可点击 `Image`；`type: 'button'` 传 `image` / `imageSource` 时会在 Button 内渲染图片。
- `image` 使用 media 资源名，`imageSource` 可以使用 URI 或 Base64。单按钮兼容字段对应为 `buttonImage` / `buttonImageSource`。
- checkbox 应通过 `center` 与 `clause_text` 垂直居中，不应锚定业务自定义按钮。
- 所有非空 `id` 都会通过 `addCustomViewsClickCallback` 回调。
- `action: 'callback'` 只回调 ID；`action: 'dismissLoginAuth'` 回调后关闭授权页；`action: 'none'` 不执行额外动作。

协议区域贴近底部时：

```ts
setClauseAlignRuleOption: {
  bottom: { anchor: '__container__', align: 'bottom' }
},
setClauseMargin: {
  top: 0, right: 20, bottom: 20, left: 44
},
setCheckBoxAlignRuleOption: {
  center: { anchor: 'clause_text', align: 'center' }
}
```

## 8. 回调注册

自定义控件可能多次点击，应在页面创建后注册，页面销毁时注销：

```ts
addCustomViewsClickCallback((id) => {
  console.log(id)
})

removeCustomViewsClickCallback()
```

## 9. 版本边界

当前固定 `@jg/verify@1.2.0`：

- 不接收 `navPathStack`。
- 不使用 1.2.2 强制 Navigation 的行为。
- 1.2.2 新增的 `setAuthPageFontFollowSystem`、`setLogBtnBackgroundColor`、`setLogBtnBorderRadius` 不属于当前版本。
- 任意 `CustomDialogController`、原始 ArkUI Listener、任意 Clause Component 和未声明的 `AlignRuleOption` 不能通过稳定 JSON 表达，不虚构支持。
