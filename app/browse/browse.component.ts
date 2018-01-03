import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";


import {registerElement} from "nativescript-angular/element-registry";

// Important - must register MapView plugin in order to use in Angular templates
registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);

import { Location } from "../providers/location.service"

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit, AfterViewInit {
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;
    @ViewChild("MapView") mapView: ElementRef;

    latitude : any
    longitude : any
    private mapReady : boolean
    map :any


    constructor(private location : Location){
        console.log("constructing")



    }

    //Map events
    onMapReady(event){
        console.log("Map Ready");
        //this.map = event.object

    }



    private _sideDrawerTransition: DrawerTransitionBase;

    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();

        let map = this.mapView.nativeElement

        map.zoom = 10;
        map.bearing = 0;
        map.tilt = 0;
        map.padding = [40, 40, 40, 40];

        let self = this
        this.location.onLocationChange.subscribe((location) => {
            console.log("received location data")
            console.dir(location)
            map.latitude = location.latitude;
            map.zoom = 10;
            map.longitude = location.longitude;
        });
    }

    ngAfterViewInit(){

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
