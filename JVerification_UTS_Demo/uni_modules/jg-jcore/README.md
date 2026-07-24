# jg-jcore

极光 iOS UTS 插件的共享 JCore 依赖。业务页面无需直接调用本插件。

JPush 和 JVerification 通过 `uni_modules.dependencies` 依赖本插件，并调用内部链接锚点，使两个独立 UTS Framework 共同依赖唯一的 `unimoduleJgJcore.framework`。
