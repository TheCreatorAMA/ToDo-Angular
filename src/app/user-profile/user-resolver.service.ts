import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { UserProfile } from "./user-profile.model";
import { UserProfileService } from "./user-profile.service";

@Injectable({providedIn: 'root'})
export class UserDataResolver implements Resolve<UserProfile> {

    constructor(private userService: UserProfileService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.userService.fetchUserData();
    }
}