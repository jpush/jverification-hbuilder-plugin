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
@interface JVerificationModule ()

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
    [JVERIFICATIONService customUIWithConfig:config];
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
//登录按钮
static  NSString* logBtnText=@"logBtnText";
static  NSString* logBtnOffsetY=@"logBtnOffsetY";
static  NSString* logBtnTextColor=@"logBtnTextColor";
static  NSString* logBtnImgs=@"logBtnImgs";
//手机号码
static  NSString* numberColor=@"numberColor";
static  NSString* numberSize=@"numberSize";
static  NSString* numFieldOffsetY=@"numFieldOffsetY";
//checkBox
static  NSString* uncheckedImg=@"uncheckedImg";
static  NSString* checkedImg=@"checkedImg";
static  NSString* checkViewHidden=@"checkViewHidden";
static  NSString* privacyState=@"privacyState";
//隐私协议栏
static  NSString* appPrivacyOne=@"appPrivacyOne";
static  NSString* appPrivacyTwo=@"appPrivacyTwo";
static  NSString* appPrivacyColor=@"appPrivacyColor";
static  NSString* privacyTextFontSize=@"privacyTextFontSize";
static  NSString* privacyOffsetY=@"privacyOffsetY";
static  NSString* privacyComponents=@"privacyComponents";
static  NSString* privacyShowBookSymbol=@"privacyShowBookSymbol";
static  NSString* privacyLineSpacing=@"privacyLineSpacing";
//隐私协议页面
static  NSString* agreementNavBackgroundColor=@"agreementNavBackgroundColor";
static  NSString* agreementNavText=@"agreementNavText";
static  NSString* firstPrivacyAgreementNavText=@"firstPrivacyAgreementNavText";
static  NSString* secondPrivacyAgreementNavText=@"secondPrivacyAgreementNavText";
static  NSString* agreementNavReturnImage=@"agreementNavReturnImage";
//slogan
static  NSString* sloganOffsetY=@"sloganOffsetY";
static  NSString* sloganTextColor=@"sloganTextColor";
//弹窗
static  NSString* showWindow=@"showWindow";
static  NSString* windowBackgroundImage=@"windowBackgroundImage";
static  NSString* windowBackgroundAlpha=@"windowBackgroundAlpha";
static  NSString* windowCornerRadius=@"windowCornerRadius";

void setJVUIConfig(NSString* key ,NSDictionary *dict,
JVUIConfig *jvUIConfig){
    //授权页面设置
    if ([key containsString:authPageBackgroundImage]) {
        jvUIConfig.authPageBackgroundImage = [UIImage imageNamed:dict[key]];
    }else if([key containsString:autoLayout]){
        jvUIConfig.autoLayout = [dict[key] boolValue];
    }else if([key containsString:shouldAutorotate]){
        jvUIConfig.shouldAutorotate = [dict[key] boolValue];
    }else if([key containsString:dismissAnimationFlag]){
        jvUIConfig.dismissAnimationFlag = [dict[key] boolValue];
    }
    
    //导航栏
    else if([key containsString:navCustom]){
        jvUIConfig.navCustom = [dict[key] boolValue];
    } else if([key containsString:navColor]){
        jvUIConfig.navColor = UIColorFromRGBValue([dict[key] intValue]);
    }else if([key containsString:navText]){
        NSArray* textArry = dict[key];
        jvUIConfig.navText = getNSAttributedString(textArry);
    }else if([key containsString:navReturnImg]){
        jvUIConfig.navReturnImg = [UIImage imageNamed:dict[key]];
    }else if([key containsString:prefersStatusBarHidden]){
        jvUIConfig.prefersStatusBarHidden =[dict[key] boolValue];
    }else if([key containsString:navTransparent]){
        jvUIConfig.navTransparent =[dict[key] boolValue];
    }else if([key containsString:navReturnHidden]){
        jvUIConfig.navReturnHidden =[dict[key] boolValue];
    }else if([key containsString:navDividingLineHidden]){
        jvUIConfig.navDividingLineHidden =[dict[key] boolValue];
    }else if([key containsString:navBarBackGroundImage]){
        jvUIConfig.navBarBackGroundImage = [UIImage imageNamed:dict[key]];
    }
    
    //    LOGO
    else if([key containsString:logoImg]){
        jvUIConfig.logoImg = [UIImage imageNamed:dict[key]];
    }else if([key containsString:logoWidth]){
        jvUIConfig.logoWidth =  [dict[key] floatValue];//CGFloat ;
    }else if([key containsString:logoHeight]){
        jvUIConfig.logoHeight =[dict[key] floatValue];//CGFloat;
    }else if([key containsString:logoOffsetY]){
        jvUIConfig.logoOffsetY =[dict[key] floatValue];//CGFloat;
    }else if([key containsString:logoHidden]){
        jvUIConfig.logoHidden =[dict[key] boolValue];//BOOL
    }
    //    登录按钮
    
    else if([key containsString:logBtnText]){
        jvUIConfig.logBtnText = dict[key];
    }else if([key containsString:logBtnOffsetY]){
        jvUIConfig.logBtnOffsetY =[dict[key] floatValue];//CGFloat;
    }else if([key containsString:logBtnTextColor]){
        jvUIConfig.logBtnTextColor = UIColorFromRGBValue([dict[key] intValue]);//UIColor;
    }else if([key containsString:logBtnImgs]){
        NSArray* imgPaths = dict[key];
        NSArray* logBtnImgs = [[NSArray alloc] initWithObjects:
                               [UIImage imageNamed:imgPaths[0]],
                               [UIImage imageNamed:imgPaths[1]],
                               [UIImage imageNamed:imgPaths[2]],
                               nil];
        jvUIConfig.logBtnImgs = logBtnImgs;
    }
    //    手机号码
    else if([key containsString:numberColor]){
        jvUIConfig.numberColor = UIColorFromRGBValue([dict[key] intValue]);
    }else if([key containsString:numberSize]){
        jvUIConfig.numberSize = [dict[key] floatValue];
    }else if([key containsString:numFieldOffsetY]){
        jvUIConfig.numFieldOffsetY = [dict[key] floatValue];
    }
    //    checkBox
    else if([key containsString:uncheckedImg]){
        jvUIConfig.uncheckedImg = [UIImage imageNamed:dict[key]];
    }else if([key containsString:checkedImg]){
        jvUIConfig.checkedImg = [UIImage imageNamed:dict[key]];
    }else if([key containsString:checkViewHidden]){
        jvUIConfig.checkViewHidden = [dict[key] boolValue];
    }else if([key containsString:privacyState]){
        jvUIConfig.privacyState = [dict[key] boolValue];
    }
    //    隐私协议栏
    
    else if([key containsString:appPrivacyOne]){
        jvUIConfig.appPrivacyOne = dict[key];
    }else if([key containsString:appPrivacyTwo]){
        jvUIConfig.appPrivacyTwo = dict[key];
    }else if([key containsString:appPrivacyColor]){
        NSArray* colors = dict[key];
        NSArray* appPrivacyColor = [[NSArray alloc] initWithObjects:
                                    UIColorFromRGBValue([colors[0] intValue]),
                                    UIColorFromRGBValue([colors[1] intValue]),
                                    nil];
        jvUIConfig.appPrivacyColor = appPrivacyColor;
    }else if([key containsString:privacyTextFontSize]){
        jvUIConfig.privacyTextFontSize = [dict[key] floatValue];
    }else if([key containsString:privacyOffsetY]){
        jvUIConfig.privacyOffsetY = [dict[key] floatValue];
    }else if([key containsString:privacyComponents]){
        jvUIConfig.privacyComponents = dict[key];
    }else if([key containsString:privacyShowBookSymbol]){
        jvUIConfig.privacyShowBookSymbol = [dict[key] boolValue];
    }else if([key containsString:privacyLineSpacing]){
        jvUIConfig.privacyLineSpacing = [dict[key] floatValue];
    }
    
    //    隐私协议页面
    else if([key containsString:agreementNavBackgroundColor]){
        jvUIConfig.agreementNavBackgroundColor = UIColorFromRGBValue([dict[key] intValue]);
    }else if([key containsString:agreementNavText]){
        NSArray* textArry = dict[key];
        jvUIConfig.agreementNavText = getNSAttributedString(textArry);
    }else if([key containsString:firstPrivacyAgreementNavText]){
        NSArray* textArry = dict[key];
        jvUIConfig.firstPrivacyAgreementNavText = getNSAttributedString(textArry);
    }else if([key containsString:secondPrivacyAgreementNavText]){
        NSArray* textArry = dict[key];
        jvUIConfig.secondPrivacyAgreementNavText = getNSAttributedString(textArry);
    }else if([key containsString:agreementNavReturnImage]){
        jvUIConfig.agreementNavReturnImage = [UIImage imageNamed:dict[key]];
    }
    //    slogan
    else if([key containsString:sloganOffsetY]){
        jvUIConfig.sloganOffsetY = [dict[key] floatValue];
    }else if([key containsString:sloganTextColor]){
        jvUIConfig.sloganTextColor = UIColorFromRGBValue([dict[key] intValue]);
    }
    //    弹窗
    else if([key containsString:sloganOffsetY]){
        jvUIConfig.showWindow = [dict[key] boolValue];
    }else if([key containsString:windowBackgroundImage]){
        jvUIConfig.windowBackgroundImage =  [UIImage imageNamed:dict[key]];
    }else if([key containsString:windowBackgroundAlpha]){
        jvUIConfig.windowBackgroundAlpha = [dict[key] floatValue];
    }else if([key containsString:windowCornerRadius]){
        jvUIConfig.windowCornerRadius = [dict[key] floatValue];
    }
    
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
