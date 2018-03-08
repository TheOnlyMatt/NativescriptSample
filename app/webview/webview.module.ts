import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { SharedModule } from "../shared/shared.module";
import { WebViewRoutingModule } from "./webview-routing.module";
import { WebviewComponent } from "./webview.component";

@NgModule({
    imports: [
        NativeScriptModule,
        WebViewRoutingModule,
        SharedModule
    ],
    declarations: [
        WebviewComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class WebViewModule { }
