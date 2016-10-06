package com.digibank.ce.clipboard;

import com.konylabs.android.KonyMain;

import android.app.Activity;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.util.Log;

public class Copy2Clipboard extends Activity {
	public Copy2Clipboard(){
		
	}
	public static void setTextToClipboard(String input) {
		Context context = KonyMain.getActivityContext();
		ClipboardManager clipboard = (ClipboardManager) context.getSystemService(CLIPBOARD_SERVICE);
		ClipData clip = ClipData.newPlainText("coupon code", input);
		Log.d("###########Copy2Clipboard###########", "coupon code recieved in FFI is "+input);
		Log.d("###########Copy2Clipboard###########", "ClipboardManager obj is "+clipboard);
		Log.d("###########Copy2Clipboard###########", "ClipData obj is "+clip);
		clipboard.setPrimaryClip(clip);
	}
}
