"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var shared_module_1 = require("../shared/shared.module");
var search_routing_module_1 = require("./search-routing.module");
var search_component_1 = require("./search.component");
var angular_1 = require("nativescript-accordion/angular");
var SearchModule = (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                search_routing_module_1.SearchRoutingModule,
                angular_1.AccordionModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                search_component_1.SearchComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SearchModule);
    return SearchModule;
}());
exports.SearchModule = SearchModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLHlEQUF1RDtBQUN2RCxpRUFBOEQ7QUFDOUQsdURBQXFEO0FBQ3JELDBEQUFpRTtBQWdCakU7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFkeEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsMkNBQW1CO2dCQUNuQix5QkFBZTtnQkFDZiw0QkFBWTthQUNmO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLGtDQUFlO2FBQ2xCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBLEFBQTdCLElBQTZCO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcblxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5pbXBvcnQgeyBTZWFyY2hSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vc2VhcmNoLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2guY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBY2NvcmRpb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFjY29yZGlvbi9hbmd1bGFyXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIFNlYXJjaFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIEFjY29yZGlvbk1vZHVsZSxcbiAgICAgICAgU2hhcmVkTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU2VhcmNoQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaE1vZHVsZSB7IH1cbiJdfQ==