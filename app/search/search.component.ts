import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { AccordionModule } from "nativescript-accordion/angular";

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;
    private contacts : any[]

    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.contacts = [
            { title: "1", footer: "10", headerText: "First", footerText: "4", items: [{ text: "Yes" ,image: "https://i.annihil.us/u/prod/marvel//universe3zx/images/d/d9/Ironfist02.jpg", }, { text: "Drop", image: "http://static.srcdn.com/wp-content/uploads/Superman-fighting-Goku.jpg" }] },
            { title: "2", footer: "20", headerText: "Second", footerText: "5", items: [{ text: "Maybe", image: "https://i.annihil.us/u/prod/marvel//universe3zx/images/d/d9/Ironfist02.jpg" }, { text: "Drop", image: "~/images/f29.png" }] },
            { title: "3", footer: "30", headerText: "Third", footerText: "6", items: [{ text: "No", image: "https://i.annihil.us/u/prod/marvel//universe3zx/images/d/d9/Ironfist02.jpg" }, { text: "Drop", image: "~/images/f29.png" }] }
        ]
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
}
