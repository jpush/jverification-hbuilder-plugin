<template>
	<view class="content">
		<button type="primary" @click="debug">设置debug模式</button>
		<button type="primary" @click="init">初始化</button>
		<button type="primary" @click="initTimeOut">初始化设置超时</button>
		<button type="primary" @click="isInitSuccess">初始化是否成功</button>
		<button type="primary" @click="checkVerifyEnable">是否支持验证</button>
		<button type="primary" @click="getToken">获取token</button>
		<button type="primary" @click="preLogin">preLogin</button>
		<button type="primary" @click="clearPreLoginCache">clearPreLoginCache</button>
		<button type="primary" @click="loginAuth">loginAuth</button>
		<button type="primary" @click="setCustomUIWithConfig">setCustomUIWithConfig</button>
		<view class="token-box" >
			<text class="token">{{token}}</text>
		</view>
	</view>
</template>

<script>
	const jv = uni.requireNativePlugin('JIGUANG-JVerification')
	export default {
		data() {
			return {
				title: 'Hello',
				token: "",
				jv
			}
		},
		onLoad() {
		},
		methods: {
			onClick:()=>{
				const dcRichAlert = uni.requireNativePlugin('DCloud-RichAlert')
				dcRichAlert.show({
				     position: 'bottom',
				     title: "提示信息",
				     titleColor: '#FF0000',
				     content: "<a href='https://uniapp.dcloud.io/' value='Hello uni-app'>uni-app</a> 是一个使用 Vue.js 开发跨平台应用的前端框架!\n免费的\n免费的\n免费的\n重要的事情说三遍",
				     contentAlign: 'left',
				     checkBox: {
				         title: '不再提示',
				         isSelected: true
				     },
				     buttons: [{
				         title: '取消'
				     }, {
				         title: '否'
				     }, {
				         title: '确认',
				         titleColor: '#3F51B5'
				     }]
				}, result => {
				     console.log(result)
				});
			},
			// 设置 debug 模式
			debug:function(){
				this.jv.setDebugMode(true);
			},
			// 初始化
			init:function(){
				let self = this;
				self.jv.init(result=>{
					self.showModal('init',JSON.stringify(result));
				});
			},
			// 自定义超时时间的初始化，单位ms
			initTimeOut:function(){
				let self = this;
				self.jv.initTimeOut(6000,result=>{
					self.showModal('initTimeOut',JSON.stringify(result));
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
					if(result.code == 2000){
						self.token = "token = "+result.content;
					}else{
						self.token = `[${result.code}]message=${result.content}`;
					}
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
					timeOut:5000
				},result=>{
					self.showModal('preLogin',JSON.stringify(result));
				},event=>{
					console.log("preLoginevent:"+JSON.stringify(event));
				})
			},
			// 自定义授权页面 UI 样式
			setCustomUIWithConfig:function(){
				this.jv.setCustomUIWithConfig({
					navColor:0xff000000,
					logBtnText:" 登录 HbuilderDemo",
					appPrivacyColor:[0xff000000,0xff000000]
				})
			},
			showModal:function(title,content){
				uni.showModal({
				    title,
				    content,
				});
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
	.token-box{
		display: flex;
	}
	.token {
		font-size: 25rpx;
		word-break: break-all;
	}
		
	button{
		margin: 5rpx;
	}
	
</style>
