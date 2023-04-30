
import { HttpClient, HttpParams } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DeltaServiceService } from "src/app/services/delta-service.service";

@Component({
  selector: "app-registration-form",
  templateUrl: "./registration-form.component.html",
  styleUrls: ["./registration-form.component.css"],
})
export class RegistrationFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private deltaService: DeltaServiceService,
    private http: HttpClient,
    private route:Router
  ) {}

  hide = true;
  registrationForm: FormGroup;
  isSubmitted: boolean = false;
  errorMessage: string | boolean;

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.registrationForm = this.fb.group({
      user_name: ["", Validators.required],
      user_email: ["", [Validators.required, Validators.email]],
      user_contact_no: ["", [Validators.required, Validators.maxLength(10)]],
      user_password: ["", Validators.required],
      user_gender: ["", Validators.required],
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    const user=this.registrationForm.value;
    let formData=new FormData();
    formData.append("user_name",this.registrationForm.get('user_name').value);
    formData.append("user_email",this.registrationForm.get('user_email').value);
    formData.append("user_contact_no",this.registrationForm.get('user_contact_no').value);
    formData.append("user_password",this.registrationForm.get('user_password').value);
    formData.append("user_gender",this.registrationForm.get('user_gender').value);


    this.http.post('https://devrunner.co.in/machine_test/index.php/web_api/Users/Register',formData).subscribe(
      (response) => {
        console.log(response);
        alert("Account created")
        this.route.navigate(["/login"]);
      },
      (error) => {
        console.log(error);
        alert("Something was wrong")
      }
    );
  }
}
