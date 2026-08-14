# 极光认证 uni-app / uni-app x UTS API

本文是 Android、iOS、HarmonyOS 共用的 API 入口文档。平台 UI 字段分别见 [Android](ANDROID.md)、[iOS](IOS.md) 和 [HarmonyOS](HARMONY.md) 文档。

## 1. 平台能力表

| API | Android | iOS | HarmonyOS |
| --- | --- | --- | --- |
| `setDebugMode` | 支持 | 支持 | 支持 |
| `init` | 支持 | 不导出 | 支持 |
| `initialize` | 支持 | 支持 | 支持 |
| `isInitSuccess` | 支持 | 支持 | 支持 |
| `checkVerifyEnable` | 支持 | 支持 | 支持 |
| `getToken` | 支持 | 支持 | 支持 |
| `preLogin` | 支持 | 支持 | 支持 |
| `clearPreLoginCache` | 支持 | 支持 | 支持 |
| `loginAuth` | 支持 | 支持 | 支持 |
| `onAuthPageEvent` / `offAuthPageEvent` | 支持 | 支持 | 支持 |
| `dismissLoginAuth` | 支持 | 支持 | 支持 |
| `setCustomUIWithConfigAndroid` | 支持 | - | - |
| `setCustomUIWithConfigiOS` | - | 支持 | - |
| `setCustomUIWithConfigHarmony` | - | - | 支持 |
| `addCustomViewsClickCallback` / `removeCustomViewsClickCallback` | 支持 | 支持 | 支持 |
| `getCode` / `setTimeWithConfig` | 支持 | 支持 | SDK 不支持 |
| `setLocationEnable` | 支持 | SDK 不支持 | SDK 不支持 |
| `setLocationEanable` | 废弃兼容别名 | - | - |

## 2. 公共类型

### JVerificationResult

```ts
type JVerificationResult = {
  code?: number,
  content?: string,
  operator?: string,
  enable?: Boolean,
  uuid?: string,
  msg?: string
}
```

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `code` | `number` | SDK 返回码。具体值由当前平台 SDK 返回。 |
| `content` | `string` | token、错误描述或结果内容。 |
| `operator` | `string` | 运营商标识，取号/授权类接口可能返回。 |
| `enable` | `Boolean` | 初始化或认证环境查询结果。 |
| `uuid` | `string` | 短信验证码请求成功时的 UUID。 |
| `msg` | `string` | 短信验证码接口的提示信息。 |

不同 API 只返回与自身语义有关的字段；不要依赖未返回字段的默认值。

### JVerificationInitOptions

```ts
type JVerificationInitOptions = {
  appKey?: string,
  channel?: string,
  advertisingId?: string,
  isProduction?: boolean,
  timeout?: number
}
```

| 字段 | 平台 | 说明 |
| --- | --- | --- |
| `appKey` | iOS、HarmonyOS | HarmonyOS 必填；iOS 可传，也可使用宿主 `Info.plist`。Android 忽略，由 Manifest 占位符提供。 |
| `channel` | iOS | 渠道，可选。 |
| `advertisingId` | iOS | 广告标识符，可选。 |
| `isProduction` | iOS | 是否生产环境，可选。 |
| `timeout` | Android、iOS | 初始化超时，单位毫秒，默认 10000。HarmonyOS SDK 初始化不消费该字段。 |

### JVerificationLoginAuthOptions

```ts
type JVerificationLoginAuthOptions = {
  autoFinish?: Boolean,
  timeout?: number,
  animationFlag?: Boolean
}
```

| 字段 | 说明 |
| --- | --- |
| `autoFinish` | 登录成功后是否自动关闭授权页。省略时保持 SDK/历史默认行为；iOS 默认 `true`。 |
| `timeout` | 授权超时，单位毫秒；iOS 省略时为 10000。 |
| `animationFlag` | iOS 拉起授权页是否显示动画；iOS 省略时为 `true`，其他平台忽略。 |

## 3. 引用方式

```ts
import {
  checkVerifyEnable,
  clearPreLoginCache,
  getToken,
  initialize,
  isInitSuccess,
  loginAuth,
  offAuthPageEvent,
  onAuthPageEvent,
  preLogin,
  setDebugMode
} from '@/uni_modules/jg-jverification'

```

## 4. setDebugMode

初始化前开启或关闭 SDK 调试日志。

```ts
setDebugMode(enable: boolean): void
```

示例：

```ts
setDebugMode(true)
```

## 5. init / initialize

初始化认证 SDK。

```ts
// Android、iOS、HarmonyOS 通用，普通 uni-app 应使用此入口
initialize(options: JVerificationInitOptions, callback: (result: JVerificationResult) => void): void

// Android、HarmonyOS 保留的兼容入口
init(options: JVerificationInitOptions, callback: (result: JVerificationResult) => void): void
```

Android：

```ts
// #ifdef APP-ANDROID
initialize({ timeout: 10000 }, (result) => {
  console.log(result.code, result.content)
})
// #endif
```

iOS：

```ts
// #ifdef APP-IOS
initialize({
  appKey: '你的 iOS AppKey',
  channel: 'developer-default',
  isProduction: true,
  timeout: 10000
}, (result) => {
  console.log(result.code, result.content)
})
// #endif
```

HarmonyOS：

```ts
// #ifdef APP-HARMONY
initialize({ appKey: '你的 HarmonyOS AppKey' }, (result) => {
  console.log(result.code, result.content)
})
// #endif
```

## 6. isInitSuccess

查询 SDK 是否初始化成功。

```ts
isInitSuccess(callback: (result: JVerificationResult) => void): void
```

示例：

```ts
isInitSuccess((result) => {
  console.log(result.enable)
})
```

## 7. checkVerifyEnable

判断当前设备与网络环境是否支持认证。

```ts
checkVerifyEnable(callback: (result: JVerificationResult) => void): void
```

示例：

```ts
checkVerifyEnable((result) => {
  console.log(result.enable)
})
```

## 8. getToken

获取认证 token。

```ts
getToken(timeout: number, callback: (result: JVerificationResult) => void): void
```

示例：

```ts
getToken(10000, (result) => {
  console.log(result.code, result.content, result.operator)
})
```

## 9. preLogin

预取号并缓存取号结果。建议在拉起授权页前调用，以缩短授权页等待时间。

```ts
preLogin(timeout: number, callback: (result: JVerificationResult) => void): void
```

示例：

```ts
preLogin(10000, (result) => {
  console.log(result.code, result.content, result.operator)
})
```

## 10. clearPreLoginCache

清除预取号缓存。

```ts
clearPreLoginCache(): void
```

示例：

```ts
clearPreLoginCache()
```

## 11. loginAuth

拉起一键登录授权页并返回 loginToken。

```ts
loginAuth(
  options: JVerificationLoginAuthOptions,
  callback: (result: JVerificationResult) => void,
  eventCallback?: (event: JVerificationResult) => void
): void
```

示例：

```ts
loginAuth(
  {
    autoFinish: true,
    timeout: 10000,
    animationFlag: true
  },
  (result) => {
    console.log(result.code, result.content, result.operator)
  },
  (event) => {
    console.log(event.code, event.content)
  }
)
```

第三个参数是兼容接口。新代码推荐用 `onAuthPageEvent` 独立订阅授权页事件。部分 HBuilderX 版本生成 UTS 代理时仍会把第三参数视为必传；若已经使用独立订阅，可显式传入空回调：

```ts
loginAuth(options, callback, (_event) => {})
```

不要依据单个授权页事件码自动释放回调。不同平台的事件码不是稳定的跨端生命周期协议。

## 12. onAuthPageEvent / offAuthPageEvent

注册和注销授权页持续事件。

```ts
onAuthPageEvent(callback: (event: JVerificationResult) => void): void
offAuthPageEvent(): void
```

重复注册会替换旧监听器。页面销毁时必须注销：

```ts
onAuthPageEvent((event) => {
  console.log(event.code, event.content)
})

onUnmounted(() => {
  offAuthPageEvent()
})
```

`offAuthPageEvent` 同时清理独立订阅和 `loginAuth` 的兼容事件回调。

## 13. dismissLoginAuth

主动关闭授权页。

```ts
dismissLoginAuth(
  needCloseAnim: boolean,
  callback?: (result: JVerificationResult) => void
): void
```

示例：

```ts
dismissLoginAuth(true, (result) => {
  console.log(result.code, result.content)
})
```

HarmonyOS SDK 不消费 `needCloseAnim`，插件仍保留该参数以维持调用协议。

## 14. 授权页 UI

UI 配置必须在 `loginAuth` 前调用：

```ts
// Android
setCustomUIWithConfigAndroid(config, landscapeConfig?)

// iOS
setCustomUIWithConfigiOS(config)

// HarmonyOS
setCustomUIWithConfigHarmony(config)
```

三端字段不共用：

- [Android UI 字段](ANDROID.md)
- [iOS UI 字段](IOS.md)
- [HarmonyOS UI 字段](HARMONY.md)

## 15. 自定义控件点击回调

```ts
addCustomViewsClickCallback(callback?: (id: string) => void): void
removeCustomViewsClickCallback(): void
```

示例：

```ts
addCustomViewsClickCallback((id) => {
  console.log('点击自定义控件', id)
})

onUnmounted(() => {
  removeCustomViewsClickCallback()
})
```

回调可能在同一授权页生命周期内多次触发。页面退出时应显式注销。HarmonyOS 的 `addCustomView`、`addCustomViewToCheckDialog` 与移动 `setLoginPageComponent.buttons/widgets` 都支持可点击图片控件；具体配置见 [HarmonyOS UI 文档](HARMONY.md#6-授权页自定义控件)。

## 16. Android 位置采集开关

仅 Android 支持：

```ts
setLocationEnable(enable: boolean): void
```

历史拼写作为废弃别名保留：

```ts
/** @deprecated 使用 setLocationEnable */
setLocationEanable(enable: boolean): void
```

旧拼写现在会正确转调 `setLocationEnable`，不会再误调用调试开关。

## 17. 短信验证码

Android、iOS 支持；HarmonyOS 认证 SDK 未提供。

```ts
getCode(
  options: {
    phoneNumber: string,
    signID?: string,
    templateID?: string
  },
  callback: (result: JVerificationResult) => void
): void

setTimeWithConfig(interval: number): void
```

示例：

```ts
setTimeWithConfig(60000)

getCode({
  phoneNumber: '13800138000',
  signID: '短信签名 ID',
  templateID: '验证码模板 ID'
}, (result) => {
  console.log(result.code, result.uuid, result.msg)
})
```

短信验证码能力需要在极光控制台开通并配置对应签名和模板。Demo 不提供短信按钮，但插件 API 仍保留。
