"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by digeek on 04/09/2017.
 */
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var application = require("application");
var geolocation = require("nativescript-geolocation");
var Location = (function () {
    function Location() {
        this.onLocationChange = new Subject_1.Subject();
        this._located = false;
        var self = this;
        console.log("in constructor");
        geolocation.isEnabled().then(function (enabled) {
            console.log("then");
            if (!enabled) {
                console.log("location not enabled");
                geolocation.enableLocationRequest()
                    .then(function () {
                    console.log("after enable location request");
                    self.getUserLocation();
                }, function (e) {
                    console.log("Error: " + (e.message || e));
                });
            }
            else {
                console.log("location enabled");
                self.getUserLocation();
            }
        }, function (e) {
            console.log("Error: " + (e.message || e));
        });
    }
    Object.defineProperty(Location.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (location) {
            this._location = location;
            this._located = true;
            console.log("location received");
            this.onLocationChange.next(this._location);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Send in a promise the current user location
     * @returns {any}
     */
    Location.prototype.getUserLocation = function () {
        var self = this;
        console.log("trying ...");
        var location = geolocation.getCurrentLocation({
            desiredAccuracy: 3,
            maximumAge: 5000,
            timeout: 15000
        })
            .then(function (loc) {
            console.log("yeay got it");
            if (loc) {
                self.location = loc;
            }
        }, function (e) {
            console.log("Error: " + (e.message || e));
        });
    };
    Location = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], Location);
    return Location;
}());
exports.Location = Location;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILHNDQUEyQztBQUMzQyx3Q0FBdUM7QUFDdkMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRXpDLHNEQUF3RDtBQUt4RDtJQU1JO1FBTEEscUJBQWdCLEdBQWlCLElBQUksaUJBQU8sRUFBTyxDQUFDO1FBRzVDLGFBQVEsR0FBYSxLQUFLLENBQUE7UUFHOUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBRWYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQzdCLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxPQUFPO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDbkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtnQkFDbkMsV0FBVyxDQUFDLHFCQUFxQixFQUFFO3FCQUM5QixJQUFJLENBQUM7b0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFBO29CQUM1QyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7Z0JBQzFCLENBQUMsRUFBRSxVQUFVLENBQUM7b0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQztZQUNELElBQUksQ0FBQSxDQUFDO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtnQkFDL0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO1lBQzFCLENBQUM7UUFDTCxDQUFDLEVBQUUsVUFBVSxDQUFDO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsc0JBQUksOEJBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3pCLENBQUM7YUFFRCxVQUFhLFFBQVk7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUE7WUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLENBQUM7OztPQVBBO0lBVUQ7OztPQUdHO0lBR0ssa0NBQWUsR0FBdkI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUE7UUFFZixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBRXpCLElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztZQUMxQyxlQUFlLEVBQUMsQ0FBQztZQUNqQixVQUFVLEVBQUUsSUFBSTtZQUNoQixPQUFPLEVBQUUsS0FBSztTQUNqQixDQUFDO2FBQ0csSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7WUFDMUIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQTtZQUN2QixDQUFDO1FBQ0wsQ0FBQyxFQUFFLFVBQVUsQ0FBQztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXBFUSxRQUFRO1FBRnBCLGlCQUFVLEVBQUU7O09BRUEsUUFBUSxDQXFFcEI7SUFBRCxlQUFDO0NBQUEsQUFyRUQsSUFxRUM7QUFyRVksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgZGlnZWVrIG9uIDA0LzA5LzIwMTcuXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xudmFyIGFwcGxpY2F0aW9uID0gcmVxdWlyZShcImFwcGxpY2F0aW9uXCIpO1xuXG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gXCJ1aS9lbnVtc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBMb2NhdGlvbiB7XG4gICAgb25Mb2NhdGlvbkNoYW5nZTogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gICAgcHJpdmF0ZSBfbG9jYXRpb24gOiBhbnlcbiAgICBwcml2YXRlIF9sb2NhdGVkIDogYm9vbGVhbiA9IGZhbHNlXG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcblxuICAgICAgICBjb25zb2xlLmxvZyhcImluIGNvbnN0cnVjdG9yXCIpXG4gICAgICAgIGdlb2xvY2F0aW9uLmlzRW5hYmxlZCgpLnRoZW4oZnVuY3Rpb24gKGVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhlblwiKVxuICAgICAgICAgICAgaWYgKCFlbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2NhdGlvbiBub3QgZW5hYmxlZFwiKVxuICAgICAgICAgICAgICAgIGdlb2xvY2F0aW9uLmVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgZW5hYmxlIGxvY2F0aW9uIHJlcXVlc3RcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZ2V0VXNlckxvY2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgKGUubWVzc2FnZSB8fCBlKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvY2F0aW9uIGVuYWJsZWRcIilcbiAgICAgICAgICAgICAgICBzZWxmLmdldFVzZXJMb2NhdGlvbigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIChlLm1lc3NhZ2UgfHwgZSkpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGdldCBsb2NhdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYXRpb25cbiAgICB9XG5cbiAgICBzZXQgbG9jYXRpb24obG9jYXRpb246YW55KSB7XG4gICAgICAgIHRoaXMuX2xvY2F0aW9uID0gbG9jYXRpb25cbiAgICAgICAgdGhpcy5fbG9jYXRlZCA9IHRydWVcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2NhdGlvbiByZWNlaXZlZFwiKVxuICAgICAgICB0aGlzLm9uTG9jYXRpb25DaGFuZ2UubmV4dCh0aGlzLl9sb2NhdGlvbik7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTZW5kIGluIGEgcHJvbWlzZSB0aGUgY3VycmVudCB1c2VyIGxvY2F0aW9uXG4gICAgICogQHJldHVybnMge2FueX1cbiAgICAgKi9cblxuXG4gICAgcHJpdmF0ZSBnZXRVc2VyTG9jYXRpb24oKXtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJ0cnlpbmcgLi4uXCIpXG5cbiAgICAgICAgbGV0IGxvY2F0aW9uID0gZ2VvbG9jYXRpb24uZ2V0Q3VycmVudExvY2F0aW9uKHtcbiAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTozLFxuICAgICAgICAgICAgbWF4aW11bUFnZTogNTAwMCxcbiAgICAgICAgICAgIHRpbWVvdXQ6IDE1MDAwXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAobG9jKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ5ZWF5IGdvdCBpdFwiKVxuICAgICAgICAgICAgICAgIGlmIChsb2MpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2NhdGlvbiA9IGxvY1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyAoZS5tZXNzYWdlIHx8IGUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn0iXX0=