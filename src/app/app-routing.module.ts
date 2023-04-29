import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginAuthGuard } from "./auth/login-auth.guard";
import { DashBoardComponent } from "./delta-task/dash-board/dash-board.component";
import { LoginComponent } from "./delta-task/login/login.component";
import { RegistrationFormComponent } from "./delta-task/registration-form/registration-form.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "registration", component: RegistrationFormComponent },
  {
    path: "dashBoard",
    canActivate: [LoginAuthGuard],
    component: DashBoardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
