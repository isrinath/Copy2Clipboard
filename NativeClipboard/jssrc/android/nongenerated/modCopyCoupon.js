function onTouchEndCouponCode(eventObj, x, y) {
    var couponCode = eventObj.text;
    var Copy2ClipboardObject = new Copy2ClipboardAndroid.Copy2Clipboard();
    Copy2ClipboardAndroid.setTextToClipboard(couponCode);
    alert("couponCode :" + couponCode + " is copied");
}