import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthComponent } from "./auth/auth.component";
import { TodoItemsComponent } from "./todo-items/todo-items.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/auth', pathMatch: 'full'},
    {path: 'auth', component: AuthComponent },
    {path: 'todo', component: TodoItemsComponent },
    {path: 'profile', component: UserProfileComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}