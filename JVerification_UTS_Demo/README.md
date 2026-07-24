# 极光认证 UTS Demo

使用 HBuilderX 5.11 或更高版本打开本目录，并按 uni-app x 项目运行。插件包含原生 SDK，Android、iOS 请使用自定义基座；HarmonyOS 使用本地原生构建。

## 文档

- [集成指南](../docs/GUIDE.md)
- [API 文档](../docs/API.md)
- [Android UI 文档](../docs/ANDROID.md)
- [iOS UI 文档](../docs/IOS.md)
- [HarmonyOS UI 文档](../docs/HARMONY.md)

## Demo 默认配置

| 平台 | 配置 |
| --- | --- |
| Android | 包名 `cn.jiguang.auth`；AppKey `1b5965ba23557bcf384e0b08`，已写入 `nativeResources/android/manifestPlaceholders.json` |
| iOS | 页面默认 AppKey `4fcc3e237eec4c4fb804ad49`；使用本地 JVerification 3.4.7 和同级 `jg-jcore` 中的 JCore 5.5.0 |
| HarmonyOS | 页面默认 AppKey `667c13ce8023161dbfd75a6e`；使用 `@jg/verify@1.2.0` 和 Router |

AppKey、包名/bundleName 和签名必须与极光控制台登记信息一致。更换 AppKey 时请同步修改对应平台应用标识和签名。

Android 本地编译前，在 HBuilderX“设置/偏好设置 → 运行配置”中配置 Gradle、Android SDK 和 JDK 17。未配置时，第三方 Maven 类型可能报 Error 18“找不到名称 `cn`”。

HarmonyOS 的 `harmony-configs/` 已包含 `useNormalizedOHMUrl`、授权页 media 图片和 rawfile 视频。首次真机运行仍需在 HBuilderX 配置与 bundleName 匹配的 `default` 签名。

## 页面功能

Demo 启动时自动调用 `setDebugMode(true)`，页面提供：

- 初始化、查询初始化状态、检查认证环境。
- 预取号、获取 token、清除缓存和拉起授权页。
- Android、iOS、HarmonyOS 各自的基础图片、背景视频、弹窗三套 UI 预设。
- 独立的接口回调结果和授权页事件展示区域。

页面和控制台会输出完整回调内容，便于真机测试。

## 建议测试顺序

1. 使用当前平台自定义基座运行 Demo。
2. 初始化并确认 `isInitSuccess.enable` 为 `true`。
3. 在真实蜂窝网络环境检查认证环境并执行预取号。
4. 选择当前平台的基础样式、背景视频或弹窗样式。
5. 拉起授权页，验证登录回调、授权页事件、二次隐私弹窗和自定义控件。

真实一键登录依赖应用登记、签名、设备网络与运营商环境，模拟器和仅 Wi-Fi 环境不能覆盖完整链路。
