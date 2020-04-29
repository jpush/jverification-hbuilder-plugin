//
//  JVerificationMoudule.m
//  UniPluginJVerification
//
//  Created by 李攀 on 2020/1/10.
//  Copyright © 2020 李攀. All rights reserved.
//

#import "JVerificationModule.h"
#import "WXUtility.h"
//引入JVERIFICATIONService.h头文件
#import "JVERIFICATIONService.h"
// 如果需要使用 idfa 功能所需要引入的头文件（可选）
#import <AdSupport/AdSupport.h>
#import "PDRCoreApp.h"
#import "PDRCoreAppManager.h"
#import "PDRCoreAppInfo.h"

//常量
#define ENABLE         @"enable"
#define TIME           @"time"

#define CODE           @"code"
#define CONTENT        @"content"
#define OPERATOR       @"operator"

#define UIColorFromRGBValue(rgbValue) [UIColor colorWithRed:((float)((rgbValue & 0xFF0000) >> 16))/255.0 green:((float)((rgbValue & 0xFF00) >> 8))/255.0 blue:((float)(rgbValue & 0xFF))/255.0 alpha:1.0]

NSString *const infoConfig_JVerification     = @"JVerification";
NSString *const infoConfig_JVerification_APP_KEY     = @"APP_KEY";
NSString *const infoConfig_JVerification_CHANNEL     = @"CHANNEL";
typedef void (^clickCallBack)(NSString* identifer);

@interface JVCustomViewModel : NSObject
@property(nonatomic,strong)UIView *view;
@property(nonatomic,copy)NSString *identifer;
@end
@implementation JVCustomViewModel

@end
@interface JVerificationModule()
@property(nonatomic,strong)NSMutableArray *btnModelArray;
@property(nonatomic,copy) clickCallBack clickCallBack;
@end
@implementation JVerificationModule

@synthesize weexInstance;

WX_EXPORT_METHOD(@selector(setDebugMode:))
WX_EXPORT_METHOD(@selector(init:callback:))
WX_EXPORT_METHOD(@selector(isInitSuccess:))
WX_EXPORT_METHOD(@selector(checkVerifyEnable:))
WX_EXPORT_METHOD(@selector(getToken:callback:))
WX_EXPORT_METHOD(@selector(preLogin:callback:))
WX_EXPORT_METHOD(@selector(clearPreLoginCache))
WX_EXPORT_METHOD(@selector(loginAuth:callback:eventCallback:))
WX_EXPORT_METHOD(@selector(dismissLoginAuth:callback:))
WX_EXPORT_METHOD(@selector(setCustomUIWithConfigiOS:))

WX_EXPORT_METHOD(@selector(addCustomViewsClickCallback:))
WX_EXPORT_METHOD(@selector(getCode:callback:))
WX_EXPORT_METHOD(@selector(setTimeWithConfig:))

BOOL debugMode = false;

- (void)setDebugMode:(BOOL)debug
{
    NSLog(@"JVerificationModule--->%@ %@", @"setDebugMode:",debug?@"true":@"false");
     debugMode = debug;
    [JVERIFICATIONService setDebug: debug];
   
}

- (void)init:(NSDictionary*)params callback:(WXModuleKeepAliveCallback)callback
{
    NSString *path = [[NSBundle mainBundle]pathForResource:@"Info" ofType:@"plist"];
    NSDictionary *dict = [NSDictionary dictionaryWithContentsOfFile:path];
    NSString *appkey = dict[infoConfig_JVerification][infoConfig_JVerification_APP_KEY];
    NSString *channel = dict[infoConfig_JVerification][infoConfig_JVerification_CHANNEL];
    if (channel == nil ||channel.length == 0) {
        channel = @"developer-default";
    }
    [self logger:@"init with params:" log:params];
    [self logger:@"init with appkey:" log:appkey];
    [self logger:@"init with channel:" log:channel];
    
    
    JVAuthConfig *config = [[JVAuthConfig alloc] init];
    config.appKey = appkey;
    config.channel = channel;
    if (params[@"advertisingId"]) {
        config.advertisingId = params[@"advertisingId"];
    }
    if (params[@"isProduction"]) {
        config.isProduction = [params[@"isProduction"] boolValue];
    }
    if(params[@"timeout"]){
        config.timeout = [params[@"timeout"] doubleValue];
    }
    if(callback != nil){
        config.authBlock = ^(NSDictionary *result) {
            NSNumber *code = result[@"code"];
            NSString *content = result[@"content"];
            NSDictionary *response = [self convertToResult:code content:content];
            callback(response,NO);
        };
    }
    [JVERIFICATIONService setupWithConfig:config];
}

- (void)isInitSuccess:(WXModuleKeepAliveCallback)callback
{
    BOOL enable = [JVERIFICATIONService isSetupClient];
    [self logger:@"isInitSuccess:" log:enable?@"true":@"false"];
    NSDictionary *data = [self convertToResult:enable];
    callback(data,NO);
}

- (void)checkVerifyEnable:(WXModuleKeepAliveCallback)callback
{
    BOOL enable = [JVERIFICATIONService checkVerifyEnable];
    [self logger:@"checkVerifyEnable:" log:enable?@"true":@"false"];
    NSDictionary *data = [self convertToResult:enable];
    callback(data,NO);
}

- (void)getToken:(int)timeout callback:(WXModuleKeepAliveCallback)callback
{
    [self logger:@"getToken with timeout set:" number:timeout];
    NSTimeInterval time  = timeout;
    [JVERIFICATIONService getToken:(time) completion:^(NSDictionary *result) {
        NSNumber *code =  result[@"code"]?result[@"code"]:@(-1);
        NSString *content = result[@"token"]?result[@"token"]:@"";
        NSString *operator = result[@"operator"]?result[@"operator"]:@"";
        NSDictionary *data = [self convertToResult:code content:content operator:operator];
        callback(data,NO);
    }];
}

- (void)clearPreLoginCache
{
    [self logger:@"clearPreLoginCache" log:@""];
    [JVERIFICATIONService clearPreLoginCache];
}

- (void)preLogin:(int)timeout callback:(WXModuleKeepAliveCallback)callback
{
    [self logger:@"preLogin with timeout set:" number:timeout];
    NSTimeInterval time  = timeout;
    [JVERIFICATIONService preLogin:time completion:^(NSDictionary *result) {
        NSNumber *code =  result[@"code"]?result[@"code"]:@(-1);
        NSString *message = result[@"message"]?result[@"message"]:@"";
        NSDictionary *data = [self convertToResult:code content:message];
        callback(data,NO);
    }];
}

- (void)addCustomViewsClickCallback:(WXModuleCallback)clickCallBack{
    self.clickCallBack = ^(NSString *identifer){
        clickCallBack(identifer);
    };
}
- (void)loginAuth:(NSDictionary*)params callback:(WXModuleKeepAliveCallback)callback eventCallback:(WXModuleKeepAliveCallback)eventCallback
{
     [self logger:@"loginAuth with params:" log:params];
    BOOL autoFinish = true;
    BOOL animation = true;
    NSTimeInterval time  = 10000;
    if (params[@"autoFinish"]) {
        autoFinish = [params[@"autoFinish"] boolValue];
    }
    if (params[@"animationFlag"]) {
        animation = [params[@"animationFlag"] boolValue];
    }
    if(params[@"timeout"]){
        time = [params[@"timeout"] doubleValue];
    }

    UIViewController *topVC = [self findVisibleVC];
    [JVERIFICATIONService getAuthorizationWithController:topVC hide:autoFinish animated:animation timeout:time completion:^(NSDictionary *result) {
        NSNumber *code = result[@"code"];
        NSString *content = @"";
        if(result[@"content"]){
            content = result[@"content"];
        }
        if(result[@"loginToken"]){
            content = result[@"loginToken"];
        }
        NSString *operator = result[@"operator"]?result[@"operator"]:@"";
        NSDictionary *responseData = [self convertToResult:code content:content operator:operator];
        callback(responseData,NO);
       
    } actionBlock:^(NSInteger type, NSString *content) {
        NSNumber *code = [NSNumber numberWithLong: type];
        NSDictionary *responseData = [self convertToResult:code content:content];
      eventCallback(responseData,YES);
    }];

}

- (void)dismissLoginAuth:(BOOL)needCloseAnim callback:(WXModuleKeepAliveCallback)callback
{
    [self logger:@"dismissLoginAuth with anim:" log:needCloseAnim?@"true":@"false"];
    [self.btnModelArray removeAllObjects];
    [JVERIFICATIONService dismissLoginControllerAnimated:needCloseAnim completion:^{
        NSDictionary *data = [self convertToResult:0 content:@"ok"];
        callback(data,NO);
    }];
}

- (void)setCustomUIWithConfigiOS:(NSDictionary*)params
{
    [self logger:@"setCustomUIWithConfigiOS:" log:params];
    JVUIConfig *config = [[JVUIConfig alloc] init];
    NSArray* arrayKeys = [params allKeys];
    for(NSString * key in arrayKeys){
        setJVUIConfig(key,params,config);
    }
    [JVERIFICATIONService customUIWithConfig:config customViews:^(UIView *customAreaView) {
        if ([arrayKeys containsObject:addCustomView]){
            if([params[addCustomView] isKindOfClass:[NSArray class]]){
                [self addCustomView:params[addCustomView] superView:customAreaView];
            }
        }
    }];
}

// 获取验证码
- (void)getCode:(NSDictionary*)params callback:(WXModuleKeepAliveCallback)callback{
    [self logger:@"getCode with params:" log:params];
    NSString *phoneNumber = @"";
    NSString *signID = @"";
    NSString *templateID = @"";

    if(params[@"phoneNumber"]){
        phoneNumber = params[@"phoneNumber"];
    }
    if(params[@"signID"]){
        signID = params[@"signID"];
    }
    if(params[@"templateID"]){
        templateID = params[@"templateID"];
    }
    [JVERIFICATIONService getSMSCode:phoneNumber templateID:templateID signID:signID completionHandler:^(NSDictionary * _Nonnull result) {
        callback(result,YES);
    }];
}

// 设置前后两次获取验证码的时间间隔
- (void)setTimeWithConfig:(int)timeInter
{
    NSTimeInterval time  = timeInter;
    [JVERIFICATIONService setGetCodeInternal:time];
}


//授权页面设置
static  NSString* authPageBackgroundImage=@"authPageBackgroundImage";
static  NSString* autoLayout=@"autoLayout";
static  NSString* shouldAutorotate=@"shouldAutorotate";
static  NSString* dismissAnimationFlag=@"dismissAnimationFlag";
//导航栏
static  NSString* navCustom=@"navCustom";
static  NSString* navColor=@"navColor";
static  NSString* navText=@"navText";
static  NSString* navReturnImg=@"navReturnImg";
static  NSString* prefersStatusBarHidden=@"prefersStatusBarHidden";
static  NSString* navTransparent=@"navTransparent";
static  NSString* navReturnHidden=@"navReturnHidden";
static  NSString* navDividingLineHidden=@"navDividingLineHidden";
static  NSString* navBarBackGroundImage=@"navBarBackGroundImage";
//LOGO
static  NSString* logoImg=@"logoImg";
static  NSString* logoWidth=@"logoWidth";
static  NSString* logoHeight=@"logoHeight";
static  NSString* logoOffsetY=@"logoOffsetY";
static  NSString* logoHidden=@"logoHidden";
static  NSString* logoConstraints=@"logoConstraints";
static  NSString* logoHorizontalConstraints=@"logoHorizontalConstraints";

//登录按钮
static  NSString* logBtnText=@"logBtnText";
static  NSString* logBtnOffsetY=@"logBtnOffsetY";
static  NSString* logBtnTextColor=@"logBtnTextColor";
static  NSString* logBtnImgs=@"logBtnImgs";
static  NSString* logBtnConstraints=@"logBtnConstraints";
static  NSString* logBtnHorizontalConstraints=@"logBtnHorizontalConstraints";

//手机号码
static  NSString* numberColor=@"numberColor";
static  NSString* numberSize=@"numberSize";
static  NSString* numFieldOffsetY=@"numFieldOffsetY";
static  NSString* numberConstraints=@"numberConstraints";
static  NSString* numberHorizontalConstraints=@"numberHorizontalConstraints";

//checkBox
static  NSString* uncheckedImg=@"uncheckedImg";
static  NSString* checkedImg=@"checkedImg";
static  NSString* checkViewHidden=@"checkViewHidden";
static  NSString* privacyState=@"privacyState";
static  NSString* checkViewConstraints=@"checkViewConstraints";
static  NSString* checkViewHorizontalConstraints=@"checkViewHorizontalConstraints";


//隐私协议栏
static  NSString* appPrivacyOne=@"appPrivacyOne";
static  NSString* appPrivacyTwo=@"appPrivacyTwo";
static  NSString* appPrivacyColor=@"appPrivacyColor";
static  NSString* privacyTextFontSize=@"privacyTextFontSize";
static  NSString* privacyOffsetY=@"privacyOffsetY";
static  NSString* privacyComponents=@"privacyComponents";
static  NSString* privacyShowBookSymbol=@"privacyShowBookSymbol";
static  NSString* privacyLineSpacing=@"privacyLineSpacing";
static  NSString* privacyConstraints=@"privacyConstraints";
static  NSString* privacyHorizontalConstraints=@"privacyHorizontalConstraints";

//隐私协议页面
static  NSString* agreementNavBackgroundColor=@"agreementNavBackgroundColor";
static  NSString* agreementNavText=@"agreementNavText";
static  NSString* firstPrivacyAgreementNavText=@"firstPrivacyAgreementNavText";
static  NSString* secondPrivacyAgreementNavText=@"secondPrivacyAgreementNavText";
static  NSString* agreementNavReturnImage=@"agreementNavReturnImage";
//slogan
static  NSString* sloganOffsetY=@"sloganOffsetY";
static  NSString* sloganTextColor=@"sloganTextColor";
static  NSString* sloganConstraints=@"sloganConstraints";
static  NSString* sloganHorizontalConstraints=@"sloganHorizontalConstraints";
//弹窗
static  NSString* showWindow=@"showWindow";
static  NSString* windowBackgroundImage=@"windowBackgroundImage";
static  NSString* windowBackgroundAlpha=@"windowBackgroundAlpha";
static  NSString* windowCornerRadius=@"windowCornerRadius";
static  NSString* windowConstraints=@"windowConstraints";
static  NSString* windowHorizontalConstraints=@"windowHorizontalConstraints";
static  NSString* windowCloseBtnConstraints=@"windowCloseBtnConstraints";
static  NSString* windowCloseBtnHorizontalConstraints=@"windowCloseBtnHorizontalConstraints";
static  NSString* windowCloseBtnImgs=@"windowCloseBtnImgs";
//loading
static  NSString* loadingConstraints=@"loadingConstraints";
static  NSString* loadingHorizontalConstraints=@"loadingHorizontalConstraints";

//addCustomView
static  NSString* addCustomView = @"addCustomViews";


void setJVUIConfig(NSString* key ,NSDictionary *dict,
JVUIConfig *jvUIConfig){
    PDRCoreAppInfo *appinfo = [PDRCore Instance].appManager.getMainAppInfo;
    //授权页面设置
    if ([key isEqualToString:authPageBackgroundImage]) {
        NSString *namePath = dict[key];
        NSString *authBgPath = [appinfo.wwwPath stringByAppendingFormat:@"/%@",namePath];
        jvUIConfig.authPageBackgroundImage = [UIImage imageNamed:authBgPath];
    }else if([key isEqualToString:autoLayout]){
        jvUIConfig.autoLayout = [dict[key] boolValue];
    }else if([key isEqualToString:shouldAutorotate]){
        jvUIConfig.shouldAutorotate = [dict[key] boolValue];
    }else if([key isEqualToString:dismissAnimationFlag]){
        jvUIConfig.dismissAnimationFlag = [dict[key] boolValue];
    }
    //导航栏
    else if([key isEqualToString:navCustom]){
        jvUIConfig.navCustom = [dict[key] boolValue];
    } else if([key isEqualToString:navColor]){
        jvUIConfig.navColor = UIColorFromRGBValue([dict[key] intValue]);
    }else if([key isEqualToString:navText]){
        NSArray* textArry = dict[key];
        jvUIConfig.navText = getNSAttributedString(textArry);
    }else if([key isEqualToString:navReturnImg]){
        NSString *navReturnImgPath = [appinfo.wwwPath stringByAppendingFormat:@"/%@",dict[key]];
        jvUIConfig.navReturnImg = [UIImage imageNamed:navReturnImgPath];
    }else if([key isEqualToString:prefersStatusBarHidden]){
        jvUIConfig.prefersStatusBarHidden =[dict[key] boolValue];
    }else if([key isEqualToString:navTransparent]){
        jvUIConfig.navTransparent =[dict[key] boolValue];
    }else if([key isEqualToString:navReturnHidden]){
        jvUIConfig.navReturnHidden =[dict[key] boolValue];
    }else if([key isEqualToString:navDividingLineHidden]){
        jvUIConfig.navDividingLineHidden =[dict[key] boolValue];
    }else if([key isEqualToString:navBarBackGroundImage]){
        NSString *navBarBackGroundImagePath = [appinfo.wwwPath stringByAppendingFormat:@"/%@",dict[key]];
        jvUIConfig.navBarBackGroundImage = [UIImage imageNamed:navBarBackGroundImagePath];
    }
    
    //    LOGO
    else if([key isEqualToString:logoImg]){
        NSString *logoPath = [appinfo.wwwPath stringByAppendingFormat:@"/%@",dict[key]];
        jvUIConfig.logoImg = [[UIImage alloc] initWithContentsOfFile:logoPath];
    }else if([key isEqualToString:logoWidth]){
        jvUIConfig.logoWidth =  [dict[key] floatValue];//CGFloat ;
    }else if([key isEqualToString:logoHeight]){
        jvUIConfig.logoHeight =[dict[key] floatValue];//CGFloat;
    }else if([key isEqualToString:logoOffsetY]){
        jvUIConfig.logoOffsetY =[dict[key] floatValue];//CGFloat;
    }else if([key isEqualToString:logoHidden]){
        jvUIConfig.logoHidden =[dict[key] boolValue];//BOOL
    }else if ([key isEqualToString:logoConstraints]){
        NSArray* logoCons = dict[key];
        jvUIConfig.logoConstraints = [JVerificationModule configConstraintWithAttributes:logoCons];
    }else if ([key isEqualToString:logoHorizontalConstraints]){
        NSArray* logoHCons = dict[key];
        jvUIConfig.logoHorizontalConstraints = [JVerificationModule configConstraintWithAttributes:logoHCons];
    }
    //    登录按钮
    
    else if([key isEqualToString:logBtnText]){
        jvUIConfig.logBtnText = dict[key];
        NSLog(@"走了这段代码：%@",logBtnText);
    }else if([key isEqualToString:logBtnOffsetY]){
        jvUIConfig.logBtnOffsetY =[dict[key] floatValue];//CGFloat;
    }else if([key isEqualToString:logBtnTextColor]){
        NSLog(@"走了这段代码");
        jvUIConfig.logBtnTextColor = UIColorFromRGBValue([dict[key] intValue]);//UIColor;
        NSLog(@"logBtnTextColor: %@",UIColorFromRGBValue([dict[key] intValue]));
    }else if([key isEqualToString:logBtnImgs]){
        NSArray* imgPaths = dict[key];
        NSMutableArray *logBtnImgs = [NSMutableArray arrayWithCapacity:3];
        for (int i = 0; i < imgPaths.count; i++) {
            NSString *logBtnPath = [appinfo.wwwPath stringByAppendingFormat:@"/%@",imgPaths[i]];
            UIImage *logBtnImage = [UIImage imageNamed:logBtnPath];
            [logBtnImgs addObject:logBtnImage];
        }
        jvUIConfig.logBtnImgs = logBtnImgs;
    }else if ([key isEqualToString:logBtnConstraints]){
        NSArray* logBtnCons = dict[key];
        jvUIConfig.logBtnConstraints = [JVerificationModule configConstraintWithAttributes:logBtnCons];
    }else if ([key isEqualToString:logBtnHorizontalConstraints]){
        NSArray* logBtnHCons = dict[key];
        jvUIConfig.logBtnHorizontalConstraints = [JVerificationModule configConstraintWithAttributes:logBtnHCons];
    }
    //    手机号码
    else if([key isEqualToString:numberColor]){
        jvUIConfig.numberColor = UIColorFromRGBValue([dict[key] intValue]);
    }else if([key isEqualToString:numberSize]){
        jvUIConfig.numberSize = [dict[key] floatValue];
    }else if([key isEqualToString:numFieldOffsetY]){
        jvUIConfig.numFieldOffsetY = [dict[key] floatValue];
    }else if ([key isEqualToString:numberConstraints]){
        NSArray* numberConstraints = dict[key];
        jvUIConfig.numberConstraints = [JVerificationModule configConstraintWithAttributes:numberConstraints];
    }else if ([key isEqualToString:numberHorizontalConstraints]){
        NSArray* numberHorizontalConstraints = dict[key];
        jvUIConfig.numberHorizontalConstraints = [JVerificationModule configConstraintWithAttributes:numberHorizontalConstraints];
    }
    //    checkBox
    else if([key isEqualToString:uncheckedImg]){
        NSString *uncheckedImgPath = [appinfo.wwwPath stringByAppendingFormat:@"/%@",dict[key]];
        jvUIConfig.uncheckedImg = [UIImage imageNamed:uncheckedImgPath];
    }else if([key isEqualToString:checkedImg]){
        NSString *checkedImgPath = [appinfo.wwwPath stringByAppendingFormat:@"/%@",dict[key]];
        jvUIConfig.checkedImg = [UIImage imageNamed:checkedImgPath];
    }else if([key isEqualToString:checkViewHidden]){
        jvUIConfig.checkViewHidden = [dict[key] boolValue];
    }else if([key isEqualToString:privacyState]){
        jvUIConfig.privacyState = [dict[key] boolValue];
    }else if ([key isEqualToString:checkViewConstraints]){
        NSArray* checkViewConstraints = dict[key];
        jvUIConfig.checkViewConstraints = [JVerificationModule configConstraintWithAttributes:checkViewConstraints];
    }else if ([key isEqualToString:checkViewHorizontalConstraints]){
        NSArray* checkViewHorizontalConstraints = dict[key];
        jvUIConfig.checkViewHorizontalConstraints = [JVerificationModule configConstraintWithAttributes:checkViewHorizontalConstraints];
    }
    //    隐私协议栏
    
    else if([key isEqualToString:appPrivacyOne]){
        jvUIConfig.appPrivacyOne = dict[key];
    }else if([key isEqualToString:appPrivacyTwo]){
        jvUIConfig.appPrivacyTwo = dict[key];
    }else if([key isEqualToString:appPrivacyColor]){
        NSArray* colors = dict[key];
        NSArray* appPrivacyColor = [[NSArray alloc] initWithObjects:
                                    UIColorFromRGBValue([colors[0] intValue]),
                                    UIColorFromRGBValue([colors[1] intValue]),
                                    nil];
        jvUIConfig.appPrivacyColor = appPrivacyColor;
    }else if([key isEqualToString:privacyTextFontSize]){
        jvUIConfig.privacyTextFontSize = [dict[key] floatValue];
    }else if([key isEqualToString:privacyOffsetY]){
        jvUIConfig.privacyOffsetY = [dict[key] floatValue];
    }else if([key isEqualToString:privacyComponents]){
        jvUIConfig.privacyComponents = dict[key];
    }else if([key isEqualToString:privacyShowBookSymbol]){
        jvUIConfig.privacyShowBookSymbol = [dict[key] boolValue];
    }else if([key isEqualToString:privacyLineSpacing]){
        jvUIConfig.privacyLineSpacing = [dict[key] floatValue];
    }else if ([key isEqualToString:privacyConstraints]){
        NSArray* privacyConstraints = dict[key];
        jvUIConfig.privacyConstraints = [JVerificationModule configConstraintWithAttributes:privacyConstraints];
    }else if ([key isEqualToString:privacyHorizontalConstraints]){
        NSArray* privacyHorizontalConstraints = dict[key];
        jvUIConfig.privacyHorizontalConstraints = [JVerificationModule configConstraintWithAttributes:privacyHorizontalConstraints];
    }
    
    //    隐私协议页面
    else if([key isEqualToString:agreementNavBackgroundColor]){
        jvUIConfig.agreementNavBackgroundColor = UIColorFromRGBValue([dict[key] intValue]);
    }else if([key isEqualToString:agreementNavText]){
        NSArray* textArry = dict[key];
        jvUIConfig.agreementNavText = getNSAttributedString(textArry);
    }else if([key isEqualToString:firstPrivacyAgreementNavText]){
        NSArray* textArry = dict[key];
        jvUIConfig.firstPrivacyAgreementNavText = getNSAttributedString(textArry);
    }else if([key isEqualToString:secondPrivacyAgreementNavText]){
        NSArray* textArry = dict[key];
        jvUIConfig.secondPrivacyAgreementNavText = getNSAttributedString(textArry);
    }else if([key isEqualToString:agreementNavReturnImage]){
        NSString *agreementNavReturnImagePath = [appinfo.wwwPath stringByAppendingFormat:@"/%@",dict[key]];
        jvUIConfig.agreementNavReturnImage = [UIImage imageNamed:agreementNavReturnImagePath];
    }
    //    slogan
    else if([key isEqualToString:sloganOffsetY]){
        jvUIConfig.sloganOffsetY = [dict[key] floatValue];
    }else if([key isEqualToString:sloganTextColor]){
        jvUIConfig.sloganTextColor = UIColorFromRGBValue([dict[key] intValue]);
    }else if ([key isEqualToString:sloganHorizontalConstraints]){
        NSArray* sloganHorizontalConstraints = dict[key];
        jvUIConfig.sloganHorizontalConstraints = [JVerificationModule configConstraintWithAttributes:sloganHorizontalConstraints];
    }else if ([key isEqualToString:sloganConstraints]){
        NSArray* sloganConstraints = dict[key];
        jvUIConfig.sloganConstraints = [JVerificationModule configConstraintWithAttributes:sloganConstraints];
    }
    
    
    //    弹窗
    else if([key isEqualToString:showWindow]){
        jvUIConfig.showWindow = [dict[key] boolValue];
    }else if([key isEqualToString:windowBackgroundImage]){
        NSString *windowBackgroundImagePath = [appinfo.wwwPath stringByAppendingFormat:@"/%@",dict[key]];
        jvUIConfig.windowBackgroundImage =  [UIImage imageNamed:windowBackgroundImagePath];
    }else if([key isEqualToString:windowBackgroundAlpha]){
        jvUIConfig.windowBackgroundAlpha = [dict[key] floatValue];
    }else if([key isEqualToString:windowCornerRadius]){
        jvUIConfig.windowCornerRadius = [dict[key] floatValue];
    }else if([key isEqualToString:windowConstraints]){
        NSArray* consWindow = dict[key];
        jvUIConfig.windowConstraints = [JVerificationModule configConstraintWithAttributes:consWindow];
    }else if([key isEqualToString:windowHorizontalConstraints]){
        NSArray* windowHorizontalConstraints = dict[key];
        jvUIConfig.windowHorizontalConstraints = [JVerificationModule configConstraintWithAttributes:windowHorizontalConstraints];
    }else if ([key isEqualToString:windowCloseBtnImgs]){
        NSArray *imageNames = dict[key];
        if ([imageNames isKindOfClass:[NSArray class]]) {
            NSMutableArray *images = [NSMutableArray arrayWithCapacity:3];
            for (int i = 0; i< imageNames.count; i++) {
                NSString *windowCloseBtnImgPath = [appinfo.wwwPath stringByAppendingFormat:@"/%@",imageNames[i]];
                UIImage *closeImage  = [UIImage imageNamed:windowCloseBtnImgPath];
                if (closeImage) {
                    [images addObject:closeImage];
                }
                jvUIConfig.windowCloseBtnImgs = images;
            }
        }
    }else if ([key isEqualToString:@"windowCloseBtnConstraints"]){
         NSArray* windowCloseBtnConstraints = dict[key];
         jvUIConfig.windowCloseBtnConstraints = [JVerificationModule configConstraintWithAttributes:windowCloseBtnConstraints];
    }else if ([key isEqualToString:@"windowCloseBtnHorizontalConstraints"]){
         NSArray* windowCloseBtnHorizontalConstraints = dict[key];
         jvUIConfig.windowCloseBtnHorizontalConstraints = [JVerificationModule configConstraintWithAttributes:windowCloseBtnHorizontalConstraints];
    }
    //loading
    else if ([key isEqualToString:@"loadingConstraints"]){
         NSArray* loadingConstraints = dict[key];
         jvUIConfig.loadingConstraints = [JVerificationModule configConstraintWithAttributes:loadingConstraints];
    }else if ([key isEqualToString:@"loadingHorizontalConstraints"]){
         NSArray* loadingHorizontalConstraints = dict[key];
         jvUIConfig.loadingHorizontalConstraints = [JVerificationModule configConstraintWithAttributes:loadingHorizontalConstraints];
    }
}
// type  top,left,right,bottom, width, height  backgroundColor cornerRadius  //公有属性

/*
 typ = imageView
 imagePath
 
 typ = label
 textFont, textColor, numberOfLines,textAlignment(0 left,1 center ,2 right ),text

 typ = button
 textFont, textColor,normalImagePath,selectImagePath,isFinish（0，1）, title，id

 */

-(void)addCustomView:(NSArray*)viewsInfo superView:(UIView*)superView{
    for (int i = 0; i< viewsInfo.count; i++) {
        NSDictionary *viewInfo = viewsInfo[i];
        if ([viewInfo isKindOfClass:[NSDictionary class]]) {
            PDRCoreAppInfo *appinfo = [PDRCore Instance].appManager.getMainAppInfo;

            NSString *type =  viewInfo[@"type"];
            UIView *childrenView = nil;
            if ([type isEqualToString:@"label"]) {//
                childrenView = [[UILabel alloc] init];
                UILabel *label =(UILabel *)childrenView;
                if ([viewInfo.allKeys containsObject:@"textFont"]) {
                    label.font = [UIFont systemFontOfSize:[viewInfo[@"textFont"] floatValue]];
                }
                if ([viewInfo.allKeys containsObject:@"textColor"]) {
                    label.textColor = UIColorFromRGBValue([viewInfo[@"textColor"] intValue]);
                }
                if ([viewInfo.allKeys containsObject:@"text"]) {
                    label.text = viewInfo[@"text"];
                }
                if ([viewInfo.allKeys containsObject:@"numberOfLines"]) {
                     label.numberOfLines = [viewInfo[@"numberOfLines"] intValue];
                }
                if ([viewInfo.allKeys containsObject:@"textAlignment"]) {
                     label.textAlignment = [viewInfo[@"numberOfLines"] intValue];
                }
            }else if ([type isEqualToString:@"imageView"]){
                childrenView = [[UIImageView alloc] init];
                if([viewInfo.allKeys containsObject:@"imagePath"]){
                    NSString*imagePath = [appinfo.wwwPath stringByAppendingFormat:@"/%@",viewInfo[@"imagePath"]];
                    [(UIImageView*)childrenView setImage:[UIImage imageNamed:imagePath]];
                }
            }else if ([type isEqualToString:@"button"]){
                childrenView = [[UIButton alloc] init];
                UIButton *btn = (UIButton*)childrenView;
                if ([viewInfo.allKeys containsObject:@"textFont"]) {
                    btn.titleLabel.font = [UIFont systemFontOfSize:[viewInfo[@"textFont"] floatValue]];
                }
                if ([viewInfo.allKeys containsObject:@"title"]) {
                    [btn setTitle:viewInfo[@"title"] forState:UIControlStateNormal];
                }
                if ([viewInfo.allKeys containsObject:@"textColor"]) {
                    [btn setTitleColor:UIColorFromRGBValue([viewInfo[@"textColor"] intValue]) forState:UIControlStateNormal];
                }
                if ([viewInfo.allKeys containsObject:@"normalImagePath"]) {
                    NSString*normalImagePath = [appinfo.wwwPath stringByAppendingFormat:@"/%@",viewInfo[@"normalImagePath"]];
                    [btn setImage:[UIImage imageNamed:normalImagePath] forState:UIControlStateNormal];
                }
                if ([viewInfo.allKeys containsObject:@"selectImagePath"]) {
                    NSString*selectImagePath = [appinfo.wwwPath stringByAppendingFormat:@"/%@",viewInfo[@"selectImagePath"]];
                    [btn setImage:[UIImage imageNamed:selectImagePath] forState:UIControlStateHighlighted];
                }
                if ([viewInfo.allKeys containsObject:@"isFinish"]) {
                  btn.tag = [viewInfo[@"isFinish"] boolValue];
                }
                if (!self.btnModelArray) {
                    self.btnModelArray = [[NSMutableArray alloc] init];
                }
                if([viewInfo.allKeys containsObject:@"id"]){
                    //:绑定视图
                    NSString *identifer = viewInfo[@"id"];
                    JVCustomViewModel *viewModel = [[JVCustomViewModel alloc] init];
                    viewModel.view = btn;
                    viewModel.identifer = identifer;
                    [self.btnModelArray addObject:viewModel];
                }

                [btn addTarget:self action:@selector(btnClcik:) forControlEvents:UIControlEventTouchUpInside];
            }
            NSAssert(childrenView, @"不支持设置的视图类型");
            [superView addSubview:childrenView];
            childrenView.translatesAutoresizingMaskIntoConstraints = NO;
            if ([viewInfo.allKeys containsObject:@"backgroundColor"]) {
                childrenView.backgroundColor = UIColorFromRGBValue([viewInfo[@"backgroundColor"] intValue]);
            }
            if([viewInfo.allKeys containsObject:@"cornerRadius"]){
                childrenView.layer.masksToBounds = YES;
                childrenView.layer.cornerRadius = [viewInfo[@"cornerRadius"] floatValue];
            }

            if ([viewInfo.allKeys containsObject:@"top"]) {
                CGFloat top = [viewInfo[@"top"] floatValue];
                NSLayoutConstraint *topCon =  [NSLayoutConstraint constraintWithItem:childrenView attribute:NSLayoutAttributeTop relatedBy:NSLayoutRelationEqual toItem:superView attribute:NSLayoutAttributeTop multiplier:1 constant:top];
                [superView addConstraint:topCon];
            }
            if ([viewInfo.allKeys containsObject:@"left"]) {
                CGFloat left = [viewInfo[@"left"] floatValue];
                NSLayoutConstraint *leftCon =  [NSLayoutConstraint constraintWithItem:childrenView attribute:NSLayoutAttributeLeft relatedBy:NSLayoutRelationEqual toItem:superView attribute:NSLayoutAttributeLeft multiplier:1 constant:left];
                [superView addConstraint:leftCon];
            }
            if ([viewInfo.allKeys containsObject:@"right"]) {
                CGFloat right = [viewInfo[@"right"] floatValue];
                NSLayoutConstraint *rightCon =  [NSLayoutConstraint constraintWithItem:childrenView attribute:NSLayoutAttributeRight relatedBy:NSLayoutRelationEqual toItem:superView attribute:NSLayoutAttributeRight multiplier:1 constant:right];
                [superView addConstraint:rightCon];
            }
            if ([viewInfo.allKeys containsObject:@"bottom"]) {
                CGFloat bottom = [viewInfo[@"bottom"] floatValue];
                NSLayoutConstraint *bottomCon =  [NSLayoutConstraint constraintWithItem:childrenView attribute:NSLayoutAttributeBottom relatedBy:NSLayoutRelationEqual toItem:superView attribute:NSLayoutAttributeBottom multiplier:1 constant:bottom];
                [superView addConstraint:bottomCon];
            }
            
            if ( [viewInfo.allKeys containsObject:@"height"]) {
                CGFloat height = [viewInfo[@"height"] floatValue];
                NSLayoutConstraint *heightCon = [NSLayoutConstraint constraintWithItem:childrenView attribute:NSLayoutAttributeHeight relatedBy:NSLayoutRelationEqual toItem:nil attribute:NSLayoutAttributeHeight multiplier:1 constant:height];
                [childrenView addConstraint:heightCon];
            }
            if ([viewInfo.allKeys containsObject:@"width"]) {
                CGFloat width =  [viewInfo[@"width"] floatValue];
                NSLayoutConstraint *widthCon = [NSLayoutConstraint constraintWithItem:childrenView attribute:NSLayoutAttributeWidth relatedBy:NSLayoutRelationEqual toItem:nil attribute:NSLayoutAttributeWidth multiplier:1 constant:width];
                [childrenView addConstraint:widthCon];
            }

        }
    }
    
    
}

- (void)btnClcik:(UIButton*)btn{
    if (btn.tag) {
        [JVERIFICATIONService dismissLoginControllerAnimated:YES completion:nil];
    }
    for (int i = 0; i < self.btnModelArray.count; i++) {
        JVCustomViewModel *viewModel = self.btnModelArray[i];
        if ([viewModel.view isEqual:btn]) {
            NSString *identifer = viewModel.identifer;
            if (self.clickCallBack) {
                self.clickCallBack(identifer);
            }
        }
    }
}

+ (NSArray*)configConstraintWithAttributes:(NSArray*)keys{
    NSAssert(keys.count == 4, @"你必须按照文档规则设置参数(centerX,centerY,width,height)");
    NSMutableArray *constraints = [NSMutableArray arrayWithCapacity:4];
    NSArray* cons = keys;
    CGFloat centerX = [cons[0] floatValue];
    CGFloat centerY = [cons[1] floatValue];
    CGFloat w = [cons[2] floatValue];
    CGFloat h = [cons[3] floatValue];
    JVLayoutConstraint *constraintX = [JVLayoutConstraint constraintWithAttribute:NSLayoutAttributeCenterX relatedBy:NSLayoutRelationEqual toItem:JVLayoutItemSuper attribute:NSLayoutAttributeCenterX multiplier:1 constant:centerX];
    JVLayoutConstraint *constraintY = [JVLayoutConstraint constraintWithAttribute:NSLayoutAttributeCenterY relatedBy:NSLayoutRelationEqual toItem:JVLayoutItemSuper attribute:NSLayoutAttributeCenterY multiplier:1 constant:centerY];
    JVLayoutConstraint *constraintW = [JVLayoutConstraint constraintWithAttribute:NSLayoutAttributeWidth relatedBy:NSLayoutRelationEqual toItem:JVLayoutItemNone attribute:NSLayoutAttributeWidth multiplier:1 constant:w];
    JVLayoutConstraint *constraintH = [JVLayoutConstraint constraintWithAttribute:NSLayoutAttributeHeight relatedBy:NSLayoutRelationEqual toItem:JVLayoutItemNone attribute:NSLayoutAttributeHeight multiplier:1 constant:h];
    [constraints addObjectsFromArray:@[constraintX,constraintY,constraintW,constraintH]];
    return constraints;
}


NSAttributedString *getNSAttributedString(NSArray* textArry ){
    if (3 == textArry.count) {
        return [[NSAttributedString alloc]initWithString:textArry[0] attributes:@{NSForegroundColorAttributeName:UIColorFromRGBValue([textArry[1] intValue]), NSFontAttributeName:[UIFont systemFontOfSize:[textArry[2] intValue]]}];
    }else{
        return [[NSAttributedString alloc]initWithString:textArry[0] attributes:@{NSForegroundColorAttributeName:UIColorFromRGBValue([textArry[1] intValue])}];
    }
}


// 获取栈顶 UIViewController
- (UIViewController *)findVisibleVC {
    UIViewController *visibleVc = nil;
    UIWindow *visibleWindow = nil;
    NSArray *windows = [[UIApplication sharedApplication] windows];
    for (UIWindow *window in windows) {
        if (!window.hidden && !visibleWindow) {
            visibleWindow = window;
        }
        if ([UIWindow instancesRespondToSelector:@selector(rootViewController)]) {
            if ([window rootViewController]) {
                visibleVc = window.rootViewController;
                break;
            }
        }
    }
    
    return visibleVc ?: [[UIApplication sharedApplication].delegate window].rootViewController;
}
//结果返回
-(NSDictionary *)convertToResult:(BOOL)enable
{
    NSDictionary *responseData = @{@"enable":@(enable)};
    return responseData;
}

-(NSDictionary *)convertToResult:(NSNumber *)code
                         content:(NSString *)content
{
    NSDictionary *responseData = @{CODE:code,CONTENT:content};
    return responseData;
}

-(NSDictionary *)convertToResult:(NSNumber *)code
                         content: (NSString *)content
                        operator: (NSString *)operator
{
    NSDictionary *responseData = @{CODE:code,CONTENT:content,OPERATOR:operator};
    return responseData;
}

// debug 打印控制
- (void)logger:(NSObject *)tag log:(NSObject *)log
{
    if(debugMode){
          NSLog(@"JVerificationModule--->%@ %@", tag,log);
    }
}

- (void)logger:(NSObject *)tag number:(int)number
{
    if(debugMode){
        NSLog(@"JVerificationModule--->%@ %i", tag,number);
    }
}

@end
