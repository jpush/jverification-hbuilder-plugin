package cn.jiguang.uniplugin_jverification.common;

import android.content.Context;
import android.util.Log;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

public class CopyUtils {
    /**
     * 复制单个文件
     *
     * @param context Context 使用CopyFiles类的Activity
     * @param oldPath String  原文件路径  如：/aa
     * @param newPath String  复制后路径  如：xx:/bb/cc
     */
    public static void copyFile(Context context, String oldPath, String newPath) {
        InputStream in = null;
        try {
            File oldFile = new File(oldPath);
            in = new FileInputStream(oldFile);

            File file = new File(newPath);
            if (file.exists()) {
                file.delete();
            } else {
                file.getParentFile().mkdir();
            }

            FileOutputStream fos = new FileOutputStream(file);
            byte[] buffer = new byte[1024];
            int byteCount = 0;
            while ((byteCount = in.read(buffer)) != -1) {//循环从输入流读取 buffer字节
                fos.write(buffer, 0, byteCount);//将读取的输入流写入到输出流
            }
            Log.e("--Method--", oldPath);
            fos.flush();//刷新缓冲区

        } catch (Exception e) {
            JLogger.d(" --Method--error: " + oldPath);
            e.printStackTrace();
        } finally {
            if (in != null) {
                try {
                    in.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
