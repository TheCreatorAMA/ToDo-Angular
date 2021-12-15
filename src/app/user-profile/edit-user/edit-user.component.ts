import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UserProfile } from "../user-profile.model";
import { UserProfileService } from "../user-profile.service";

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
    userEditForm: FormGroup;

    constructor(private userService: UserProfileService,
        private router: Router,
        private route: ActivatedRoute) {}

    ngOnInit() {
        this.initForm();
    }

    private initForm() {
        const user = this.userService.getUserDetails();

        let userSkills = new FormArray([]);

        if( user['skills']) {
            for (let skill of user.skills) {
                userSkills.push(new FormGroup({
                    'skill': new FormControl(skill)
                }));
            }
        }

        this.userEditForm = new FormGroup({
            'name': new FormControl(user.name),
            'about': new FormControl(user.about),
            'role': new FormControl(user.role),
            'company': new FormControl(user.company),
            'skills': userSkills
        })
    }

    onEditUser() {
        const newSkills: string[] = this.userEditForm.value['skills'].map((element) => {
            console.log(element);
            return element.skill;
        })

        console.log(newSkills);

        const updatedUser = new UserProfile(
            this.userEditForm.value['name'],
            this.userEditForm.value['about'],
            this.userEditForm.value['role'],
            this.userEditForm.value['company'],
            newSkills);

        // this.userService.updateUserDetails(updatedUser);

        // this.router.navigate(['/profile'],{relativeTo: this.route});
    }

    onCancel() {
        this.router.navigate(['/profile'],{relativeTo: this.route});
    }

    get controls() {
        return (<FormArray>this.userEditForm.get('skills')).controls;
    }

    onAddSkills() {
        (<FormArray>this.userEditForm.get('skills')).push(
            new FormGroup({
                'skill': new FormControl() 
            })
        );
    }
}