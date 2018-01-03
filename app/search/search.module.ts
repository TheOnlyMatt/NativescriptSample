import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { SharedModule } from "../shared/shared.module";
import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";
import { AccordionModule } from "nativescript-accordion/angular";

@NgModule({
    imports: [
        NativeScriptModule,
        SearchRoutingModule,
        AccordionModule,
        SharedModule
    ],
    declarations: [
        SearchComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SearchModule { }