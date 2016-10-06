function onTouchEndCouponCode(eventObj, x, y) {
    var couponCode = eventObj.text;
    var returnedValue = Copy2ClipboardiOS.setTextToClipboard(couponCode);
    alert("couponCode :" + couponCode + " is copied");
}