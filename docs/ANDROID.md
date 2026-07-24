# Android 授权页 UI 配置

Android 使用：

```ts
setCustomUIWithConfigAndroid(config, landscapeConfig?)
```

第一个参数是竖屏配置；第二个参数可选，是横屏配置。只传一个配置时全部方向使用同一套样式。必须在 `loginAuth` 前调用。

颜色使用 `0xAARRGGBB` 数值；尺寸默认使用 Android dp/sp 语义。图片和视频可传 uni-app x 项目中的 `static/...` 相对路径，插件会通过 `UTSAndroid.getResourcePath` 转成 SDK 可读路径。

## 1. 背景和全局设置

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `setDimensionUnit` | `number` | 设置尺寸单位。 |
| `setAppLanguageType` | `number` | 0 简体中文、1 繁体中文、2 英文。 |
| `setAuthBGImgPath` | `string` | 原生可读的授权页背景图片路径。 |
| `setAuthBGImgPathFromJs` | `string` | `static/...` 背景图片路径。 |
| `setAuthBGGifPathFromJs` | `string` | `static/...` GIF 背景路径。 |
| `setAuthBGVideoPath` | `string` | 原生可读的视频路径。 |
| `setAuthBGVideoPathFromJs` | `string` | `static/...` 视频路径。 |
| `setAuthBGVideoPlaceholderPath` | `string` | 视频未准备完成时的占位图。 |
| `setAuthBGVideoPlaceholderPathFromJs` | `string` | `static/...` 视频占位图。 |
| `setAuthBGVideoScaleType` | `number` | 视频缩放类型，使用 Android SDK 对应数值。 |
| `setDimAmount` | `number` | 弹窗外侧遮罩透明度。 |

背景视频示例：

```ts
setCustomUIWithConfigAndroid({
  setAuthBGVideoPathFromJs: 'static/jverification/videobg.mp4',
  setAuthBGVideoPlaceholderPathFromJs: 'static/jverification/bg.jpeg'
})
```

## 2. 状态栏和虚拟导航栏

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `setStatusBarColorWithNav` | `boolean` | 状态栏是否与导航栏同色。 |
| `setStatusBarDarkMode` | `boolean` | 状态栏是否使用深色图标。 |
| `setStatusBarTransparent` | `boolean` | 状态栏是否透明。 |
| `setStatusBarHidden` | `boolean` | 是否隐藏状态栏。 |
| `setNavBarDarkMode` | `boolean` | 系统导航栏是否使用深色图标。 |
| `setVirtualButtonTransparent` | `boolean` | 虚拟按键栏是否透明。 |
| `setVirtualButtonColor` | `number` | 虚拟按键栏背景色。 |
| `setVirtualButtonHidden` | `boolean` | 是否隐藏虚拟按键栏。 |

## 3. 授权页导航栏

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `setNavColor` | `number` | 导航栏背景色。 |
| `setNavText` | `string` | 导航栏标题。 |
| `setNavTextColor` | `number` | 标题颜色。 |
| `setNavTextSize` | `number` | 标题字号。 |
| `setNavTextBold` | `boolean` | 标题是否加粗。 |
| `setNavTransparent` | `boolean` | 导航栏背景是否透明。 |
| `setNavHidden` | `boolean` | 是否隐藏整个导航栏；隐藏后返回按钮也会消失。 |
| `setNavReturnImgPath` | `string` | 原生返回按钮图片路径。 |
| `setNavReturnImgPathFromJs` | `string` | `static/...` 返回按钮图片。 |
| `setNavReturnBtnHidden` | `boolean` | 是否隐藏返回按钮。 |
| `setNavReturnBtnWidth` | `number` | 返回按钮宽度。 |
| `setNavReturnBtnHeight` | `number` | 返回按钮高度。 |
| `setNavReturnBtnOffsetX` | `number` | 返回按钮左侧偏移。 |
| `setNavReturnBtnRightOffsetX` | `number` | 返回按钮右侧偏移。 |
| `setNavReturnBtnOffsetY` | `number` | 返回按钮顶部偏移。 |

只去掉导航背景和标题、但保留关闭按钮时可使用：

```ts
{
  setNavTransparent: true,
  setNavText: '',
  setNavReturnBtnHidden: false
}
```

## 4. Logo、号码、slogan 和登录按钮

| 区域 | 字段 |
| --- | --- |
| Logo | `setLogoImgPath`、`setLogoImgPathFromJs`、`setLogoWidth`、`setLogoHeight`、`setLogoHidden`、`setLogoOffsetX`、`setLogoOffsetY`、`setLogoOffsetBottomY` |
| 号码 | `setNumberColor`、`setNumberSize`、`setNumberTextBold`、`setNumFieldOffsetX`、`setNumFieldOffsetY`、`setNumberFieldWidth`、`setNumberFieldHeight`、`setNumberFieldOffsetBottomY` |
| slogan | `setSloganTextColor`、`setSloganTextSize`、`setSloganTextBold`、`setSloganOffsetX`、`setSloganOffsetY`、`setSloganBottomOffsetY`、`setSloganHidden` |
| 登录按钮 | `setLogBtnText`、`setLogBtnTextColor`、`setLogBtnTextSize`、`setLogBtnTextBold`、`setLogBtnImgPath`、`setLogBtnImgPathFromJs`、`setLogBtnOffsetX`、`setLogBtnOffsetY`、`setLogBtnBottomOffsetY`、`setLogBtnWidth`、`setLogBtnHeight` |

图片字段为 `string`，颜色和尺寸字段为 `number`，隐藏/加粗字段为 `boolean`。

## 5. 隐私协议栏

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `setPrivacyNameAndUrlBeanList` | `object[]` | 隐私协议数组，元素为 `{name,url,beforeName?,afterName?}`。 |
| `setAppPrivacyOne` | `[string,string]` | 第一条自定义协议的名称和 URL。 |
| `setAppPrivacyTwo` | `[string,string]` | 第二条自定义协议的名称和 URL。 |
| `setAppPrivacyColor` | `[number,number]` | 普通文字颜色和协议文字颜色。 |
| `setPrivacyText` | `[string,string]` | 协议栏头部和尾部文字。 |
| `setPrivacyState` | `boolean` | checkbox 默认是否勾选。 |
| `setCheckedImgPath` / `setCheckedImgPathFromJs` | `string` | checkbox 选中图片。 |
| `setUncheckedImgPath` / `setUncheckedImgPathFromJs` | `string` | checkbox 未选中图片。 |
| `setPrivacyMarginL` / `setPrivacyMarginR` / `setPrivacyMarginT` / `setPrivacyMarginB` | `number` | 协议区域四边距。 |
| `setPrivacyOffsetX` / `setPrivacyOffsetY` | `number` | 协议区域横向/纵向偏移。 |
| `setPrivacyTopOffsetY` | `number` | 协议区域相对顶部偏移。 |
| `setPrivacyTextWidth` | `number` | 协议文字区域宽度。 |
| `setPrivacyTextSize` | `number` | 协议文字字号。 |
| `setPrivacyTextBold` | `boolean` | 协议文字是否加粗。 |
| `setPrivacyUnderlineText` | `boolean` | 协议文字是否显示下划线。 |
| `setPrivacyTextCenterGravity` | `boolean` | 协议文字是否居中。 |
| `setPrivacyCheckboxHidden` | `boolean` | 是否隐藏 checkbox。 |
| `setPrivacyCheckboxSize` | `number` | checkbox 尺寸。 |
| `setPrivacyCheckboxMargin` | `[number,number,number,number]` | checkbox 的 left/top/right/bottom margin。 |
| `setPrivacyCheckboxInCenter` | `boolean` | checkbox 是否与协议文字垂直居中。 |
| `setPrivacyWithBookTitleMark` | `boolean` | 协议名称是否带书名号。 |
| `openPrivacyInBrowser` | `boolean` | 是否使用浏览器打开协议。 |
| `enableHintToast` | `boolean` | 未勾选协议时是否显示 SDK 提示。 |
| `enableHintToastText` | `string` | 未勾选协议时的提示文字。 |
| `privacyNeedClose` | `boolean` | 协议页是否显示插件适配的关闭入口。 |
| `privacyCloseTheme` | `[number,number,number,number]` | 协议页关闭入口的 left/top/right/bottom margin；与 `privacyNeedClose: true` 配合。 |

`setOpenPrivacyInBrowser` 是早期 UTS 草稿中的兼容别名；同时传入时以 `openPrivacyInBrowser` 为准。

协议数组示例：

```ts
setPrivacyNameAndUrlBeanList: [{
  name: '《用户协议》',
  url: 'https://example.com/user',
  beforeName: '并同意',
  afterName: ''
}]
```

## 6. 隐私协议详情页

支持：

```text
setIsPrivacyViewDarkMode
setPrivacyNavColor
setPrivacyNavTitleTextColor
setPrivacyNavTitleTextSize
setPrivacyNavTitleTextBold
setPrivacyNavReturnBtnPath
setPrivacyNavReturnBtnPathFromJs
setAppPrivacyNavTitle1
setAppPrivacyNavTitle2
setPrivacyStatusBarColorWithNav
setPrivacyStatusBarDarkMode
setPrivacyStatusBarTransparent
setPrivacyStatusBarHidden
setPrivacyVirtualButtonTransparent
setPrivacyVirtualButtonColor
```

路径字段为 `string`，颜色和字号为 `number`，状态开关为 `boolean`。

## 7. 主授权页弹窗模式

```ts
setDialogTheme: [width, height, offsetX, offsetY, isBottom]
```

数组前四项为 `number`，第五项为 `boolean`。例如：

```ts
setCustomUIWithConfigAndroid({
  setDialogTheme: [300, 390, 0, 0, false]
})
```

切换配置时插件会先清理 SDK 中上一套横竖屏配置，再应用新配置，避免全屏配置覆盖弹窗配置。

其他授权页展示字段：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `setNeedStartAnim` | `boolean` | 拉起授权页是否显示动画。 |
| `setNeedCloseAnim` | `boolean` | 关闭授权页是否显示动画。 |
| `setLoadingViewEnable` | `boolean` | 是否启用 SDK loading。 |

## 8. 二次隐私弹窗

二次隐私弹窗配置放在 `setPrivacyCheckDialogConfig` 中：

```ts
setPrivacyCheckDialogConfig: {
  enablePrivacyCheckDialog: true,
  setPrivacyCheckDialogTitleText: '请阅读并同意协议',
  setPrivacyCheckDialogTitleTextSize: 18,
  setPrivacyCheckDialogTitleTextBold: true,
  setPrivacyCheckDialogTitleTextColor: 0xff17233d,
  setPrivacyCheckDialogContentTextGravity: 'left',
  setPrivacyCheckDialogContentTextSize: 14,
  setPrivacyCheckDialogContentTextPaddingL: 20,
  setPrivacyCheckDialogContentTextPaddingT: 8,
  setPrivacyCheckDialogContentTextPaddingR: 20,
  setPrivacyCheckDialogContentTextPaddingB: 8,
  setPrivacyCheckDialogLogBtnImgPath: 'static/jverification/login.png',
  setPrivacyCheckDialogLogBtnText: '同意并登录',
  setPrivacyCheckDialogLogBtnTextColor: 0xffffffff,
  setPrivacyCheckDialogLogBtnMarginT: 12,
  setPrivacyCheckDialogLogBtnMarginL: 20,
  setPrivacyCheckDialogLogBtnMarginR: 20,
  setPrivacyCheckDialogLogBtnMarginB: 16,
  setPrivacyCheckDialogLogBtnWidth: 120,
  setPrivacyCheckDialogLogBtnHeight: 44,
  setPrivacyCheckDialogWidth: 300,
  setPrivacyCheckDialogHeight: 240,
  setPrivacyCheckDialogGravity: 'center',
  setPrivacyCheckDialogOffsetX: 0,
  setPrivacyCheckDialogOffsetY: 0,
  setPrivacyCheckDialogBackgroundColor: 0xffffffff,
  setPrivacyCheckDialogBackgroundImgPath: 'static/jverification/bg.jpeg',
  addCustomViews: [{
    type: 'button',
    id: 'android-privacy-cancel',
    text: '取消',
    textSize: 15,
    textColor: 0xff475569,
    backgroundColor: 0xffe5e7eb,
    width: 120,
    height: 44,
    margins: [20, 12, 0, 16],
    belowPrivacyText: true
  }]
}
```

Android SDK 的二次弹窗原生只创建“同意并登录”按钮。`addCustomViews` 是插件对 `addCustomViewToCheckDialog` 的声明式包装，用于增加“取消”等控件；点击 ID 通过 `addCustomViewsClickCallback` 返回。

顶层 `enableHintToast` 是 Android SDK 的未勾选提示开关，与 `enablePrivacyCheckDialog` 不是同一个字段。

## 9. 授权页自定义控件

顶层 `addCustomViews` 用于在授权页增加控件：

```ts
addCustomViews: [{
  type: 'button',
  id: 'android-help',
  text: '其他登录方式',
  textSize: 15,
  textColor: 0xff2563eb,
  backgroundColor: 0x00ffffff,
  width: 180,
  height: 44,
  margins: [0, 260, 0, 0],
  align: 14,
  finishFlag: false
}]
```

通用字段：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `type` | `string` | `text`、`button` 或 `image`。 |
| `id` | `string` | 点击回调的唯一 ID。 |
| `width` / `height` | `number` | 控件尺寸。 |
| `margins` | `[number,number,number,number]` | left/top/right/bottom。 |
| `align` | `number` | Android RelativeLayout 对齐规则。 |
| `finishFlag` | `boolean` | 点击后是否关闭授权页。 |
| `text` / `textColor` / `textSize` | - | 文本、颜色和字号。 |
| `bgColor` / `backgroundColor` | `number` | 背景色。 |
| `imagePath` / `backgroundImg` / `bgImgPath` | `string` | 图片或背景图片路径。 |
| `textAlignment` | `number` | 文本自身的对齐方式。 |
| `textViewGravity` | `number` | 文本在控件内部的 Gravity。 |

使用前注册回调，页面销毁时注销：

```ts
addCustomViewsClickCallback((id) => {
  console.log(id)
})

removeCustomViewsClickCallback()
```

## 10. 不能通过 JSON 传入的能力

`setLoadingView(View, Animation)`、`addNavControlView(View, callback)`、`setPrivacyNavReturnBtn(View)` 以及原始 Android Listener 需要任意原生对象或可执行代码，不属于当前声明式 JSON 协议。
