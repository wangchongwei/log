package com.reactnativetestutilproject;

import android.os.Bundle;
import android.util.Log;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import cn.smssdk.EventHandler;
import cn.smssdk.SMSSDK;

public class MainActivity extends ReactActivity {

    // 发送短信成功
    private String messageSendSuccess = "SendMessageSuccess";
    // 验证短信成功
    private String messageVerificaSuccess = "VerificationMessageSuccess";
    // 验证码错误
    private String messageErr = "messageErr";

    // 接收和发送的回调
    private EventHandler eh = new EventHandler(){
        @Override
        public void afterEvent(int event, int result, Object data) {
            Log.d("======", "event = " + event);
            Log.d("======", "result = " + result);
            Log.d("======", data.toString());
            WritableMap map = new WritableNativeMap();
            if (result == SMSSDK.RESULT_COMPLETE) {
                //回调完成
                if (event == SMSSDK.EVENT_SUBMIT_VERIFICATION_CODE) {
                    //提交验证码成功
                    sendEvent(messageVerificaSuccess, map);
                }else if (event == SMSSDK.EVENT_GET_VERIFICATION_CODE){
                    //获取验证码成功
                    sendEvent(messageSendSuccess, map);
                }else if (event ==SMSSDK.EVENT_GET_SUPPORTED_COUNTRIES){
                    //返回支持发送验证码的国家列表
                }
            }else{
                ((Throwable)data).printStackTrace();
                sendEvent(messageErr, map);
            }
        }
    };







    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ReactNativeTestUtilProject";
    }


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        SMSSDK.registerEventHandler(eh);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        // 当Activity被摧毁时，要取消SMSSDK的绑定
        SMSSDK.unregisterEventHandler(eh);
    }

    /**
     * 原生向js端发送事件
     * @param eventName
     * @param paramss
     */
    public void sendEvent(String eventName, WritableMap paramss)
    {
        Log.d("=======", "sendEvent");
        ReactContext context = this.getReactNativeHost().getReactInstanceManager().getCurrentReactContext();
        if(context != null) {
            context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit(eventName, paramss);
        } else {
            Log.d("=====", "context == null");
        }
    }
}
