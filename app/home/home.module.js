"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var shared_module_1 = require("../shared/shared.module");
var modal_module_1 = require("../modals/modal.module");
var home_routing_module_1 = require("./home-routing.module");
var home_component_1 = require("./home.component");
var browse_module_1 = require("./../browse/browse.module");
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                home_routing_module_1.HomeRoutingModule,
                shared_module_1.SharedModule,
                modal_module_1.ModalModule,
                browse_module_1.BrowseModule
            ],
            declarations: [
                home_component_1.HomeComponent
            ],
            providers: [
                modal_dialog_1.ModalDialogService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFFOUUsa0VBQXVFO0FBQ3ZFLHlEQUF1RDtBQUN2RCx1REFBb0Q7QUFDcEQsNkRBQTBEO0FBQzFELG1EQUFpRDtBQUVqRCwyREFBeUQ7QUFvQnpEO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUFsQnRCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHVDQUFpQjtnQkFDakIsNEJBQVk7Z0JBQ1osMEJBQVc7Z0JBQ1gsNEJBQVk7YUFDZjtZQUNELFlBQVksRUFBRTtnQkFDViw4QkFBYTthQUNoQjtZQUNELFNBQVMsRUFBQztnQkFDTCxpQ0FBa0I7YUFDdEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuaW1wb3J0IHsgTW9kYWxNb2R1bGUgfSBmcm9tIFwiLi4vbW9kYWxzL21vZGFsLm1vZHVsZVwiXG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2hvbWUtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBCcm93c2VNb2R1bGUgfSBmcm9tIFwiLi8uLi9icm93c2UvYnJvd3NlLm1vZHVsZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBIb21lUm91dGluZ01vZHVsZSxcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBNb2RhbE1vZHVsZSxcbiAgICAgICAgQnJvd3NlTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSG9tZUNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOltcbiAgICAgICAgIE1vZGFsRGlhbG9nU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxuIl19