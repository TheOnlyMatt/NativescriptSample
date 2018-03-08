import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { RouterExtensions } from "nativescript-angular/router";

import { WebView, LoadEventData } from "ui/web-view";
var utilityModule = require("utils/utils");

@Component({
    selector: "webview-component",
    moduleId: module.id,
    templateUrl: "./webview.component.html",
    styleUrls:["./webview.component.css"]
})
export class WebviewComponent implements OnInit {
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private routerExtension : RouterExtensions){

    }

    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

    webviewLoaded(args){
        let webView : WebView = args.object

        if (webView.android) {
            try {
                var MyWebViewClient = android.webkit.WebViewClient.extend({
                    shouldOverrideUrlLoading: function(_webView,interceptedUrl){
                        console.log('Intercepted Url was ', interceptedUrl);
                        utilityModule.openUrl(interceptedUrl)
                    }
                });
                webView.android.setWebViewClient(new MyWebViewClient());
            } catch(e) {
                alert(e.message);
            }
        }
        else if(webView.ios){
            console.log("is ios")
            webView.on("loadStarted", function(data){
                console.log("loadStarted")
                console.dir(data.url)
            })
        }
    }
}
