1. lib.5plus.base-release.aar形式的SDK已经包含如下feature模块：accelerometer audio barcode cache camera console device downloader  io gallery geolocation android nativeObj nativeUI navigator orientation proximity runtime storage share uploader webview net zip

2. 第三方开放平台如（高德地图定位，微信支付等）未包含在lib.5plus.base-release.aar中，各个模块具体配置参考SDK中Feature-Android.xls文件。

3. lib.5plus.base-release.aar因为部分权限涉及敏感权限，所以将权限全部移出aar，具体权限可参考AndroidManifest.xml进行配置。

本sdk的使用许可，详见HBuilder X使用许可协议