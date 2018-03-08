import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NSModuleFactoryLoader } from "nativescript-angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AccordionModule } from "nativescript-accordion/angular";
import { ModalModule } from "./modals/modal.module"

import { Location } from "./providers/location.service"

import * as platform from "platform";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        AccordionModule,
        ModalModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader },
        Location
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
