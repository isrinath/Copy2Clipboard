//Form JS File
function frmHome_button999296733482276_onClick_seq0(eventobject) {
    //Invokes function 'vibrating'
    Vibrate.vibrating();
};

function addWidgetsfrmHome() {
    var button999296733482276 = new kony.ui.Button({
        "id": "button999296733482276",
        "top": "125dp",
        "left": "252dp",
        "width": "260dp",
        "height": "50dp",
        "centerX": "50%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Vibrate Device",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button999296733482276_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    frmHome.add(
    button999296733482276);
    frmHome.setDefaultUnit(kony.flex.DP);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmHome
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};