# 极光认证 uni-app x UTS 插件

`jg-jverification` 是极光认证的 uni-app x UTS 插件，支持 Android、iOS 和 HarmonyOS。插件在三端分别调用对应的极光认证 SDK，平台接口与 UI 配置不强制同构，接入方应使用条件编译区分调用。

## 文档

- [集成指南](../../../docs/GUIDE.md)
- [API 文档（三端共同入口）](../../../docs/API.md)
- [Android 授权页 UI 文档](../../../docs/ANDROID.md)
- [iOS 授权页 UI 文档](../../../docs/IOS.md)
- [HarmonyOS 授权页 UI 文档](../../../docs/HARMONY.md)

## SDK 版本

| 平台 | SDK 集成方式 | 当前版本 |
| --- | --- | --- |
| Android | Gradle/Maven 远程依赖 | `cn.jiguang.sdk:jverification:3.4.8`、`cn.jiguang.sdk:jcore:5.4.9` |
| iOS | 插件内本地 XCFramework 和静态库；授权页 UI 资源由宿主提供 | JVerification `3.4.7`、JCore `5.5.0` |
| HarmonyOS | ohpm 远程依赖 | `@jg/verify@1.2.0` |

## 最小调用

```ts
import {
  checkVerifyEnable,
  loginAuth,
  preLogin,
  setDebugMode
} from '@/uni_modules/jg-jverification'

setDebugMode(true)
checkVerifyEnable((result) => {})
preLogin(10000, (result) => {})
loginAuth(
  { autoFinish: true, timeout: 10000, animationFlag: true },
  (result) => {},
  (event) => {}
)
```

初始化方法和 AppKey 配置因平台不同，请先完成仓库根目录的[集成指南](../../../docs/GUIDE.md)中的对应平台步骤。
