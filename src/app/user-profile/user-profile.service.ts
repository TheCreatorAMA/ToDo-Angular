import { Injectable } from "@angular/core";
import { UserProfile } from "./user-profile.model";


@Injectable({providedIn: 'root'})
export class UserProfileService{
    user: UserProfile = new UserProfile(
        "Alex",
        "Hi! I am a self taught developer just practicing my skills in angular",
        "Associate Engineer",
        "Arizona State University",
        ["Coding Languages: Python, HTML, CSS, Javascript, Typescript, C++",
        "Software: Solidworks, Siemens NX, MATLAB",
        "Prototyping: Lathe Machining, Mill Machining, 3D Printing"]);

    constructor() {}

    getUserDetails() {
        return this.user;
    }

    updateUserDetails(newUser: UserProfile) {
        this.user = newUser;
        console.log(newUser);
    }
    
}