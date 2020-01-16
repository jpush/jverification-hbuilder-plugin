# jverification-hbuilder-plugin

[极光认证](https://www.jiguang.cn/) 官方支持的 Hbuilder 插件（Android & iOS）。是基于 HBuilder 提供的 [uni-app 原生插件扩展](https://ask.dcloud.net.cn/article/35428) 进而开发出的认证插件。开发者可以轻松将极光认证集成到自己的项目中，从而在 js 层实现对认证的控制。

## 接入
- 1.将 nativeplugins/JIGUANG-JVerification 导入项目对应位置。
- 2.项目 manifest.json 中接入 JIGUANG-JVerification 插件。并配置好 appkey([极光 portal]() 注册分配)，channel 信息。

<p align="center">
    <a target="_blank">
        <img src="doc/conf.png" alt="config" width=600/>
    </a>
</p>

- 3.在项目中引用插件
```
const jv = uni.requireNativePlugin('JIGUANG-JVerification');
```


## DEMO 体验
按照以下步骤快速体验 JVerification_Hbuilder_demo：
- 1.在[极光 portal](https://www.jiguang.cn/accounts/platform)注册应用并开通认证功能。
- 2.在项目 manifest.json 中配置您申请的极光 appkey 信息
- 3.HbuilderX 中制作打包自定义基座，包名，签名，bundleID 需要与对应 appkey 配置的应用信息保持一致
- 4.HbuilderX 使用自定义基座运行即可

<p align="center">
    <a target="_blank">
        <img src="doc/demo.jpeg" alt="demo" width=400/>
    </a>
</p>


## API 说明
iOS、Android 详细 API 文档请参阅 [JVerification Hbuilder API 文档](/doc/API.md)

## 参考资料

[官方文档](https://docs.jiguang.cn/jverification/guideline/intro/)

## Support
- 集成前请先尝试 demo 工程跑通
- 出现问题请先打开 debug 模式，拿到前端和原生日志
- 更多问题请前往[极光社区](http://community.jiguang.cn/)

## License

MIT © [JiGuang](/license)