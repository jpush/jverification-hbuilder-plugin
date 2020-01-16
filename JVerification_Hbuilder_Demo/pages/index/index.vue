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
		<view class="msg-box" >
			<text class="msg">{{msg}}</text>
		</view>
	</view>
</template>

<script>
	const jv = uni.requireNativePlugin('JIGUANG-JVerification')
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
				if(uni.getSystemInfoSync().platform == "ios"){
					this.jv.setCustomUIWithConfigiOS({
						navColor:0xff000000,
						logBtnText:" 极光认证测试 ",
						privacyState:true,
						appPrivacyColor:[0xff000000,0xff000000]
					})
				}else{
					this.jv.setCustomUIWithConfigAndroid({
						setNavColor:0xff000000,
						setLogBtnText:" 极光认证测试 ",
						setPrivacyState:false,
						setAppPrivacyColor:[0xff00f000,0xff000000]
					})
				}
				
			},
			showModal:function(title,content){
				uni.showModal({
				    title,
				    content,
				});
				this.msg = `${title} :${content}`;
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
