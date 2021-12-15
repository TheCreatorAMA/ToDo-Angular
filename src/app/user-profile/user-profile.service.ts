import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserProfile } from "./user-profile.model";
import { tap } from "rxjs/operators"


@Injectable({providedIn: 'root'})
export class UserProfileService{
    user: UserProfile;
    
    // = new UserProfile(
    //     "Alex",
    //     "Hi! I am a self taught developer just practicing my skills in angular",
    //     "Associate Engineer",
    //     "Arizona State University",
    //     ["Coding Languages: Python, HTML, CSS, Javascript, Typescript, C++",
    //     "Software: Solidworks, Siemens NX, MATLAB",
    //     "Prototyping: Lathe Machining, Mill Machining, 3D Printing"]);

    constructor(private http: HttpClient) {}

    getUserDetails() {
        if (this.user === null) {
            this.fetchUserData().subscribe();
            return this.user;
        }
        else {
            return this.user;
        }
    }

    updateUserDetails(newUser: UserProfile) {
        this.user = newUser;
    }

    saveUserData() {
        this.http.put("https://todo-list-26851-default-rtdb.firebaseio.com/userprofile.json", this.user).subscribe();
        this.fetchUserData().subscribe();
    }

    fetchUserData() {
        return this.http.get<UserProfile>("https://todo-list-26851-default-rtdb.firebaseio.com/userprofile.json").pipe(tap(
            userData => {
                this.user = userData;
            }
        ));
    }
    
}