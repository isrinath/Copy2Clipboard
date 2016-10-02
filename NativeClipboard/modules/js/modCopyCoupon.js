function onTouchEndCouponCode(eventObj,x,y){
	var couponCode = eventObj.text;
	
	//#ifdef iphone
	var returnedValue = Copy2Clipboard.copy2ClipBoard(couponCode);
	//#endif
	
	//#ifdef android
	var Copy2ClipboardObject = new ffi.Copy2Clipboard();
	ffi.setTextToClipboard(couponCode);
	//#endif
	
	
	alert("couponCode :"+couponCode+" is copied");
		
		
}