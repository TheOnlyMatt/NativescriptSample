"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var contact_modal_component_1 = require("./contact-modal/contact-modal.component");
var angular_1 = require("nativescript-pro-ui/listview/angular");
var ModalModule = (function () {
    function ModalModule() {
    }
    ModalModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                angular_1.NativeScriptUIListViewModule
            ],
            declarations: [
                contact_modal_component_1.ContactModalComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            entryComponents: [contact_modal_component_1.ContactModalComponent],
            exports: [
                contact_modal_component_1.ContactModalComponent,
                angular_1.NativeScriptUIListViewModule
            ]
        })
    ], ModalModule);
    return ModalModule;
}());
exports.ModalModule = ModalModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELGdGQUE4RTtBQUM5RSxtRkFBZ0Y7QUFDaEYsZ0VBQW9GO0FBbUJwRjtJQUFBO0lBQTJCLENBQUM7SUFBZixXQUFXO1FBakJ2QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixzQ0FBNEI7YUFDL0I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsK0NBQXFCO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtZQUNELGVBQWUsRUFBRSxDQUFDLCtDQUFxQixDQUFDO1lBQ3hDLE9BQU8sRUFBQztnQkFDSiwrQ0FBcUI7Z0JBQ3JCLHNDQUE0QjthQUMvQjtTQUNKLENBQUM7T0FDVyxXQUFXLENBQUk7SUFBRCxrQkFBQztDQUFBLEFBQTVCLElBQTRCO0FBQWYsa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQ29udGFjdE1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vY29udGFjdC1tb2RhbC9jb250YWN0LW1vZGFsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIENvbnRhY3RNb2RhbENvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtDb250YWN0TW9kYWxDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6W1xuICAgICAgICBDb250YWN0TW9kYWxDb21wb25lbnQsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsTW9kdWxlIHsgfVxuIl19