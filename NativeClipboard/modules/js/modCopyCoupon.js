function onTouchEndCouponCode(eventObj,x,y){
	var couponCode = eventObj.text;
	
	//#ifdef iphone
	var returnedValue = Copy2Clipboard.copy2ClipBoard(couponCode);
	//#endif
	
	//#ifdef android
	var Copy2ClipboardObject = new Copy2ClipboardAndroid.Copy2Clipboard();
	Copy2ClipboardAndroid.setTextToClipboard(couponCode);
	//#endif
	
	
	alert("couponCode :"+couponCode+" is copied");
		
		
}