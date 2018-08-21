package com.reactnativetestutilproject.mobsms;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import cn.smssdk.SMSSDK;

/**
 * Created by ccJust on 2018/8/17.
 */

public class MobSmsModule extends ReactContextBaseJavaModule {
    /** 模块名 */
    private String moduleName = "MobSMS";






    public MobSmsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }


    @Override
    public String getName() {
        return moduleName;
    }

    /**
     * 请求验证码
     * @param phoneNumber
     */
    @ReactMethod
    public void requestCheckCode(String phoneNumber){
        Log.d("====", phoneNumber);
        // 86 代表国家代号
        SMSSDK.getVerificationCode("86", phoneNumber);
    }

    /**
     * 对验证码进行验证
     * @param code
     * @param phoneNumber
     */
    @ReactMethod
    public void verificationCode(String code, String phoneNumber){
        Log.d("====", phoneNumber);
        SMSSDK.submitVerificationCode("86", phoneNumber, code);
    }





}
