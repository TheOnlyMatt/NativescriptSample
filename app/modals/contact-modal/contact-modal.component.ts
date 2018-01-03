import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { ObservableArray } from "tns-core-modules/data/observable-array";


@Component({
    selector: "modal-contact",
    templateUrl: "./modals/contact-modal/contact-modal.component.html",
    styleUrls:["./modals/contact-modal/contact-modal.component.css"]
})
export class ContactModalComponent{

    public filtres : any

    public constructor(private params: ModalDialogParams) {
        this.filtres = params.context
        for(let filtre of this.filtres){
            if(filtre.children.length > 0)
                console.log("has children")

            for(let child of filtre.children){
                console.dir(child.title)
            }
        }
    }

    public close(res: string) {
        this.params.closeCallback(res);
    }
}
