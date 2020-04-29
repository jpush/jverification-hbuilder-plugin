<template>
	<view class="content">
		<button type="primary" @click="debug()">设置debug模式</button>
		<button type="primary" @click="init()">初始化</button>
		<button type="primary" @click="isInitSuccess()">初始化是否成功</button>
		<button type="primary" @click="checkVerifyEnable()">是否支持验证</button>
		<button type="primary" @click="getToken()">获取token</button>
		<button type="primary" @click="preLogin()">一键登录预取号</button>
		<button type="primary" @click="clearPreLoginCache()">清除预取号缓存</button>
		<button type="primary" @click="loginAuth()">请求授权一键登录</button>
		<button type="primary" @click="setCustomUIWithConfig()">自定义授权页面样式</button>
		<button type="primary" @click="setCustomDialog()">自定义弹窗授权页</button>
		<button type="primary" @click="getCode()">获取验证码</button>
		<button type="primary" @click="setTimeWithConfig()">设置获取验证码时间间隔</button>
		<view class="msg-box" >
			<text class="msg">{{msg}}</text>
		</view>
	</view>
</template>

<script>
	const jv = uni.requireNativePlugin('JG-JVerification')
	export default {
		data() {
			return {
				title: 'Hello',
				msg: "",
				jv
			}
		},
		onLoad() {
		},
		methods: {
			// 设置 debug 模式
			debug:function(){
				this.jv.setDebugMode(true);
			},
			// 初始化
			init:function(){
				let self = this;
				self.jv.init({
					timeout:7000,
					isProduction:false,
				},result=>{
					self.showModal('init',JSON.stringify(result));
				});
			},
			// 是否初始化成功
			isInitSuccess:function(){
				let self = this;
				self.jv.isInitSuccess(result=>{
					self.showModal('isInitSuccess',JSON.stringify(result));
				})
			},
			// 当前网络是否支持认证
			checkVerifyEnable:function(){
				let self = this;
				self.jv.checkVerifyEnable(result=>{
					self.showModal('checkVerifyEnable',JSON.stringify(result));
				})
			},
			// 获取认证 token
			getToken:function(){
				let self = this;
				self.jv.getToken(5000,result=>{
					self.showModal('getToken',JSON.stringify(result));
				})
			},
			// 一键登录预取号
			preLogin:function(){
				let self = this;
				self.jv.preLogin(5000,result=>{
					self.showModal('preLogin',JSON.stringify(result));
				})
			},
			// 清除预取号缓存
			clearPreLoginCache:function(){
				this.jv.clearPreLoginCache();
			},
			// 一键登录
			loginAuth:function(){
				let self = this;
				self.jv.loginAuth({
					autoFinish:true,
					timeout:5000
				},result=>{
					self.showModal('loginAuth',JSON.stringify(result));
				},event=>{
					console.log("loginAuthevent:"+JSON.stringify(event));
				})
			},
			// 自定义授权页面 UI 样式
			setCustomUIWithConfig:function(){
				let self = this;
				this.jv.addCustomViewsClickCallback(id=>{
					self.showModal('customViewclick',"id:"+id);
				});
				
				if(uni.getSystemInfoSync().platform == "ios"){
					this.jv.setCustomUIWithConfigiOS({
						navColor:0xff000000,
						logBtnText:"极光认证测试",
						privacyState:true,
						appPrivacyColor:[0xff000200,0xff000000],
						addCustomViews:[{
								type:"label",
								width:120,
								height:20,
								top:320,
								left:100,
								backgroundColor:0xff7b68ee,
								text:"自定义label",
								textFont:20,
								textAlignment:15,
								numberOfLines:2,
								cornerRadius:10,
								textColor:0xff000000
							},
							{
								type:"button",
								id: "buttonTest",
								width:80,
								height:44,
								textColor:0xFFC0CB,
								cornerRadius:22,
								left:50,
								bottom: -100,
								title:"点击测试",
							},
							{
								type:"imageView",
								width:50,
								height:50,
								cornerRadius:25,
								right:-100,
								bottom: -100,
								imagePath:"static/qq.png"
							}]
					})
				}else{
					this.jv.addCustomViewsClickCallback(id=>{
						self.showModal('customViewclick',"id:"+id);
					});
					this.jv.setCustomUIWithConfigAndroid({
						setNavColor:0xff000000,
						setLogBtnText:" 极光认证测试 ",
						setPrivacyState:false,
						setAppPrivacyColor:[0xff00f000,0xff000000],
						addCustomViews:[{
							type:"text",
							finishFlag:false,
							id:"id1",
							width:100,
							height:50,
							text:"自定义tv",
							textSize:20,
							align:15,
							margins:[0,100,0,0],
							bgColor:0xff7b68ee
						},
						{
							type:"image",
							finishFlag:true,
							id:"id2",
							width:50,
							height:50,
							align:13,
							margins:[0,0,0,0],
							bgImgPath:"static/qq.png"
						}]
					})
				}
				
			},
			setCustomDialog:function(){
				if(uni.getSystemInfoSync().platform == "ios"){
					this.jv.setCustomUIWithConfigiOS({
						navCustom:true,
						autoLayout:true,
						showWindow:true,
						windowConstraints:[0,0,300,300],
						windowBackgroundAlpha: 0.3,
						//logo
						logoImg:"static/logo.png",
						logoConstraints:[0,-100,60,60],
						//number
						numberConstraints:[0,-42,200,14],
						//slogn
						sloganConstraints:[0,-20,200,14],
						//登录按钮
						logBtnConstraints:[0,20,220,40],
						logBtnText:"一键登录",
						logBtnTextColor:0x0000FF,
						windowCornerRadius:10,
						privacyConstraints:[0,100,200,40],
						checkViewConstraints:[-108,100,10,10],
						windowCloseBtnConstraints:[-135,-135,20,20],
						loadingConstraints:[0,0,20,20],
						windowCloseBtnImgs:["static/windowClose","static/windowClose"],
						windowBackgroundImage:"static/bg.jpeg"
					})
				}else{
					this.jv.setCustomUIWithConfigAndroid({
						setNavColor:0xff000000,
						setLogBtnText:" 极光认证测试 ",
						setPrivacyState:false,
						setAppPrivacyColor:[0xff00f000,0xff000000],
						setDialogTheme:[300, 400, 0, 0, false]
					})
				}
				
			},
			showModal:function(title,content){
				uni.showModal({
				    title,
				    content,
				});
				this.msg = `${title} :${content}`;
			},
			// 获取验证码
			getCode:function(){
				let self = this;
				self.jv.getCode({
					phoneNumber :  "18925241111", //在此替换你的phoneNumber
					signID : "1",             //在此替换你的signID
					templateID : "1"         //在此替换你的templateID
				},result=>{
					self.showModal('getCode',JSON.stringify(result));
				},event=>{
					console.log("getCodeEvent:"+JSON.stringify(event));
				})
			},
			// 设置前后两次获取验证码的时间间隔
			setTimeWithConfig:function(){
				this.jv.setTimeWithConfig(1000)
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 100rpx;
		margin-top: 20rpx;
	}
	.msg-box{
		display: flex;
	}
	.msg {
		font-size: 25rpx;
		word-break: break-all;
	}
		
	button{
		margin: 5rpx;
	}
	
</style>
