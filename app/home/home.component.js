"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var contact_modal_component_1 = require("../modals/contact-modal/contact-modal.component");
var browse_component_1 = require("./../browse/browse.component");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(modal, vcRef, routerExtensions, activatedRoute) {
        this.modal = modal;
        this.vcRef = vcRef;
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        var options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    HomeComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.value = this.activatedRoute.snapshot.queryParams["value"] || "Nothing set yet!";
    };
    Object.defineProperty(HomeComponent.prototype, "sideDrawerTransition", {
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
    HomeComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    HomeComponent.prototype.showModal = function (args) {
        var button = args.object;
        var somedata = [
            {
                title: "Choix filtre",
                value: "filtres",
                children: []
            },
            {
                title: "Club",
                value: "club",
                children: []
            },
            {
                title: "À table",
                value: "atable",
                children: []
            },
            {
                title: "Livré",
                value: "livre",
                children: []
            },
            {
                title: "À emporter",
                value: "emporter",
                children: [
                    {
                        title: "Snack",
                        value: "snack",
                        children: []
                    },
                    {
                        title: "Box",
                        value: "box",
                        children: []
                    },
                    {
                        title: "Petit Déjeuner",
                        value: "petitdej",
                        children: []
                    },
                ]
            }
        ];
        var options = {
            context: somedata,
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(contact_modal_component_1.ContactModalComponent, options).then(function (res) {
            console.log(res);
            button.text = res.title;
        });
    };
    HomeComponent.prototype.showMap = function (args) {
        var options = {
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(browse_component_1.BrowseComponent, options).then(function (res) {
        });
    };
    HomeComponent.prototype.openFeatured = function () {
        this.routerExtensions.navigate(["/webview"], {
            transition: {
                name: "fade",
                duration: 300
            }
        });
    };
    HomeComponent.prototype.openHome = function () {
        this.routerExtensions.navigate(['/home'], {
            queryParams: {
                value: Math.random()
            }
        });
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], HomeComponent.prototype, "drawerComponent", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogService, core_1.ViewContainerRef, router_1.RouterExtensions, router_2.ActivatedRoute])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE4RTtBQUM5RSw2REFBOEY7QUFDOUYsa0VBQWdGO0FBQ2hGLG1FQUE2RTtBQUM3RSwyRkFBd0Y7QUFDeEYsaUVBQStEO0FBQy9ELHNEQUErRDtBQUMvRCwwQ0FBaUQ7QUFPakQ7SUFXSSx1QkFBb0IsS0FBeUIsRUFBVSxLQUF1QixFQUFVLGdCQUFtQyxFQUFVLGNBQThCO1FBQS9JLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQy9KLElBQUksT0FBTyxHQUFHO1lBQ1YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsSUFBSTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUMvQixDQUFDO0lBQ04sQ0FBQztJQUVEOztrRUFFOEQ7SUFDOUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksa0JBQWtCLENBQUM7SUFDekYsQ0FBQztJQUVELHNCQUFJLCtDQUFvQjthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRDs7O2tFQUc4RDtJQUM5RCx5Q0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRU0saUNBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUNqQixJQUFJLE1BQU0s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b3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuaW1wb3J0IHsgQ29udGFjdE1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL21vZGFscy9jb250YWN0LW1vZGFsL2NvbnRhY3QtbW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBCcm93c2VDb21wb25lbnQgfSBmcm9tIFwiLi8uLi9icm93c2UvYnJvd3NlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogVXNlIHRoZSBAVmlld0NoaWxkIGRlY29yYXRvciB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRyYXdlciBjb21wb25lbnQuXG4gICAgKiBJdCBpcyB1c2VkIGluIHRoZSBcIm9uRHJhd2VyQnV0dG9uVGFwXCIgZnVuY3Rpb24gYmVsb3cgdG8gbWFuaXB1bGF0ZSB0aGUgZHJhd2VyLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG5cbiAgICB2YWx1ZTogYW55O1xuXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnMgOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSl7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGV4dDoge30sXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBVc2UgdGhlIHNpZGVEcmF3ZXJUcmFuc2l0aW9uIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgb3Blbi9jbG9zZSBhbmltYXRpb24gb2YgdGhlIGRyYXdlci5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1widmFsdWVcIl0gfHwgXCJOb3RoaW5nIHNldCB5ZXQhXCI7XG4gICAgfVxuXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBBY2NvcmRpbmcgdG8gZ3VpZGVsaW5lcywgaWYgeW91IGhhdmUgYSBkcmF3ZXIgb24geW91ciBwYWdlLCB5b3Ugc2hvdWxkIGFsd2F5c1xuICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dNb2RhbChhcmdzKSB7XG4gICAgICAgIGxldCBidXR0b24gPSBhcmdzLm9iamVjdFxuXG4gICAgICAgIGxldCBzb21lZGF0YSA9IFtcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOlwiQ2hvaXggZmlsdHJlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6XCJmaWx0cmVzXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46W11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6XCJDbHViXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6XCJjbHViXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46W11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6XCLDgCB0YWJsZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOlwiYXRhYmxlXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46W11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6XCJMaXZyw6lcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTpcImxpdnJlXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46W11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6XCLDgCBlbXBvcnRlclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOlwiZW1wb3J0ZXJcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjpbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOlwiU25hY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlwic25hY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOltdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOlwiQm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcImJveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46W11cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCJQZXRpdCBEw6lqZXVuZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlwicGV0aXRkZWpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOltdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG5cbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiBzb21lZGF0YSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChDb250YWN0TW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICBidXR0b24udGV4dCA9IHJlcy50aXRsZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAgcHVibGljIHNob3dNYXAoYXJncykge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChCcm93c2VDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgfSk7XG4gICAgIH1cblxuICAgIG9wZW5GZWF0dXJlZCgpe1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3dlYnZpZXdcIl0sICB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9wZW5Ib21lKCl7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9ob21lJ10sIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IE1hdGgucmFuZG9tKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19