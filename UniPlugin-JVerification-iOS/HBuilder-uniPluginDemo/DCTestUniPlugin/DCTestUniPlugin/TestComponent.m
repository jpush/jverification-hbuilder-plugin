//
//  TestComponent.m
//  DCTestUniPlugin
//
//  Created by XHY on 2020/4/23.
//  Copyright © 2020 DCloud. All rights reserved.
//

#import "TestComponent.h"
#import "DCUniConvert.h"
#import <MapKit/MapKit.h>

@interface TestComponent () <MKMapViewDelegate>

@property (nonatomic, assign) BOOL mapLoadedEvent;
@property (nonatomic, assign) BOOL showsTraffic;

@end

@implementation TestComponent



-(void)onCreateComponentWithRef:(NSString *)ref type:(NSString *)type styles:(NSDictionary *)styles attributes:(NSDictionary *)attributes events:(NSArray *)events uniInstance:(DCUniSDKInstance *)uniInstance
{
    if (attributes[@"showsTraffic"]) {
        _showsTraffic = [DCUniConvert BOOL: attributes[@"showsTraffic"]];
    }
}

- (UIView *)loadView {
    return [MKMapView new];
}

- (void)viewDidLoad {
    ((MKMapView*)self.view).delegate = self;
    ((MKMapView*)self.view).showsTraffic = _showsTraffic;
}

/// 前端更新属性回调方法
/// @param attributes 更新的属性
- (void)updateAttributes:(NSDictionary *)attributes {
    // 解析属性
    if (attributes[@"showsTraffic"]) {
        _showsTraffic = [DCUniConvert BOOL: attributes[@"showsTraffic"]];
        ((MKMapView*)self.view).showsTraffic = _showsTraffic;
    }
}

/// 前端注册的事件会调用此方法
/// @param eventName 事件名称
- (void)addEvent:(NSString *)eventName {
    if ([eventName isEqualToString:@"mapLoaded"]) {
        _mapLoadedEvent = YES;
    }
}

/// 对应的移除事件回调方法
/// @param eventName 事件名称
- (void)removeEvent:(NSString *)eventName {
    if ([eventName isEqualToString:@"mapLoaded"]) {
        _mapLoadedEvent = NO;
    }
}

#pragma mark - MKMapViewDelegate

- (void)mapViewDidFinishLoadingMap:(MKMapView *)mapView {
    if (_mapLoadedEvent) {
        // 向前端发送事件，params 为传给前端的数据 注：数据最外层为 NSDictionary 格式，需要以 "detail" 作为 key 值
        [self fireEvent:@"mapLoaded" params:@{@"detail":@{@"mapLoaded":@"success"}} domChanges:nil];
    }
}


// 通过 WX_EXPORT_METHOD 将方法暴露给前端
UNI_EXPORT_METHOD(@selector(focus:))

- (void)focus:(NSDictionary *)options {
    // options 为前端传递的参数
    NSLog(@"%@",options);
}

@end
