# 极光认证 uni-app / uni-app x UTS 插件集成指南

本文说明如何在 uni-app 或 uni-app x 项目中集成 `jg-jverification`。API 调用见 [API 文档](API.md)，授权页配置见 [Android](ANDROID.md)、[iOS](IOS.md) 和 [HarmonyOS](HARMONY.md) UI 文档。

## 1. 环境要求

| 项目 | 要求 |
| --- | --- |
| HBuilderX | 5.15 或更高版本 |
| 项目类型 | uni-app（Android/iOS）或 uni-app x |
| Android | minSdk 21；当前交付仅验证 `arm64-v8a` |
| iOS | iOS 12.0 或更高版本 |
| HarmonyOS | HBuilderX 5.15 / DevEco 6.0.1 验证；API 21 |

插件包含原生依赖，标准基座不能使这些依赖生效。Android、iOS 应制作包含本插件的自定义基座；HarmonyOS 使用本地原生工程构建。

## 2. 安装插件

仓库中的插件与公开文档分别位于：

```text
仓库根目录/
├── docs/
└── JVerification_UTS_Demo/
    └── uni_modules/
        ├── jg-jverification/
        └── jg-jcore/
```

将以下两个目录完整复制到业务项目的 `uni_modules/`：

```text
JVerification_UTS_Demo/uni_modules/jg-jverification/
JVerification_UTS_Demo/uni_modules/jg-jcore/
```

`jg-jcore` 是 iOS 原生共享依赖，业务页面不需要导入或调用。`jg-jverification` 已通过 `uni_modules.dependencies` 声明对它的依赖。

插件不是 npm 包，不需要执行 `npm install`。HBuilderX 会根据各平台 `config.json` 解析原生依赖。

## 3. 引用方式

公共 API 可以直接引用，平台专有 API 必须放在条件编译块中：

```ts
import {
  checkVerifyEnable,
  getToken,
  initialize,
  loginAuth,
  preLogin,
  setDebugMode
} from '@/uni_modules/jg-jverification'

```

`initialize` 是三端通用入口，也是普通 uni-app `APP-PLUS` 业务层的推荐写法。Android 和 HarmonyOS 原有的 `init` 仍保留给现有 uni-app x 代码。

Android、iOS、HarmonyOS 的 SDK 接口和 UI 字段并不完全一致，不要在未加条件编译的代码中导入当前平台不存在的方法。

## 4. Android 集成

### 4.1 原生依赖

插件自动加入以下 Maven 依赖，不携带本地 JAR 或 SO：

```text
cn.jiguang.sdk:jverification:3.4.8
cn.jiguang.sdk:jcore:5.4.9
```

JVerification 的 Maven POM 对 JCore 使用开放版本范围，插件显式锁定 JCore 5.4.9，避免构建结果随远端依赖变化。

### 4.2 配置 AppKey

在业务项目创建：

```text
nativeResources/android/manifestPlaceholders.json
```

内容：

```json
{
  "JPUSH_APPKEY": "你的 Android AppKey",
  "JPUSH_CHANNEL": "developer-default"
}
```

这是 uni-app / uni-app x 对宿主 Gradle `android.defaultConfig.manifestPlaceholders` 的配置入口，HBuilderX 构建时等价注入：

```gradle
android {
    defaultConfig {
        manifestPlaceholders = [
            JPUSH_APPKEY: "你的 Android AppKey",
            JPUSH_CHANNEL: "developer-default"
        ]
    }
}
```

无需在 uni-app / uni-app x 项目中另建或修改 HBuilderX 生成的宿主 `build.gradle`，重新制作基座时该文件会被重新生成。

AppKey、applicationId 和签名必须与极光控制台登记信息一致。Demo 当前使用：

```text
applicationId: cn.jiguang.auth
AppKey: 1b5965ba23557bcf384e0b08
```

业务项目必须替换为自己的登记信息。

### 4.3 HBuilderX Android 运行环境

打开“设置/偏好设置 → 运行配置”，配置：

- Gradle：可用的 Gradle 可执行文件，当前项目验证使用 Gradle 7.5。
- Android SDK：本机 Android SDK 根目录。
- JDK：JDK 17，或使用 HBuilderX 自带的兼容 JDK。

若环境未配置，UTS 编译器可能在 `import ... from 'cn.jiguang.*'` 处报 Error 18“找不到名称 `cn`”。这是第三方 Maven 类型尚未被解析，不应把官方 UTS 默认导入改成命名导入。

### 4.4 ABI

当前 JCore 5.4.9 只提供 `arm64-v8a/libjutils.so`，插件只声明 `arm64-v8a`。不要额外开启 `armeabi-v7a`、`x86` 或 `x86_64`；升级 JCore 后必须重新验证整包，再决定是否扩大 ABI。

### 4.5 初始化

Android 的 AppKey 由 Manifest 占位符提供，`initialize` 传入的 `appKey` 在 Android 上会被忽略：

```ts
// #ifdef APP-ANDROID
import { initialize } from '@/uni_modules/jg-jverification'

initialize({ timeout: 10000 }, (result) => {
  console.log(result)
})
// #endif
```

## 5. iOS 集成

### 5.1 本地 SDK

iOS 原生依赖随两个 uni_modules 本地交付，当前版本为：

- `jg-jverification`：JVerification 3.4.7、对应运营商 XCFramework 和静态库
- `jg-jcore`：JCore 5.5.0

不要将这些依赖改为远程 CocoaPods；当前交付和链接验证以本地包为准。

`jg-jverification` 初始化时会调用 `jg-jcore` 的内部链接锚点，使 DCloud 生成的认证 UTS Framework 显式依赖唯一的 `unimoduleJgJcore.framework`。不要把 JCore XCFramework 再复制回认证插件。

iOS SDK 不依赖额外原生资源包，插件也不内置授权页 UI 图片或视频。宿主需要把自定义 UI 资源放在项目 `static/` 等可打包目录中，并通过 iOS UI 配置字段显式传入。

### 5.2 配置 AppKey

推荐初始化时传入：

```ts
// #ifdef APP-IOS
import { initialize } from '@/uni_modules/jg-jverification'

initialize({
  appKey: '你的 iOS AppKey',
  channel: 'developer-default',
  isProduction: true,
  timeout: 10000
}, (result) => {
  console.log(result)
})
// #endif
```

也可在宿主 `Info.plist` 配置：

```xml
<key>JCore</key>
<dict>
  <key>APP_KEY</key>
  <string>你的 iOS AppKey</string>
  <key>CHANNEL</key>
  <string>developer-default</string>
</dict>
```

UTS 在 iOS 端不允许将 `init` 作为命名导出，因此增加三端通用的 `initialize`；参数和回调协议不变。

### 5.3 自定义基座

插件包含本地 XCFramework、静态库和 Swift 适配层。首次集成或这些原生文件发生变化时，必须重新制作 iOS 自定义基座；只修改 uvue 页面、宿主静态资源或 JSON UI 参数时通常无需重制。

## 6. HarmonyOS 集成

### 6.1 ohpm 依赖

插件锁定：

```text
@jg/verify@1.2.0
pako@2.1.0
js-sha256@0.11.0
```

HarmonyOS 认证 SDK 不依赖 JCore。

### 6.2 宿主原生配置

将 Demo 中的 `harmony-configs/` 复制到业务项目根目录。HBuilderX 构建时会用该目录覆盖生成工程中的同名文件。

必须完成：

1. 在根工程 `build-profile.json5` 的默认 product 中开启：

   ```json5
   buildOption: {
     strictMode: {
       useNormalizedOHMUrl: true
     }
   }
   ```

2. 将极光认证默认授权页图片放入：

   ```text
   AppScope/resources/base/media/
   ```

3. 背景视频放入：

   ```text
   AppScope/resources/rawfile/
   ```

4. 在 HBuilderX 保存 `default` HarmonyOS 签名配置，并保证 bundleName、签名 profile 和 AppKey 与极光控制台登记信息一致。

不要只修改 `unpackage/.../app-harmony` 下的生成文件，它会在下一次构建时被覆盖。HBuilderX 可能把本机签名写入项目 `manifest.json`；提交代码或制作发布包前必须删除证书、密码、profile 和本机绝对路径。

### 6.3 初始化与 Router

HarmonyOS 必须通过 `initialize({ appKey })` 传入 AppKey：

```ts
// #ifdef APP-HARMONY
import { initialize } from '@/uni_modules/jg-jverification'

initialize({
  appKey: '你的 HarmonyOS AppKey'
}, (result) => {
  console.log(result)
})
// #endif
```

当前锁定 `@jg/verify@1.2.0`。插件在每次 `loginAuth` 时强制 `isRouter = true`，不接收 `Navigation` 或 `navPathStack`。

## 7. 与极光推送共存（iOS）

当前共存方案已使用 HBuilderX 5.15、JVerification iOS 3.4.7、JPush iOS 6.1.0 和 JCore iOS 5.5.0 完成自定义基座及真机运行验证。

iOS 的每个 UTS 插件会编译为独立动态 Framework。只从 JPush 插件删除重复 JCore，会使 JPush Framework 在链接时出现 `Undefined symbols: _JCORE...`；只保留两份 JCore，又会产生重复类或符号冲突。因此必须让两个插件共同依赖 `jg-jcore`。

#### 项目目录

业务项目的 `uni_modules/` 至少应包含：

```text
uni_modules/
├── jg-jverification/
├── jg-jcore/
└── jg-jpush-u/
```

认证插件和 `jg-jcore` 直接使用本仓库提供的版本。对当前官方 JPush UTS 插件执行以下修改。

#### 第一步：删除 JPush 内置 JCore

删除：

```text
uni_modules/jg-jpush-u/utssdk/app-ios/Libs/JCore/
```

不要删除 JPush 自身的 `Libs/JPush/`。

#### 第二步：声明依赖

在 `uni_modules/jg-jpush-u/package.json` 的 `uni_modules` 节点中加入：

```json
{
  "uni_modules": {
    "dependencies": [
      "jg-jcore"
    ]
  }
}
```

如果 `dependencies` 已存在，应把 `jg-jcore` 合并到原数组，不要覆盖其他依赖。

#### 第三步：增加链接锚点

在 `uni_modules/jg-jpush-u/utssdk/app-ios/index.uts` 顶部加入绝对路径导入：

```ts
import { ensureJCoreLinked } from '@/uni_modules/jg-jcore'
```

在 JPush 的 `UTSiOSHookProxy.onCreate` 中调用：

```ts
onCreate(): void {
  ensureJCoreLinked()
  // 原有逻辑
}
```

同时在公开的 `initPush` 中调用，避免插件生命周期差异导致依赖未建立：

```ts
export function initPush(param: InitPushParams): void {
  ensureJCoreLinked()
  // 原有逻辑
}
```

`jg-jverification` 已内置相同的依赖声明和初始化锚点，业务项目不需要再次修改认证插件。

#### 第四步：重制并验证基座

修改原生依赖后必须重新制作 iOS 自定义基座，并卸载或覆盖设备上的旧基座。不要仅同步页面代码后继续使用旧基座。

至少验证：

1. JPush 初始化和 registration ID 获取正常。
2. JVerification 初始化、预取号和授权页正常。
3. 推送与认证可以在同一进程连续调用。
4. 控制台无重复 JCore 类警告、`Undefined symbols: _JCORE...` 或 UTS 插件类不存在错误。

本项目要求 HBuilderX 5.15 或更高版本；普通 uni-app 与 uni-app x 均以该版本验证跨 `uni_modules` 的 iOS UTS 插件依赖。

## 8. 构建与验证

建议顺序：

1. 制作当前平台自定义基座。
2. 调用 `setDebugMode(true)`。
3. 初始化并查询 `isInitSuccess`。
4. 调用 `checkVerifyEnable`。
5. 在真实蜂窝网络环境调用 `preLogin`。
6. 设置当前平台 UI，再调用 `loginAuth`。

一键登录依赖有效 AppKey、应用标识、签名、设备和运营商网络。模拟器、Wi-Fi 或未登记签名不能代替完整真机验证。
