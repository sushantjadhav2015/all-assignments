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
    private router: Router,
  ) {}
  hide = true;
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

  // submit() {
  //   let email = this.loginForm.get("user_email").value;
  //   let psd = this.loginForm.get("user_pwd").value;

  //   this.deltaService.login(email, psd).subscribe((response: any) => {
  //     console.log("Got response:", response);
  //     const status = response.message;

  //     if (status === "Login Successfull") {
  //       // console.log("Login successful");
  //       this.router.navigate(["/dashBoard"]);
  //     } else {
  //       console.log("Login failed. Please create a new account.");
  //       // Show an error message to the user indicating that they need to create a new account
  //       this.errorMessage = "Login failed. Please create a new account.";
  //     }
  //   });
  // }

  submit() {
    const email = this.loginForm.get("user_email").value;
    const psd = this.loginForm.get("user_pwd").value;

    this.deltaService.login(email, psd).subscribe(
      (response) => {
        console.log(response.message);
        if (response.message === "Login Successfull") {
          this.router.navigate(["/dashBoard"]);
        } 
        else {
          this.errorMessage = "Invalid email or password OR Please create a new account.";
        }
      },
      (error) => {
        console.error(error);
        this.errorMessage =
          "An error occurred while logging in. Please try again later.";
      }
    );
  }

  onReset() {
    this.errorMessage = false;
  }
}
