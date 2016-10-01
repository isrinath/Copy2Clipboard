//Form JS File
function frmCopyCoupon_lblCoupon_onTouchEnd_seq0(eventobject, x, y, contextInfo) {
    var couponCode = this.text;
    var returnedValue = Copy2Clipboard.copy2ClipBoard(couponCode);
    alert("couponCode :" + couponCode + " is copied");
};

function frmCopyCoupon_button1402587729821_onClick_seq0(eventobject) {
    frmCopyCoupon.lblCoupon.text = frmCopyCoupon.textbox21402587729820.text
};

function frmCopyCoupon_label1402587729829_onTouchEnd_seq0(eventobject, x, y, contextInfo) {
    var couponCode = this.text;
    var returnedValue = Copy2Clipboard.copy2ClipBoard(couponCode);
    alert("couponCode :" + couponCode + " is copied");
};

function addWidgetsfrmCopyCoupon() {
    var lblCoupon = new kony.ui.Label({
        "id": "lblCoupon",
        "top": "50dp",
        "left": "0dp",
        "width": "100%",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "S2XYSWSS",
        "onTouchEnd": frmCopyCoupon_lblCoupon_onTouchEnd_seq0,
        "skin": "sknCoupon"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var textbox21402587729820 = new kony.ui.TextBox2({
        "id": "textbox21402587729820",
        "top": "120dp",
        "left": "0dp",
        "width": "100%",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "TextBox2",
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTxt",
        "focusSkin": "sknTxt"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "leftViewImage": null,
        "showClearButton": true,
        "showProgressIndicator": true,
        "showCloseButton": true,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false
    });
    var button1402587729821 = new kony.ui.Button({
        "id": "button1402587729821",
        "top": "200dp",
        "left": "81dp",
        "width": "260dp",
        "height": "50dp",
        "centerX": "50.0%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Click to change coupon code",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmCopyCoupon_button1402587729821_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var label1402587729829 = new kony.ui.Label({
        "id": "label1402587729829",
        "top": "31dp",
        "left": "0dp",
        "width": "100%",
        "height": "19dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Click below to copy code",
        "onTouchEnd": frmCopyCoupon_label1402587729829_onTouchEnd_seq0,
        "skin": "skn"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmCopyCoupon.add(lblCoupon, textbox21402587729820, button1402587729821, label1402587729829);
    frmCopyCoupon.setDefaultUnit(kony.flex.DP);
};

function frmCopyCouponGlobals() {
    var MenuId = [];
    frmCopyCoupon = new kony.ui.Form2({
        "id": "frmCopyCoupon",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmCopyCoupon
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "titleBar": false,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none",
            "transitionDuration": 0.3
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none",
            "transitionDuration": 0.3
        }
    });
};