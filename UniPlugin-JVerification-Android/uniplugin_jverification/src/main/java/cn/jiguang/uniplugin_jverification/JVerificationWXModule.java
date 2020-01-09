package cn.jiguang.uniplugin_jverification;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;


import cn.jiguang.uniplugin_jverification.common.JConstants;
import cn.jiguang.uniplugin_jverification.common.JLogger;
import cn.jiguang.verifysdk.api.AuthPageEventListener;
import cn.jiguang.verifysdk.api.JVerificationInterface;
import cn.jiguang.verifysdk.api.JVerifyUIConfig;
import cn.jiguang.verifysdk.api.LoginSettings;
import cn.jiguang.verifysdk.api.PreLoginListener;
import cn.jiguang.verifysdk.api.RequestCallback;
import cn.jiguang.verifysdk.api.VerifyListener;

public class JVerificationWXModule extends WXSDKEngine.DestroyableModule {

    @JSMethod(uiThread = true)
    public void setDebugMode(boolean enable) {
        JVerificationInterface.setDebugMode(enable);
        JLogger.setLoggerEnable(enable);

    }

    @JSMethod(uiThread = true)
    public void init(final JSCallback jsCallback) {
        JLogger.d("init");
        JVerificationInterface.init(mWXSDKInstance.getContext().getApplicationContext(), new RequestCallback<String>() {
            @Override
            public void onResult(int code, String content) {
                if (jsCallback == null) return;
                jsCallback.invoke(convertToResult(code, content));
            }
        });
    }

    @JSMethod(uiThread = true)
    public void initTimeOut(int time, final JSCallback jsCallback) {
        JLogger.d("init with timeout set:" + time);
        JVerificationInterface.init(mWXSDKInstance.getContext().getApplicationContext(), time, new RequestCallback<String>() {
            @Override
            public void onResult(int code, String content) {
                if (jsCallback == null) return;
                jsCallback.invoke(convertToResult(code, content));
            }
        });
    }


    @JSMethod(uiThread = true)
    public void isInitSuccess(JSCallback callback) {
        boolean succ =JVerificationInterface.isInitSuccess();
        JLogger.d("isInitSuccess:" + succ);
        if (callback == null) return;
        callback.invoke(convertToResult(succ));
    }

    @JSMethod(uiThread = true)
    public void checkVerifyEnable(JSCallback callback) {
        boolean enable =JVerificationInterface.checkVerifyEnable(mWXSDKInstance.getContext());
        JLogger.d("checkVerifyEnable:" + enable);
        if (callback == null) return;
        callback.invoke(convertToResult(enable));
    }

    @JSMethod(uiThread = true)
    public void getToken(int time, final JSCallback callback) {
        JLogger.d("getToken with time set:" + time);
        JVerificationInterface.getToken(mWXSDKInstance.getContext(), time, new VerifyListener() {
            @Override
            public void onResult(int code, String content, String operator) {
                if (callback == null) return;
                callback.invoke(convertToResult(code, content, operator));
            }
        });
    }

    @JSMethod(uiThread = true)
    public void preLogin(int time, final JSCallback callback) {
        JLogger.d("preLogin with time set:" + time);
        JVerificationInterface.preLogin(mWXSDKInstance.getContext(), time, new PreLoginListener() {
            @Override
            public void onResult(int code, String content) {
                if (callback == null) return;
                callback.invoke(convertToResult(code, content));
            }
        });
    }

    @JSMethod(uiThread = true)
    public void clearPreLoginCache() {
        JLogger.d("clearPreLoginCache");
        JVerificationInterface.clearPreLoginCache();
    }

    @JSMethod(uiThread = true)
    public void loginAuth(JSONObject object, final JSCallback callback, final JSCallback eventCallback) {
        int timeout = 10000;
        boolean autoFinish = true;
        if (object != null) {
            timeout = object.containsKey(JConstants.TIME_OUT) ? object.getIntValue(JConstants.TIME_OUT) : 10000;
            autoFinish = object.containsKey(JConstants.AUTO_FINISH) ? object.getBooleanValue(JConstants.AUTO_FINISH) : true;
        }
        JLogger.d("loginAuth with setting autoFinish:" + autoFinish + " timeOut:" + timeout);
        LoginSettings settings = new LoginSettings();
        settings.setAutoFinish(autoFinish);//设置登录完成后是否自动关闭授权页
        settings.setTimeout(timeout);//设置超时时间，单位毫秒。 合法范围（0，30000],范围以外默认设置为10000

        settings.setAuthPageEventListener(new AuthPageEventListener() {
            @Override
            public void onEvent(int cmd, String msg) {
                eventCallback.invokeAndKeepAlive(convertToResult(cmd, msg));
            }
        });//设置授权页事件监听
        JVerificationInterface.loginAuth(mWXSDKInstance.getContext(), settings, new VerifyListener() {
            @Override
            public void onResult(int code, String content, String operator) {
                callback.invoke(convertToResult(code, content, operator));
            }
        });
    }

    @JSMethod(uiThread = true)
    public void dismissLoginAuth() {
        JLogger.d("dismissLoginAuth");
        JVerificationInterface.dismissLoginAuthActivity();
    }

    @JSMethod(uiThread = true)
    public void dismissLoginAuthFinish(boolean autoFinish, final JSCallback callback) {
        JLogger.d("dismissLoginAuthFinish:"+autoFinish);
        JVerificationInterface.dismissLoginAuthActivity(autoFinish, new RequestCallback<String>() {
            @Override
            public void onResult(int code, String desc) {
                callback.invoke(convertToResult(code, desc));
            }
        });
    }


    @JSMethod(uiThread = true)
    public void setCustomUIWithConfig(JSONObject data) {
        JLogger.d("setCustomUIWithConfig");
        JVerifyUIConfig.Builder uiConfigPortrait = getBuilder(data);
        JVerificationInterface.setCustomUIWithConfig(uiConfigPortrait.build());
    }

    @JSMethod(uiThread = true)
    public void setCustomUIWithConfigAndroid(JSONObject jsonObjectPortrait, JSONObject jsonObjectLandscape) {
        JLogger.d("setCustomUIWithConfigAndroid");
        JVerifyUIConfig.Builder uiConfigPortrait = getBuilder(jsonObjectPortrait);
        JVerifyUIConfig.Builder uiConfigLandscape = getBuilder(jsonObjectLandscape);
        JVerificationInterface.setCustomUIWithConfig(uiConfigPortrait.build(), uiConfigLandscape.build());
    }


    private JVerifyUIConfig.Builder getBuilder(JSONObject jsonObject) {

        JVerifyUIConfig.Builder uiConfigBuilder = new JVerifyUIConfig.Builder();
        setUiConfig(uiConfigBuilder, jsonObject);
        return uiConfigBuilder;
    }

    private void setUiConfig(JVerifyUIConfig.Builder uiConfigBuilder, JSONObject jsonObject) {
        //  设置授权页背景
        if (jsonObject.containsKey(JConstants.AuthBGImgPath)) {
            uiConfigBuilder.setAuthBGImgPath(jsonObject.getString(JConstants.AuthBGImgPath));
        }
        // 状态栏
        if (jsonObject.containsKey(JConstants.StatusBarColorWithNav)) {
            uiConfigBuilder.setStatusBarColorWithNav(jsonObject.getBooleanValue(JConstants.StatusBarColorWithNav));
        }
        if (jsonObject.containsKey(JConstants.StatusBarDarkMode)) {
            uiConfigBuilder.setStatusBarDarkMode(jsonObject.getBooleanValue(JConstants.StatusBarDarkMode));
        }
        if (jsonObject.containsKey(JConstants.StatusBarTransparent)) {
            uiConfigBuilder.setStatusBarTransparent(jsonObject.getBooleanValue(JConstants.StatusBarTransparent));
        }
        if (jsonObject.containsKey(JConstants.StatusBarHidden)) {
            uiConfigBuilder.setStatusBarHidden(jsonObject.getBooleanValue(JConstants.StatusBarHidden));
        }
        if (jsonObject.containsKey(JConstants.VirtualButtonTransparent)) {
            uiConfigBuilder.setVirtualButtonTransparent(jsonObject.getBooleanValue(JConstants.VirtualButtonTransparent));
        }
        //  授权页导航栏
        if (jsonObject.containsKey(JConstants.NavColor)) {
            uiConfigBuilder.setNavColor(jsonObject.getIntValue(JConstants.NavColor));
        }
        if (jsonObject.containsKey(JConstants.NavText)) {
            uiConfigBuilder.setNavText(jsonObject.getString(JConstants.NavText));
        }
        if (jsonObject.containsKey(JConstants.NavTextColor)) {
            uiConfigBuilder.setNavTextColor(jsonObject.getIntValue(JConstants.NavTextColor));
        }
        if (jsonObject.containsKey(JConstants.NavReturnImgPath)) {
            uiConfigBuilder.setNavReturnImgPath(jsonObject.getString(JConstants.NavReturnImgPath));
        }
        if (jsonObject.containsKey(JConstants.NavTransparent)) {
            uiConfigBuilder.setNavTransparent(jsonObject.getBooleanValue(JConstants.NavTransparent));
        }
        if (jsonObject.containsKey(JConstants.NavTextSize)) {
            uiConfigBuilder.setNavTextSize(jsonObject.getIntValue(JConstants.NavTextSize));
        }
        if (jsonObject.containsKey(JConstants.NavReturnBtnHidden)) {
            uiConfigBuilder.setNavReturnBtnHidden(jsonObject.getBooleanValue(JConstants.NavReturnBtnHidden));
        }
        if (jsonObject.containsKey(JConstants.NavReturnBtnWidth)) {
            uiConfigBuilder.setNavReturnBtnWidth(jsonObject.getIntValue(JConstants.NavReturnBtnWidth));
        }
        if (jsonObject.containsKey(JConstants.NavReturnBtnHeight)) {
            uiConfigBuilder.setNavReturnBtnHeight(jsonObject.getIntValue(JConstants.NavReturnBtnHeight));
        }
        if (jsonObject.containsKey(JConstants.NavReturnBtnOffsetX)) {
            uiConfigBuilder.setNavReturnBtnOffsetX(jsonObject.getIntValue(JConstants.NavReturnBtnOffsetX));
        }
        if (jsonObject.containsKey(JConstants.NavReturnBtnRightOffsetX)) {
            uiConfigBuilder.setNavReturnBtnRightOffsetX(jsonObject.getIntValue(JConstants.NavReturnBtnRightOffsetX));
        }
        if (jsonObject.containsKey(JConstants.NavReturnBtnOffsetY)) {
            uiConfigBuilder.setNavReturnBtnOffsetY(jsonObject.getIntValue(JConstants.NavReturnBtnOffsetY));
        }
        if (jsonObject.containsKey(JConstants.NavHidden)) {
            uiConfigBuilder.setNavHidden(jsonObject.getBooleanValue(JConstants.NavHidden));
        }

        //  授权页logo
        if (jsonObject.containsKey(JConstants.LogoWidth)) {
            uiConfigBuilder.setLogoWidth(jsonObject.getIntValue(JConstants.LogoWidth));
        }
        if (jsonObject.containsKey(JConstants.LogoHeight)) {
            uiConfigBuilder.setLogoHeight(jsonObject.getIntValue(JConstants.LogoHeight));
        }
        if (jsonObject.containsKey(JConstants.LogoHidden)) {
            uiConfigBuilder.setLogoHidden(jsonObject.getBooleanValue(JConstants.LogoHidden));
        }
        if (jsonObject.containsKey(JConstants.LogoOffsetY)) {
            uiConfigBuilder.setLogoOffsetY(jsonObject.getIntValue(JConstants.LogoOffsetY));
        }
        if (jsonObject.containsKey(JConstants.LogoImgPath)) {
            uiConfigBuilder.setLogoImgPath(jsonObject.getString(JConstants.LogoImgPath));
        }
        if (jsonObject.containsKey(JConstants.LogoOffsetX)) {
            uiConfigBuilder.setLogoOffsetX(jsonObject.getIntValue(JConstants.LogoOffsetX));
        }
        if (jsonObject.containsKey(JConstants.LogoOffsetBottomY)) {
            uiConfigBuilder.setLogoOffsetBottomY(jsonObject.getIntValue(JConstants.LogoOffsetBottomY));
        }

        //  授权页号码栏
        if (jsonObject.containsKey(JConstants.NumberColor)) {
            uiConfigBuilder.setNumberColor(jsonObject.getIntValue(JConstants.NumberColor));
        }
        if (jsonObject.containsKey(JConstants.NumberSize)) {
            uiConfigBuilder.setNumberSize(jsonObject.getIntValue(JConstants.NumberSize));
        }
        if (jsonObject.containsKey(JConstants.NumFieldOffsetY)) {
            uiConfigBuilder.setNumFieldOffsetY(jsonObject.getIntValue(JConstants.NumFieldOffsetY));
        }
        if (jsonObject.containsKey(JConstants.NumFieldOffsetX)) {
            uiConfigBuilder.setNumFieldOffsetX(jsonObject.getIntValue(JConstants.NumFieldOffsetX));
        }
        if (jsonObject.containsKey(JConstants.NumberFieldOffsetBottomY)) {
            uiConfigBuilder.setNumberFieldOffsetBottomY(jsonObject.getIntValue(JConstants.NumberFieldOffsetBottomY));
        }
        if (jsonObject.containsKey(JConstants.NumberFieldWidth)) {
            uiConfigBuilder.setNumberFieldWidth(jsonObject.getIntValue(JConstants.NumberFieldWidth));
        }
        if (jsonObject.containsKey(JConstants.NumberFieldHeight)) {
            uiConfigBuilder.setNumberFieldHeight(jsonObject.getIntValue(JConstants.NumberFieldHeight));
        }


        //  授权页登录按钮
        if (jsonObject.containsKey(JConstants.LogBtnText)) {
            uiConfigBuilder.setLogBtnText(jsonObject.getString(JConstants.LogBtnText));
        }
        if (jsonObject.containsKey(JConstants.LogBtnTextColor)) {
            uiConfigBuilder.setLogBtnTextColor(jsonObject.getIntValue(JConstants.LogBtnTextColor));
        }
        if (jsonObject.containsKey(JConstants.LogBtnImgPath)) {
            uiConfigBuilder.setLogBtnImgPath(jsonObject.getString(JConstants.LogBtnImgPath));
        }
        if (jsonObject.containsKey(JConstants.LogBtnOffsetY)) {
            uiConfigBuilder.setLogBtnOffsetY(jsonObject.getIntValue(JConstants.LogBtnOffsetY));
        }
        if (jsonObject.containsKey(JConstants.LogBtnOffsetX)) {
            uiConfigBuilder.setLogBtnOffsetX(jsonObject.getIntValue(JConstants.LogBtnOffsetX));
        }
        if (jsonObject.containsKey(JConstants.LogBtnWidth)) {
            uiConfigBuilder.setLogBtnWidth(jsonObject.getIntValue(JConstants.LogBtnWidth));
        }
        if (jsonObject.containsKey(JConstants.LogBtnHeight)) {
            uiConfigBuilder.setLogBtnHeight(jsonObject.getIntValue(JConstants.LogBtnHeight));
        }
        if (jsonObject.containsKey(JConstants.LogBtnTextSize)) {
            uiConfigBuilder.setLogBtnTextSize(jsonObject.getIntValue(JConstants.LogBtnTextSize));
        }
        if (jsonObject.containsKey(JConstants.LogBtnBottomOffsetY)) {
            uiConfigBuilder.setLogBtnBottomOffsetY(jsonObject.getIntValue(JConstants.LogBtnBottomOffsetY));
        }

        //  授权页隐私栏
        if (jsonObject.containsKey(JConstants.AppPrivacyOne)) {
            JSONArray jsonArraySetAppPrivacyOne = jsonObject.getJSONArray(JConstants.AppPrivacyOne);
            uiConfigBuilder.setAppPrivacyOne(jsonArraySetAppPrivacyOne.getString(0), jsonArraySetAppPrivacyOne.getString(1));
        }
        if (jsonObject.containsKey(JConstants.AppPrivacyTwo)) {
            JSONArray jsonArraySetAppPrivacyTwo = jsonObject.getJSONArray(JConstants.AppPrivacyTwo);
            uiConfigBuilder.setAppPrivacyTwo(jsonArraySetAppPrivacyTwo.getString(0), jsonArraySetAppPrivacyTwo.getString(1));
        }
        if (jsonObject.containsKey(JConstants.AppPrivacyColor)) {
            JSONArray jsonArraySetAppPrivacyColor = jsonObject.getJSONArray(JConstants.AppPrivacyColor);
            uiConfigBuilder.setAppPrivacyColor(jsonArraySetAppPrivacyColor.getIntValue(0), jsonArraySetAppPrivacyColor.getIntValue(1));
        }
        if (jsonObject.containsKey(JConstants.PrivacyOffsetY)) {
            uiConfigBuilder.setPrivacyOffsetY(jsonObject.getIntValue(JConstants.PrivacyOffsetY));
        }
        if (jsonObject.containsKey(JConstants.CheckedImgPath)) {
            uiConfigBuilder.setCheckedImgPath(jsonObject.getString(JConstants.CheckedImgPath));
        }
        if (jsonObject.containsKey(JConstants.UncheckedImgPath)) {
            uiConfigBuilder.setUncheckedImgPath(jsonObject.getString(JConstants.UncheckedImgPath));
        }
        if (jsonObject.containsKey(JConstants.PrivacyState)) {
            uiConfigBuilder.setPrivacyState(jsonObject.getBooleanValue(JConstants.PrivacyState));
        }
        if (jsonObject.containsKey(JConstants.PrivacyOffsetX)) {
            uiConfigBuilder.setPrivacyOffsetX(jsonObject.getIntValue(JConstants.PrivacyOffsetX));
        }
        if (jsonObject.containsKey(JConstants.PrivacyTextCenterGravity)) {
            uiConfigBuilder.setPrivacyTextCenterGravity(jsonObject.getBooleanValue(JConstants.PrivacyTextCenterGravity));
        }
        if (jsonObject.containsKey(JConstants.PrivacyText)) {
            JSONArray jsonArray = jsonObject.getJSONArray(JConstants.PrivacyText);
            uiConfigBuilder.setPrivacyText(jsonArray.getString(0), jsonArray.getString(1), jsonArray.getString(2), jsonArray.getString(3));
        }
        if (jsonObject.containsKey(JConstants.PrivacyTextSize)) {
            uiConfigBuilder.setPrivacyTextSize(jsonObject.getIntValue(JConstants.PrivacyTextSize));
        }
        if (jsonObject.containsKey(JConstants.PrivacyTopOffsetY)) {
            uiConfigBuilder.setPrivacyTopOffsetY(jsonObject.getIntValue(JConstants.PrivacyTopOffsetY));
        }
        if (jsonObject.containsKey(JConstants.PrivacyCheckboxHidden)) {
            uiConfigBuilder.setPrivacyCheckboxHidden(jsonObject.getBooleanValue(JConstants.PrivacyCheckboxHidden));
        }
        if (jsonObject.containsKey(JConstants.PrivacyCheckboxSize)) {
            uiConfigBuilder.setPrivacyCheckboxSize(jsonObject.getIntValue(JConstants.PrivacyCheckboxSize));
        }
        if (jsonObject.containsKey(JConstants.PrivacyWithBookTitleMark)) {
            uiConfigBuilder.setPrivacyWithBookTitleMark(jsonObject.getBooleanValue(JConstants.PrivacyWithBookTitleMark));
        }
        if (jsonObject.containsKey(JConstants.PrivacyCheckboxInCenter)) {
            uiConfigBuilder.setPrivacyCheckboxInCenter(jsonObject.getBooleanValue(JConstants.PrivacyCheckboxInCenter));
        }
        if (jsonObject.containsKey(JConstants.PrivacyTextWidth)) {
            uiConfigBuilder.setPrivacyTextWidth(jsonObject.getIntValue(JConstants.PrivacyTextWidth));
        }

        //  授权页隐私协议web页面
        if (jsonObject.containsKey(JConstants.PrivacyNavColor)) {
            uiConfigBuilder.setPrivacyNavColor(jsonObject.getIntValue(JConstants.PrivacyNavColor));
        }
        if (jsonObject.containsKey(JConstants.PrivacyNavTitleTextColor)) {
            uiConfigBuilder.setPrivacyNavTitleTextColor(jsonObject.getIntValue(JConstants.PrivacyNavTitleTextColor));
        }
        if (jsonObject.containsKey(JConstants.PrivacyNavTitleTextSize)) {
            uiConfigBuilder.setPrivacyNavTitleTextSize(jsonObject.getIntValue(JConstants.PrivacyNavTitleTextSize));
        }
        if (jsonObject.containsKey(JConstants.AppPrivacyNavTitle1)) {
            uiConfigBuilder.setAppPrivacyNavTitle1(jsonObject.getString(JConstants.AppPrivacyNavTitle1));
        }
        if (jsonObject.containsKey(JConstants.AppPrivacyNavTitle2)) {
            uiConfigBuilder.setAppPrivacyNavTitle2(jsonObject.getString(JConstants.AppPrivacyNavTitle2));
        }
        if (jsonObject.containsKey(JConstants.PrivacyStatusBarColorWithNav)) {
            uiConfigBuilder.setPrivacyStatusBarColorWithNav(jsonObject.getBooleanValue(JConstants.PrivacyStatusBarColorWithNav));
        }
        if (jsonObject.containsKey(JConstants.PrivacyStatusBarDarkMode)) {
            uiConfigBuilder.setPrivacyStatusBarDarkMode(jsonObject.getBooleanValue(JConstants.PrivacyStatusBarDarkMode));
        }
        if (jsonObject.containsKey(JConstants.PrivacyStatusBarTransparent)) {
            uiConfigBuilder.setPrivacyStatusBarTransparent(jsonObject.getBooleanValue(JConstants.PrivacyStatusBarTransparent));
        }
        if (jsonObject.containsKey(JConstants.PrivacyStatusBarHidden)) {
            uiConfigBuilder.setPrivacyStatusBarHidden(jsonObject.getBooleanValue(JConstants.PrivacyStatusBarHidden));
        }
        if (jsonObject.containsKey(JConstants.PrivacyVirtualButtonTransparent)) {
            uiConfigBuilder.setPrivacyVirtualButtonTransparent(jsonObject.getBooleanValue(JConstants.PrivacyVirtualButtonTransparent));
        }

        //  授权页slogan
        if (jsonObject.containsKey(JConstants.SloganTextColor)) {
            uiConfigBuilder.setSloganTextColor(jsonObject.getIntValue(JConstants.SloganTextColor));
        }
        if (jsonObject.containsKey(JConstants.SloganOffsetY)) {
            uiConfigBuilder.setSloganOffsetY(jsonObject.getIntValue(JConstants.SloganOffsetY));
        }
        if (jsonObject.containsKey(JConstants.SloganOffsetX)) {
            uiConfigBuilder.setSloganOffsetX(jsonObject.getIntValue(JConstants.SloganOffsetX));
        }
        if (jsonObject.containsKey(JConstants.SloganBottomOffsetY)) {
            uiConfigBuilder.setSloganBottomOffsetY(jsonObject.getIntValue(JConstants.SloganBottomOffsetY));
        }
        if (jsonObject.containsKey(JConstants.SloganTextSize)) {
            uiConfigBuilder.setSloganTextSize(jsonObject.getIntValue(JConstants.SloganTextSize));
        }
        if (jsonObject.containsKey(JConstants.SloganHidden)) {
            uiConfigBuilder.setSloganHidden(jsonObject.getBooleanValue(JConstants.SloganHidden));
        }
        //  授权页动画
        if (jsonObject.containsKey(JConstants.NeedStartAnim)) {
            uiConfigBuilder.setNeedStartAnim(jsonObject.getBooleanValue(JConstants.NeedStartAnim));
        }
        if (jsonObject.containsKey(JConstants.NeedCloseAnim)) {
            uiConfigBuilder.setNeedCloseAnim(jsonObject.getBooleanValue(JConstants.NeedCloseAnim));
        }
        //  授权页弹窗模式 setDialogTheme
        if (jsonObject.containsKey(JConstants.DialogTheme)) {
            JSONArray jsonArray = jsonObject.getJSONArray(JConstants.DialogTheme);
            uiConfigBuilder.setDialogTheme(jsonArray.getIntValue(0), jsonArray.getIntValue(1),
                    jsonArray.getIntValue(2), jsonArray.getIntValue(3), jsonArray.getBooleanValue(4));
        }
    }

    private JSONObject convertToResult(boolean enable) {
        JSONObject result = new JSONObject();
        result.put(JConstants.CODE, 2000);
        result.put(JConstants.CONTENT, enable);
        return result;
    }

    private JSONObject convertToResult(int code, String content) {
        JSONObject result = new JSONObject();
        result.put(JConstants.CODE, code);
        result.put(JConstants.CONTENT, content);
        return result;
    }

    private JSONObject convertToResult(int code, String content, String operator) {
        JSONObject result = new JSONObject();
        result.put(JConstants.CODE, code);
        result.put(JConstants.CONTENT, content);
        result.put(JConstants.OPERATOR, operator);
        return result;
    }

    @Override
    public void destroy() {

    }
}
