package com.reactnativetestutilproject;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.List;

/**
 * An example full-screen activity that shows and hides the system UI (i.e.
 * status bar and navigation/system bar) with user interaction.
 */
public class PermissionActivity extends AppCompatActivity {

    // 权限请求码
    private final int REQUEST_PERMISSION_CODE = 250;

    // 要请求的所有权限数组
    private String[] permissionArray;

    // 未授权的权限list
    private List<String> permissionList = new ArrayList<String>();

    // 跳入到main主页的状态码
    private final int JUMP_TO_MAIN = 108;

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_permission);

        init();

        checkRequirePermission();
    }

    // 数据初始化
    private void init() {
        permissionArray = new String[]{
                Manifest.permission.WRITE_EXTERNAL_STORAGE,
                Manifest.permission.READ_PHONE_STATE,
        };
    }

    // 检测是否已有该权限
    private void checkRequirePermission() {
        for (String permission : permissionArray) {
            if (ContextCompat.checkSelfPermission(this, permission) != PackageManager.PERMISSION_GRANTED) {
                permissionList.add(permission);
            }
        }
        if (permissionList.size() > 0) {
            ActivityCompat.requestPermissions(this, permissionList.toArray(new String[permissionList.size()]),
                    REQUEST_PERMISSION_CODE);
        } else {

            jumpToMain();
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        switch (requestCode) {
            case REQUEST_PERMISSION_CODE:
                for (int i = 0; i < permissions.length; i++) {
                    if (grantResults[i] == PackageManager.PERMISSION_GRANTED) {
                        jumpToMain();
                    } else {
                        Toast.makeText(PermissionActivity.this, "未授予"+permissions[i], Toast.LENGTH_SHORT).show();
                        jumpToMain();
                    }
                }
                break;

            default:
                super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        }
    }

    // 跳入到main主页
    private void jumpToMain() {
        Intent i = new Intent(PermissionActivity.this, MainActivity.class);
        startActivityForResult(i, JUMP_TO_MAIN);
    }

    // 从mainback回该页时
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        switch (requestCode) {
            case JUMP_TO_MAIN:
                finish();
                break;

            default:
                super.onActivityResult(requestCode, resultCode, data);
        }
    }
}
