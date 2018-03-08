import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { SharedModule } from "../shared/shared.module";
import { VideoPlayerRoutingModule } from "./video-player-routing.module";
import { VideoPlayerComponent } from "./video-player.component";

@NgModule({
    imports: [
        NativeScriptModule,
        VideoPlayerRoutingModule,
        SharedModule
    ],
    declarations: [
        VideoPlayerComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class WebViewModule { }
