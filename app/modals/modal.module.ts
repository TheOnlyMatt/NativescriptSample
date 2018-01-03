import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { ContactModalComponent } from "./contact-modal/contact-modal.component";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        ContactModalComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [ContactModalComponent],
    exports:[
        ContactModalComponent,
        NativeScriptUIListViewModule
    ]
})
export class ModalModule { }
