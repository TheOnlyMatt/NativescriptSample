"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var ContactModalComponent = (function () {
    function ContactModalComponent(params) {
        this.params = params;
        this.filtres = params.context;
        for (var _i = 0, _a = this.filtres; _i < _a.length; _i++) {
            var filtre = _a[_i];
            if (filtre.children.length > 0)
                console.log("has children");
            for (var _b = 0, _c = filtre.children; _b < _c.length; _b++) {
                var child = _c[_b];
                console.dir(child.title);
            }
        }
    }
    ContactModalComponent.prototype.close = function (res) {
        this.params.closeCallback(res);
    };
    ContactModalComponent = __decorate([
        core_1.Component({
            selector: "modal-contact",
            templateUrl: "./modals/contact-modal/contact-modal.component.html",
            styleUrls: ["./modals/contact-modal/contact-modal.component.css"]
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
    ], ContactModalComponent);
    return ContactModalComponent;
}());
exports.ContactModalComponent = ContactModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCxtRUFBNEU7QUFTNUU7SUFJSSwrQkFBMkIsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFBO1FBQzdCLEdBQUcsQ0FBQSxDQUFlLFVBQVksRUFBWixLQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosY0FBWSxFQUFaLElBQVk7WUFBMUIsSUFBSSxNQUFNLFNBQUE7WUFDVixFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7WUFFL0IsR0FBRyxDQUFBLENBQWMsVUFBZSxFQUFmLEtBQUEsTUFBTSxDQUFDLFFBQVEsRUFBZixjQUFlLEVBQWYsSUFBZTtnQkFBNUIsSUFBSSxLQUFLLFNBQUE7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDM0I7U0FDSjtJQUNMLENBQUM7SUFFTSxxQ0FBSyxHQUFaLFVBQWEsR0FBVztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBbEJRLHFCQUFxQjtRQUxqQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLHFEQUFxRDtZQUNsRSxTQUFTLEVBQUMsQ0FBQyxvREFBb0QsQ0FBQztTQUNuRSxDQUFDO3lDQUtxQywyQkFBaUI7T0FKM0MscUJBQXFCLENBbUJqQztJQUFELDRCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm1vZGFsLWNvbnRhY3RcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL21vZGFscy9jb250YWN0LW1vZGFsL2NvbnRhY3QtbW9kYWwuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6W1wiLi9tb2RhbHMvY29udGFjdC1tb2RhbC9jb250YWN0LW1vZGFsLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGFjdE1vZGFsQ29tcG9uZW50e1xuXG4gICAgcHVibGljIGZpbHRyZXMgOiBhbnlcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMpIHtcbiAgICAgICAgdGhpcy5maWx0cmVzID0gcGFyYW1zLmNvbnRleHRcbiAgICAgICAgZm9yKGxldCBmaWx0cmUgb2YgdGhpcy5maWx0cmVzKXtcbiAgICAgICAgICAgIGlmKGZpbHRyZS5jaGlsZHJlbi5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFzIGNoaWxkcmVuXCIpXG5cbiAgICAgICAgICAgIGZvcihsZXQgY2hpbGQgb2YgZmlsdHJlLmNoaWxkcmVuKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihjaGlsZC50aXRsZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZShyZXM6IHN0cmluZykge1xuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHJlcyk7XG4gICAgfVxufVxuIl19