"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var contact_modal_component_1 = require("../modals/contact-modal/contact-modal.component");
var browse_component_1 = require("./../browse/browse.component");
var HomeComponent = (function () {
    function HomeComponent(modal, vcRef) {
        this.modal = modal;
        this.vcRef = vcRef;
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
        __metadata("design:paramtypes", [dialogs_1.ModalDialogService, core_1.ViewContainerRef])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE4RTtBQUM5RSw2REFBOEY7QUFDOUYsa0VBQWdGO0FBQ2hGLG1FQUE2RTtBQUM3RSwyRkFBd0Y7QUFDeEYsaUVBQStEO0FBTy9EO0lBV0ksdUJBQW9CLEtBQXlCLEVBQVUsS0FBdUI7UUFBMUQsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUMxRSxJQUFJLE9BQU8sR0FBRztZQUNWLE9BQU8sRUFBRSxFQUFFO1lBQ1gsVUFBVSxFQUFFLElBQUk7WUFDaEIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDL0IsQ0FBQztJQUNOLENBQUM7SUFFRDs7a0VBRThEO0lBQzlELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO0lBQzlELENBQUM7SUFFRCxzQkFBSSwrQ0FBb0I7YUFBeEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQ7OztrRUFHOEQ7SUFDOUQseUNBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVNLGlDQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDakIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUV4QixJQUFJLFFBQVEsR0FBRztZQUVYO2dCQUNJLEtBQUssRUFBQyxjQUFjO2dCQUNwQixLQUFLLEVBQUMsU0FBUztnQkFDZixRQUFRLEVBQUMsRUFBRTthQUNkO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFDLE1BQU07Z0JBQ1osS0FBSyxFQUFDLE1BQU07Z0JBQ1osUUFBUSxFQUFDLEVBQUU7YUFDZDtZQUNEO2dCQUNJLEtBQUssRUFBQyxTQUFTO2dCQUNmLEtBQUssRUFBQyxRQUFRO2dCQUNkLFFBQVEsRUFBQyxFQUFFO2FBQ2Q7WUFDRDtnQkFDSSxLQUFLLEVBQUMsT0FBTztnQkFDYixLQUFLLEVBQUMsT0FBTztnQkFDYixRQUFRLEVBQUMsRUFBRTthQUNkO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFDLFlBQVk7Z0JBQ2xCLEtBQUssRUFBQyxVQUFVO2dCQUNoQixRQUFRLEVBQUM7b0JBQ0w7d0JBQ0ksS0FBSyxFQUFDLE9BQU87d0JBQ2IsS0FBSyxFQUFDLE9BQU87d0JBQ2IsUUFBUSxFQUFDLEVBQUU7cUJBQ2Q7b0JBQ0Q7d0JBQ0ksS0FBSyxFQUFDLEtBQUs7d0JBQ1gsS0FBSyxFQUFDLEtBQUs7d0JBQ1gsUUFBUSxFQUFDLEVBQUU7cUJBQ2Q7b0JBQ0Q7d0JBQ0ksS0FBSyxFQUFDLGdCQUFnQjt3QkFDdEIsS0FBSyxFQUFDLFVBQVU7d0JBQ2hCLFFBQVEsRUFBQyxFQUFFO3FCQUNkO2lCQUNKO2FBQ0o7U0FDSixDQUFBO1FBRUQsSUFBSSxPQUFPLEdBQUc7WUFDVixPQUFPLEVBQUUsUUFBUTtZQUNqQixVQUFVLEVBQUUsS0FBSztZQUNqQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUMvQixDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsK0NBQXFCLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQTtRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTywrQkFBTyxHQUFkLFVBQWUsSUFBSTtRQUNoQixJQUFJLE9BQU8sR0FBRztZQUNWLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1NBQy9CLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxrQ0FBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7UUFDdkQsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBbkdtQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCOzBEQUFDO0lBTHBELGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBWTZCLDRCQUFrQixFQUFpQix1QkFBZ0I7T0FYckUsYUFBYSxDQXlHekI7SUFBRCxvQkFBQztDQUFBLEFBekdELElBeUdDO0FBekdZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuaW1wb3J0IHsgQ29udGFjdE1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL21vZGFscy9jb250YWN0LW1vZGFsL2NvbnRhY3QtbW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBCcm93c2VDb21wb25lbnQgfSBmcm9tIFwiLi8uLi9icm93c2UvYnJvd3NlLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogVXNlIHRoZSBAVmlld0NoaWxkIGRlY29yYXRvciB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRyYXdlciBjb21wb25lbnQuXG4gICAgKiBJdCBpcyB1c2VkIGluIHRoZSBcIm9uRHJhd2VyQnV0dG9uVGFwXCIgZnVuY3Rpb24gYmVsb3cgdG8gbWFuaXB1bGF0ZSB0aGUgZHJhd2VyLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG5cbiAgICBwcml2YXRlIGZyYW1ld29ya3NcblxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZil7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGV4dDoge30sXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBVc2UgdGhlIHNpZGVEcmF3ZXJUcmFuc2l0aW9uIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgb3Blbi9jbG9zZSBhbmltYXRpb24gb2YgdGhlIGRyYXdlci5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBBY2NvcmRpbmcgdG8gZ3VpZGVsaW5lcywgaWYgeW91IGhhdmUgYSBkcmF3ZXIgb24geW91ciBwYWdlLCB5b3Ugc2hvdWxkIGFsd2F5c1xuICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dNb2RhbChhcmdzKSB7XG4gICAgICAgIGxldCBidXR0b24gPSBhcmdzLm9iamVjdFxuXG4gICAgICAgIGxldCBzb21lZGF0YSA9IFtcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOlwiQ2hvaXggZmlsdHJlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6XCJmaWx0cmVzXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46W11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6XCJDbHViXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6XCJjbHViXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46W11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6XCLDgCB0YWJsZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOlwiYXRhYmxlXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46W11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6XCJMaXZyw6lcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTpcImxpdnJlXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46W11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6XCLDgCBlbXBvcnRlclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOlwiZW1wb3J0ZXJcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjpbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOlwiU25hY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlwic25hY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOltdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOlwiQm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcImJveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46W11cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCJQZXRpdCBEw6lqZXVuZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlwicGV0aXRkZWpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOltdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG5cbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiBzb21lZGF0YSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChDb250YWN0TW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICBidXR0b24udGV4dCA9IHJlcy50aXRsZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAgcHVibGljIHNob3dNYXAoYXJncykge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChCcm93c2VDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgfSk7XG4gICAgIH1cbn1cbiJdfQ==