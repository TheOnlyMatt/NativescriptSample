/**
 * Created by digeek on 04/09/2017.
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
var application = require("application");

import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "ui/enums";

@Injectable()

export class Location {
    onLocationChange: Subject<any> = new Subject<any>();

    private _location : any
    private _located : boolean = false

    constructor(){
        let self = this

        console.log("in constructor")
        geolocation.isEnabled().then(function (enabled) {
            console.log("then")
            if (!enabled) {
                console.log("location not enabled")
                geolocation.enableLocationRequest()
                    .then(function () {
                        console.log("after enable location request")
                        self.getUserLocation()
                    }, function (e) {
                        console.log("Error: " + (e.message || e));
                    });
            }
            else{
                console.log("location enabled")
                self.getUserLocation()
            }
        }, function (e) {
            console.log("Error: " + (e.message || e));
        });

    }

    get location(){
        return this._location
    }

    set location(location:any) {
        this._location = location
        this._located = true
        console.log("location received")
        this.onLocationChange.next(this._location);
    }


    /**
     * Send in a promise the current user location
     * @returns {any}
     */


    private getUserLocation(){
        let self = this

        console.log("trying ...")

        let location = geolocation.getCurrentLocation({
            desiredAccuracy:3,
            maximumAge: 5000,
            timeout: 15000
        })
            .then(function (loc) {
                console.log("yeay got it")
                if (loc) {
                    self.location = loc
                }
            }, function (e) {
                console.log("Error: " + (e.message || e));
            });
    }
}