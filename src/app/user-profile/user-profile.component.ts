import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
    
    constructor(private router: Router,
        private route: ActivatedRoute) {}

    onEditProfile() {
        this.router.navigate(['edit'], {relativeTo: this.route});
    }
}