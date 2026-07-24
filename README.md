# 极光认证 uni-app x UTS 插件

`jg-uts` 分支只维护极光认证的 uni-app x / UTS 版本，支持 Android、iOS 和 HarmonyOS。传统 uni-app 原生插件继续由 `jg` 分支维护，不属于本分支交付物。

## 目录

- `JVerification_UTS_Demo/`：可直接使用 HBuilderX 打开的 uni-app x 三端测试 Demo。
- `JVerification_UTS_Demo/uni_modules/jg-jverification/`：可复制到业务项目的 UTS 插件。
- `docs/`：集成、公共 API 和三端授权页 UI 文档。

## 使用

接入、API、平台 UI 和真机测试步骤见：

- [集成指南](docs/GUIDE.md)
- [API 文档](docs/API.md)
- [Android UI 文档](docs/ANDROID.md)
- [iOS UI 文档](docs/IOS.md)
- [HarmonyOS UI 文档](docs/HARMONY.md)
- [Demo 运行说明](JVerification_UTS_Demo/README.md)

三端接口和 UI 配置并不完全相同，调用方应使用 uni-app x 条件编译分别调用对应平台 API。

## SDK 集成

| 平台 | 集成方式 |
| --- | --- |
| Android | Gradle/Maven 远程依赖；AppKey 由宿主 `manifestPlaceholders.json` 注入 |
| iOS | 插件目录内本地 XCFramework 和静态库；授权页 UI 资源由宿主显式提供 |
| HarmonyOS | ohpm 依赖 `@jg/verify@1.2.0`；宿主使用 Router |

本插件不发布 npm 包或 GitHub Release。开发者从 `jg-uts` 分支获取源码后，将 `uni_modules/jg-jverification` 复制到自己的 uni-app x 项目。
