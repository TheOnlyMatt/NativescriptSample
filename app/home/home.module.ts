import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { SharedModule } from "../shared/shared.module";
import { ModalModule } from "../modals/modal.module"
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

import { BrowseModule } from "./../browse/browse.module";

@NgModule({
    imports: [
        NativeScriptModule,
        HomeRoutingModule,
        SharedModule,
        ModalModule,
        BrowseModule
    ],
    declarations: [
        HomeComponent
    ],
    providers:[
         ModalDialogService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
