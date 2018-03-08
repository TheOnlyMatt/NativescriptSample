"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
//import * as TNSPhone from 'nativescript-phone';
//import * as email from "nativescript-email";
var ContactModalComponent = (function () {
    function ContactModalComponent(params) {
        this.params = params;
        this.contact = params.context;
        console.dir(this.contact);
    }
    ContactModalComponent.prototype.close = function () {
    };
    ContactModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "modal-contact",
            templateUrl: "contact-modal.component.html",
            //templateUrl: "./shared/modals/contact-modal/contact-modal.component.html",
            //styleUrls:["./shared/modals/contact-modal/contact-modal.component.css"]
            styleUrls: ["contact-modal.component.css"]
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
    ], ContactModalComponent);
    return ContactModalComponent;
}());
exports.ContactModalComponent = ContactModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCxtRUFBNEU7QUFHNUUsaURBQWlEO0FBQ2pELDhDQUE4QztBQVU5QztJQUlJLCtCQUEyQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUNqRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUE7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUVNLHFDQUFLLEdBQVo7SUFFQSxDQUFDO0lBWFEscUJBQXFCO1FBUmpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyw0RUFBNEU7WUFDNUUseUVBQXlFO1lBQ3pFLFNBQVMsRUFBQyxDQUFDLDZCQUE2QixDQUFDO1NBQzVDLENBQUM7eUNBS3FDLDJCQUFpQjtPQUozQyxxQkFBcUIsQ0EyQmpDO0lBQUQsNEJBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5cbi8vaW1wb3J0ICogYXMgVE5TUGhvbmUgZnJvbSAnbmF0aXZlc2NyaXB0LXBob25lJztcbi8vaW1wb3J0ICogYXMgZW1haWwgZnJvbSBcIm5hdGl2ZXNjcmlwdC1lbWFpbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcIm1vZGFsLWNvbnRhY3RcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJjb250YWN0LW1vZGFsLmNvbXBvbmVudC5odG1sXCIsXG4gICAgLy90ZW1wbGF0ZVVybDogXCIuL3NoYXJlZC9tb2RhbHMvY29udGFjdC1tb2RhbC9jb250YWN0LW1vZGFsLmNvbXBvbmVudC5odG1sXCIsXG4gICAgLy9zdHlsZVVybHM6W1wiLi9zaGFyZWQvbW9kYWxzL2NvbnRhY3QtbW9kYWwvY29udGFjdC1tb2RhbC5jb21wb25lbnQuY3NzXCJdXG4gICAgc3R5bGVVcmxzOltcImNvbnRhY3QtbW9kYWwuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0TW9kYWxDb21wb25lbnR7XG5cbiAgICBwdWJsaWMgY29udGFjdCA6IGFueVxuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge1xuICAgICAgIHRoaXMuY29udGFjdCA9IHBhcmFtcy5jb250ZXh0XG4gICAgICAgIGNvbnNvbGUuZGlyKHRoaXMuY29udGFjdClcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UoKSB7XG5cbiAgICB9XG5cbiAgICAvL3Bob25lVGFwKHBob25lTnVtYmVyIDogc3RyaW5nKXtcbiAgICAvLyAgICBUTlNQaG9uZS5kaWFsKHBob25lTnVtYmVyLCB0cnVlKVxuICAgIC8vfVxuXG4gICAgLy9tYWlsVGFwKG1haWwgOiBzdHJpbmcpe1xuICAgIC8vICAgIGVtYWlsLmNvbXBvc2Uoe1xuICAgIC8vICAgICAgICB0bzogW21haWxdXG4gICAgLy8gICAgfSkudGhlbihcbiAgICAvLyAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVtYWlsIGNvbXBvc2VyIGNsb3NlZFwiKTtcbiAgICAvLyAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycik7XG4gICAgLy8gICAgICAgIH0pO1xuICAgIC8vfVxufVxuIl19