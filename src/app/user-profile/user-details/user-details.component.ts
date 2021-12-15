import { Component, OnInit } from "@angular/core";
import { UserProfile } from "../user-profile.model";
import { UserProfileService } from "../user-profile.service";

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
    user: UserProfile;

    constructor(private userservice: UserProfileService) {}

    ngOnInit() {
        this.user = this.userservice.getUserDetails()
    }


}