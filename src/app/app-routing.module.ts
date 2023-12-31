import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginFormComponent} from "./auth/login-form/login-form.component";
import {AuthGuard} from "./auth/auth.guard";
import {UserViewComponent} from "./user/user-view/user-view.component";
import { MealViewComponent } from './meal/meal-view/meal-view.component';

const routes: Routes = [
  {
    path: '',
    component: MealViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'users',
    component: UserViewComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
