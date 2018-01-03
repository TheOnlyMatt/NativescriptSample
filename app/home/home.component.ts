import { Component, OnInit, ViewChild, ViewContainerRef} from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { ContactModalComponent } from "../modals/contact-modal/contact-modal.component";
import { BrowseComponent } from "./../browse/browse.component";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private frameworks

    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private modal: ModalDialogService, private vcRef: ViewContainerRef){
        let options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
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

    public showModal(args) {
        let button = args.object

        let somedata = [

            {
                title:"Choix filtre",
                value:"filtres",
                children:[]
            },
            {
                title:"Club",
                value:"club",
                children:[]
            },
            {
                title:"À table",
                value:"atable",
                children:[]
            },
            {
                title:"Livré",
                value:"livre",
                children:[]
            },
            {
                title:"À emporter",
                value:"emporter",
                children:[
                    {
                        title:"Snack",
                        value:"snack",
                        children:[]
                    },
                    {
                        title:"Box",
                        value:"box",
                        children:[]
                    },
                    {
                        title:"Petit Déjeuner",
                        value:"petitdej",
                        children:[]
                    },
                ]
            }
        ]

        let options = {
            context: somedata,
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(ContactModalComponent, options).then(res => {
            console.log(res);
            button.text = res.title
        });
    }

     public showMap(args) {
        let options = {
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(BrowseComponent, options).then(res => {
        });
     }
}
