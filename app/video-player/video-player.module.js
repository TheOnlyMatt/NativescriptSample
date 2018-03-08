"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var shared_module_1 = require("../shared/shared.module");
var video_player_routing_module_1 = require("./video-player-routing.module");
var video_player_component_1 = require("./video-player.component");
var WebViewModule = (function () {
    function WebViewModule() {
    }
    WebViewModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                video_player_routing_module_1.VideoPlayerRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                video_player_component_1.VideoPlayerComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], WebViewModule);
    return WebViewModule;
}());
exports.WebViewModule = WebViewModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8tcGxheWVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZGVvLXBsYXllci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLHlEQUF1RDtBQUN2RCw2RUFBeUU7QUFDekUsbUVBQWdFO0FBZWhFO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixhQUFhO1FBYnpCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHNEQUF3QjtnQkFDeEIsNEJBQVk7YUFDZjtZQUNELFlBQVksRUFBRTtnQkFDViw2Q0FBb0I7YUFDdkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGFBQWEsQ0FBSTtJQUFELG9CQUFDO0NBQUEsQUFBOUIsSUFBOEI7QUFBakIsc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcbmltcG9ydCB7IFZpZGVvUGxheWVyUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3ZpZGVvLXBsYXllci1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgVmlkZW9QbGF5ZXJDb21wb25lbnQgfSBmcm9tIFwiLi92aWRlby1wbGF5ZXIuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIFZpZGVvUGxheWVyUm91dGluZ01vZHVsZSxcbiAgICAgICAgU2hhcmVkTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVmlkZW9QbGF5ZXJDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgV2ViVmlld01vZHVsZSB7IH1cbiJdfQ==