function onTouchEndCouponCode(eventObj, x, y) {
    var couponCode = eventObj.text;
    var Copy2ClipboardObject = new ffi.Copy2Clipboard();
    ffi.setTextToClipboard(couponCode);
    alert("couponCode :" + couponCode + " is copied");
}