import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthComponent } from "./auth/auth.component";
import { TodoItemsComponent } from "./todo-items/todo-items.component";
import { EditUserComponent } from "./user-profile/edit-user/edit-user.component";
import { UserDetailsComponent } from "./user-profile/user-details/user-details.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

// Where all of your routes are stored
const appRoutes: Routes = [
    {path: '', redirectTo: '/auth', pathMatch: 'full'},
    {path: 'auth', component: AuthComponent },
    {path: 'todo', component: TodoItemsComponent },
    {path: 'profile', component: UserProfileComponent, children:[
        {path: '', component: UserDetailsComponent},
        {path:':edit', component: EditUserComponent}
    ]}
];

// In order to export routes and allow them to be accessed
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}