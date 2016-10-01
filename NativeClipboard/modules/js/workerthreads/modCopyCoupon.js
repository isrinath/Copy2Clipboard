function onTouchEndCouponCode(eventObj,x,y){
	var couponCode = this.text;
	
	var returnedValue = Copy2Clipboard.copy2ClipBoard(couponCode);
	
	alert("couponCode :"+couponCode+" is copied");
		
		
}