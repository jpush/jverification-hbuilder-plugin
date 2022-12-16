**项目集成需要添加msa_mdid_1.0.13.aar文件，以便获取移动智能设备标识公共服务平台提供的匿名设备标识符[OAID](https://www.html5plus.org/doc/zh_cn/device.html#plus.device.getOAID)、开发者匿名设备标识符VAID、及应用匿名设备标识符AAID，可用于解决Android10无法获取设备标识（如IMEI、IMSI、Wi-Fi MAC地址等）的问题**

## 2.8.1.80296_20200722
1. 离线sdk不再支持wap2app应用，云打包不受影响。
2. 离线sdk不再支持JS/NVUE文件原生混淆加密，云打包不受影响。
3. 新增uniapp-v8-release.aar，调整 JS引擎默认从 jscore 改为 V8，提升运算性能 [详情](https://ask.dcloud.net.cn/article/37465) **注意：uniapp-v8-release.aar与uniapp-release.aar只能同时使用一个，重复会导致编译失败。**

## 2.7.11.80231_20200602
1. 新增debug-server-release.aar，生成自定义基座时使用，生成正式包时需删除。
2. 新增aps-igexin-fcm-release.aar，使用方式可参考[文档](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/push)

## 2.7.0.80159_20200506

1. 自定义组件编译模式下线，应用默认以v3编译模式运行。并在manifest去除相关概念。后续版本dcloud1.dat、dcloud2.dat也不在需要。

## 2.6.0.74021_20200224
1. 新增腾讯X5内核，使用时只需添加webview-x5-release.aar和weex_webview-x5-release.aar即可。

## 2.5.4.72919_20200108
1. 添加uniAd模块，具体配置可参考文件Feature-Android.xls或链接 https://ask.dcloud.net.cn/article/36814

## 2.4.6.71983_20191211
1. 添加amap-gp-libs-release.aar，供上传google play使用，注意：amap-gp-libs-release.aar与amap-libs-release.aar互斥，二者使用时只能选其一。

## 2.4.2.71156_20191115
1. 更新uni-app依赖，去掉bindingX相关依赖。新版依赖如下，可以参考项目实例。
~~~
    /*uniapp所需库-----------------------开始*/
    implementation 'com.android.support:recyclerview-v7:26.1.0'
    implementation 'com.facebook.fresco:fresco:1.13.0'
    implementation "com.facebook.fresco:animated-gif:1.13.0"
    /*uniapp所需库-----------------------结束*/
~~~

## 2.3.5.70306_20191018
1. 新增aps-unipush-gp-release.aar和aps-igexin-gp-release.aar，解决个推或UniPush上传谷歌市场失败的问题，注意：谷歌版个推与原个推存在类冲突，若出现冲突，删掉一个即可。
2. 更新uni-app依赖，去掉okhttp相关依赖。新版依赖如下，可以参考项目实例。
~~~
    /*uniapp所需库-----------------------开始*/
    implementation 'com.android.support:recyclerview-v7:26.1.0'
    implementation 'com.alibaba.android:bindingx-core:1.0.3'
    implementation 'com.alibaba.android:bindingx_weex_plugin:1.0.3'
    implementation 'com.facebook.fresco:fresco:1.13.0'
    implementation "com.facebook.fresco:animated-gif:1.13.0"
    /*uniapp所需库-----------------------结束*/
~~~
3. 若出现以dc.okio或dc.suqareup.okhttp的类冲突，删除libs目录下dc-okhttp-2.7.5.jar、dc-okhttp-ws-2.7.5.jar、dc-okio-1.6.0.jar即可。
4. 本版删掉sina-libs-release.aar，集成时只需集成openDefault-4.4.1.aar即可。
5. google play版个推在原个推配置上需添加如下内容
~~~
        <service  
            android:name="io.dcloud.feature.apsGt.GTPushDevService"  
            android:exported="true"  
            android:label="PushService"  
            android:process=":pushservice" />  
        <activity  
            android:name="com.igexin.sdk.PrivacyActivity"  
            android:exported="false"/>  
~~~

## 1.9.9.69546_20190920
1. 更新依赖，默认需添加fastjson依赖
~~~
    implementation 'com.alibaba:fastjson:1.1.46.android'
~~~
## 1.9.9.67817_20190812
1. 离线SDK已支持64位处理器，[Android平台配置支持的CPU类型（64位）](http://ask.dcloud.net.cn/article/36195)
2. 添加map、live-pusher、video等component，具体集成方式参考Feature-Android.xls。
3. 将gif库提取为专门的aar使用，您可以引入android-gif-drawable-release@1.2.17.aar或者引用远程仓库文件。
4. 鉴于新浪和支付宝SDK升级缘故，对应所需库也发生了变化，详情见Feature-Android.xls。

## 1.9.9.67034_20190729
1. barcode改进，相应配置发生变化
~~~
<feature name="Barcode" value="io.dcloud.feature.barcode2.BarcodeFeatureImpl"/>
~~~
2. gallery改进，图片预览更流畅，需集成gallery-dmcBig-release.aar文件（非必须添加），具体显示效果可参考HBuilderX中基座gallery模块。
3. 录制mp3格式音频需集成audio-mp3aac-release.aar文件（非必须添加）。
4. 基座添加glide依赖，集成SDK时必须添加。
5. 集成uni-app时必须添加如下依赖。
~~~
    implementation 'com.android.support:recyclerview-v7:26.1.0'
    implementation 'com.alibaba.android:bindingx-core:1.0.3'
    implementation 'com.alibaba.android:bindingx_weex_plugin:1.0.3'
    implementation 'com.squareup.okhttp:okhttp:2.3.0'
    implementation 'com.squareup.okhttp:okhttp-ws:2.3.0'
    implementation 'com.alibaba:fastjson:1.1.46.android'
    implementation 'com.facebook.fresco:fresco:1.13.0'
    implementation "com.facebook.fresco:animated-gif:1.13.0"
~~~
6. 新增sqlite模块，配置方式
~~~
<feature name="Sqlite" value="io.dcloud.feature.sqlite.DataBaseFeature"/>
~~~

7. 自定义组件模式下和集成uni-app时必须添加uniapp-release.aar
8. 新增混淆配置文件，可参考SDK目录下proguard.cfg文件进行配置。

本sdk的使用许可，详见HBuilder X使用许可协议