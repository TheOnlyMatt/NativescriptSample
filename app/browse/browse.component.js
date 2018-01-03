"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var element_registry_1 = require("nativescript-angular/element-registry");
// Important - must register MapView plugin in order to use in Angular templates
element_registry_1.registerElement("MapView", function () { return require("nativescript-google-maps-sdk").MapView; });
var location_service_1 = require("../providers/location.service");
var BrowseComponent = (function () {
    function BrowseComponent(location) {
        this.location = location;
        console.log("constructing");
    }
    //Map events
    BrowseComponent.prototype.onMapReady = function (event) {
        console.log("Map Ready");
        //this.map = event.object
    };
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    BrowseComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        var map = this.mapView.nativeElement;
        map.zoom = 10;
        map.bearing = 0;
        map.tilt = 0;
        map.padding = [40, 40, 40, 40];
        var self = this;
        this.location.onLocationChange.subscribe(function (location) {
            console.log("received location data");
            console.dir(location);
            map.latitude = location.latitude;
            map.zoom = 10;
            map.longitude = location.longitude;
        });
    };
    BrowseComponent.prototype.ngAfterViewInit = function () {
    };
    Object.defineProperty(BrowseComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    BrowseComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], BrowseComponent.prototype, "drawerComponent", void 0);
    __decorate([
        core_1.ViewChild("MapView"),
        __metadata("design:type", core_1.ElementRef)
    ], BrowseComponent.prototype, "mapView", void 0);
    BrowseComponent = __decorate([
        core_1.Component({
            selector: "Browse",
            moduleId: module.id,
            templateUrl: "./browse.component.html"
        }),
        __metadata("design:paramtypes", [location_service_1.Location])
    ], BrowseComponent);
    return BrowseComponent;
}());
exports.BrowseComponent = BrowseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJyb3dzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0Y7QUFDeEYsNkRBQThGO0FBQzlGLGtFQUFnRjtBQUdoRiwwRUFBc0U7QUFFdEUsZ0ZBQWdGO0FBQ2hGLGtDQUFlLENBQUMsU0FBUyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQyxPQUFPLEVBQS9DLENBQStDLENBQUMsQ0FBQztBQUVsRixrRUFBd0Q7QUFPeEQ7SUFjSSx5QkFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBSS9CLENBQUM7SUFFRCxZQUFZO0lBQ1osb0NBQVUsR0FBVixVQUFXLEtBQUs7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pCLHlCQUF5QjtJQUU3QixDQUFDO0lBTUQ7O2tFQUU4RDtJQUM5RCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztRQUUxRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQTtRQUVwQyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRS9CLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBUTtZQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7WUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNyQixHQUFHLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDakMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZCxHQUFHLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQseUNBQWUsR0FBZjtJQUVBLENBQUM7SUFFRCxzQkFBSSxpREFBb0I7YUFBeEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQ7OztrRUFHOEQ7SUFDOUQsMkNBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQWhFb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjs0REFBQztJQUN2QztRQUFyQixnQkFBUyxDQUFDLFNBQVMsQ0FBQztrQ0FBVSxpQkFBVTtvREFBQztJQU5qQyxlQUFlO1FBTDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtTQUN6QyxDQUFDO3lDQWVpQywyQkFBUTtPQWQ5QixlQUFlLENBc0UzQjtJQUFELHNCQUFDO0NBQUEsQUF0RUQsSUFzRUM7QUF0RVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuXG5cbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuXG4vLyBJbXBvcnRhbnQgLSBtdXN0IHJlZ2lzdGVyIE1hcFZpZXcgcGx1Z2luIGluIG9yZGVyIHRvIHVzZSBpbiBBbmd1bGFyIHRlbXBsYXRlc1xucmVnaXN0ZXJFbGVtZW50KFwiTWFwVmlld1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNka1wiKS5NYXBWaWV3KTtcblxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiLi4vcHJvdmlkZXJzL2xvY2F0aW9uLnNlcnZpY2VcIlxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJCcm93c2VcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYnJvd3NlLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQnJvd3NlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogVXNlIHRoZSBAVmlld0NoaWxkIGRlY29yYXRvciB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRyYXdlciBjb21wb25lbnQuXG4gICAgKiBJdCBpcyB1c2VkIGluIHRoZSBcIm9uRHJhd2VyQnV0dG9uVGFwXCIgZnVuY3Rpb24gYmVsb3cgdG8gbWFuaXB1bGF0ZSB0aGUgZHJhd2VyLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gICAgQFZpZXdDaGlsZChcIk1hcFZpZXdcIikgbWFwVmlldzogRWxlbWVudFJlZjtcblxuICAgIGxhdGl0dWRlIDogYW55XG4gICAgbG9uZ2l0dWRlIDogYW55XG4gICAgcHJpdmF0ZSBtYXBSZWFkeSA6IGJvb2xlYW5cbiAgICBtYXAgOmFueVxuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2F0aW9uIDogTG9jYXRpb24pe1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbnN0cnVjdGluZ1wiKVxuXG5cblxuICAgIH1cblxuICAgIC8vTWFwIGV2ZW50c1xuICAgIG9uTWFwUmVhZHkoZXZlbnQpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1hcCBSZWFkeVwiKTtcbiAgICAgICAgLy90aGlzLm1hcCA9IGV2ZW50Lm9iamVjdFxuXG4gICAgfVxuXG5cblxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBVc2UgdGhlIHNpZGVEcmF3ZXJUcmFuc2l0aW9uIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgb3Blbi9jbG9zZSBhbmltYXRpb24gb2YgdGhlIGRyYXdlci5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgbGV0IG1hcCA9IHRoaXMubWFwVmlldy5uYXRpdmVFbGVtZW50XG5cbiAgICAgICAgbWFwLnpvb20gPSAxMDtcbiAgICAgICAgbWFwLmJlYXJpbmcgPSAwO1xuICAgICAgICBtYXAudGlsdCA9IDA7XG4gICAgICAgIG1hcC5wYWRkaW5nID0gWzQwLCA0MCwgNDAsIDQwXTtcblxuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5vbkxvY2F0aW9uQ2hhbmdlLnN1YnNjcmliZSgobG9jYXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVjZWl2ZWQgbG9jYXRpb24gZGF0YVwiKVxuICAgICAgICAgICAgY29uc29sZS5kaXIobG9jYXRpb24pXG4gICAgICAgICAgICBtYXAubGF0aXR1ZGUgPSBsb2NhdGlvbi5sYXRpdHVkZTtcbiAgICAgICAgICAgIG1hcC56b29tID0gMTA7XG4gICAgICAgICAgICBtYXAubG9uZ2l0dWRlID0gbG9jYXRpb24ubG9uZ2l0dWRlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKXtcblxuICAgIH1cblxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogQWNjb3JkaW5nIHRvIGd1aWRlbGluZXMsIGlmIHlvdSBoYXZlIGEgZHJhd2VyIG9uIHlvdXIgcGFnZSwgeW91IHNob3VsZCBhbHdheXNcbiAgICAqIGhhdmUgYSBidXR0b24gdGhhdCBvcGVucyBpdC4gVXNlIHRoZSBzaG93RHJhd2VyKCkgZnVuY3Rpb24gdG8gb3BlbiB0aGUgYXBwIGRyYXdlciBzZWN0aW9uLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbn1cbiJdfQ==