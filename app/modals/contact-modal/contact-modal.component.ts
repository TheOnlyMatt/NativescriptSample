import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { ObservableArray } from "tns-core-modules/data/observable-array";

//import * as TNSPhone from 'nativescript-phone';
//import * as email from "nativescript-email";

@Component({
    moduleId: module.id,
    selector: "modal-contact",
    templateUrl: "contact-modal.component.html",
    //templateUrl: "./shared/modals/contact-modal/contact-modal.component.html",
    //styleUrls:["./shared/modals/contact-modal/contact-modal.component.css"]
    styleUrls:["contact-modal.component.css"]
})
export class ContactModalComponent{

    public contact : any

    public constructor(private params: ModalDialogParams) {
       this.contact = params.context
        console.dir(this.contact)
    }

    public close() {

    }

    //phoneTap(phoneNumber : string){
    //    TNSPhone.dial(phoneNumber, true)
    //}

    //mailTap(mail : string){
    //    email.compose({
    //        to: [mail]
    //    }).then(
    //        function() {
    //            console.log("Email composer closed");
    //        }, function(err) {
    //            console.log("Error: " + err);
    //        });
    //}
}
