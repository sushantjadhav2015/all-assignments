import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DeltaServiceService } from "src/app/services/delta-service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private deltaService: DeltaServiceService,
    private route: Router
  ) {}
  loginForm: FormGroup;
  isSubmitted: boolean = false;
  errorMessage: string | boolean;

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      user_email: ["", Validators.required],
      user_pwd: ["", Validators.required],
    });
  }

  submit() {
    // // this is used to check data is already in server or not
    // const email = this.loginForm.get("user_email").value;
    // const password = this.loginForm.get("user_pwd").value;
    // this.deltaService.getUsers().subscribe((users: any[]) => {
    //   const existingUser = users.find(
    //     (user) => user.email === email && user.password === password
    //   );
    //   if (existingUser) {
    //     this.route.navigate(["/dashBoard"]);
    //   } else {
    //     // proceed with registration
    //     this.errorMessage = "Account not exist, Please create account";
    //   }
    // });
    this.route.navigate(["/dashBoard"]);

  }

  onReset() {
    this.errorMessage = false;
  }
}
