### iOS

### JVerifyUIConfig 配置元素说明

注意：参数为图片的值都为 iOS 图片资源名字。


授权界面UI配置基类。以下是属性说明：

+ 授权页面设置

|参数名称|参数类型|参数说明|
|:-----:|:----:|:-----:|
|authPageBackgroundImage|String|授权界面背景图片|
|autoLayout|BOOL|是否使用autoLayout，默认 YES，|
|shouldAutorotate|BOOL|是否支持自动旋转 默认 YES|
|dismissAnimationFlag|BOOL|关闭授权页是否有动画。默认 YES,有动画。参数仅作用于以下两种情况：1、一键登录接口设置登录完成后，自动关闭授权页 2、用户点击授权页关闭按钮，关闭授权页|


+ 导航栏

|参数名称|参数类型|参数说明|
|:-----:|:----:|:-----:|
|navCustom|BOOL|是否隐藏导航栏（适配全屏图片）|
|navColor|int|导航栏颜色|
|navText|String,int,int|导航栏标题[文字,文字颜色,文字大小]|
|navReturnImg|String|导航返回图标|
|prefersStatusBarHidden|BOOL|*竖屏情况下，是否隐藏状态栏。默认 NO.在项目的Info.plist文件里设置UIViewControllerBasedStatusBarAppearance 为 YES.注意：弹窗模式下无效，是否隐藏由外部控制器控制|
|navTransparent|BOOL|导航栏是否透明，默认不透明。此参数和navBarBackGroundImage冲突，应避免同时使用|
|navReturnHidden|BOOL|导航栏默认返回按钮隐藏，默认不隐藏|
|navDividingLineHidden|BOOL|导航栏分割线是否隐藏，默认隐藏|
|navBarBackGroundImage|String|导航栏背景图片.此参数和 navTransparent 冲突，应避免同时使用|

+ LOGO

|参数名称|参数类型|参数说明|
|:-----:|:----:|:-----:|
|logoImg|String|LOGO 图片|
|logoWidth|float|LOGO 图片宽度|
|logoHeight|float|LOGO 图片高度|
|logoOffsetY|float|LOGO 图片偏移量|
|logoHidden|BOOL|LOGO 图片隐藏|

+ 登录按钮

|参数名称|参数类型|参数说明|
|:-----:|:----:|:-----:|
|logBtnText|String|登录按钮文本|
|logBtnOffsetY|float|登录按钮Y偏移量|
|logBtnTextColor|int|登录按钮文本颜色|
|logBtnImgs|String,String,String|登录按钮背景图片添加到数组(顺序如下) @[激活状态的图片,失效状态的图片,高亮状态的图片]|

+ 手机号码

|参数名称|参数类型|参数说明|
|:-----:|:----:|:-----:|
|numberColor|int|手机号码字体颜色|
|numberSize|float|手机号码字体大小|
|numFieldOffsetY|float|号码栏 Y 偏移量|

+ checkBox

|参数名称|参数类型|参数说明|
|:-----:|:----:|:-----:|
|uncheckedImg|String|checkBox 未选中时图片|
|checkedImg|String|checkBox 选中时图片|
|checkViewHidden|BOOL|checkBox 是否隐藏，默认不隐藏|
|privacyState|BOOL|隐私条款 check 框默认状态 默认:NO|

+ 隐私协议栏

|参数名称|参数类型|参数说明|
|:-----:|:----:|:-----:|
|appPrivacyOne|String,String|隐私条款一:数组（务必按顺序）@[条款名称,条款链接]|
|appPrivacyTwo|String,String|隐私条款二:数组（务必按顺序）@[条款名称,条款链接]|
|appPrivacyColor|int,int|隐私条款名称颜色 @[基础文字颜色,条款颜色]|
|privacyTextFontSize|float|隐私条款字体大小，默认 12|
|privacyOffsetY |float|隐私条款Y偏移量(注:此属性为与屏幕底部的距离)|
|privacyComponents|String,String|隐私条款拼接文本数组|
|privacyShowBookSymbol|BOOL|隐私条款是否显示书名号，默认不显示|
|privacyLineSpacing|float|隐私条款行距，默认跟随系统|


+ 隐私协议页面

|参数名称|参数类型|参数说明|
|:-----:|:----:|:-----:|
|agreementNavBackgroundColor|int|协议页导航栏背景颜色|
|agreementNavText|String,int,int|运营商协议的协议页面导航栏标题[文字,文字颜色,文字大小]|
|firstPrivacyAgreementNavText|String,int,int|自定义协议1的协议页面导航栏标题[文字,文字颜色,文字大小]|
|secondPrivacyAgreementNavText|String,int,int|自定义协议2的协议页面导航栏标题[文字,文字颜色,文字大小]|
|agreementNavReturnImage|String|协议页导航栏返回按钮图片|


+ slogan

|参数名称|参数类型|参数说明|
|:-----:|:----:|:-----:|
|sloganOffsetY|float|slogan 偏移量 Y|
|sloganTextColor|int|slogan 文字颜色|


+ 弹窗

|参数名称|参数类型|参数说明|
|:-----:|:----:|:-----:|
|showWindow|BOOL|是否弹窗，默认 no|
|windowBackgroundImage|String|弹框内部背景图片|
|windowBackgroundAlpha|float|弹窗外侧 透明度  0~1.0|
|windowCornerRadius|float|弹窗圆角数值|

![JVerification](https://docs.jiguang.cn/jverification/image/cutomeUI_description.png)

#### 关于图片资源
iOS 请将图片放到 JVerificationResource.bundle 中。

比如需要设置一键登录授权页背景图片，在 JVerificationResource.bundle 添加 bg.png 图片后，调用
```javascript
jv.setCustomUIWithConfigiOS({
		authPageBackgroundImage:"bg"
	})
```
