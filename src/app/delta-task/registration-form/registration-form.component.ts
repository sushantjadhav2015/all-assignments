import { HttpClient, HttpParams } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
    private http: HttpClient
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
      // user_email: ["", [Validators.required, Validators.email]],
      // user_phone_no: ["", [Validators.required, Validators.maxLength(10)]],
      // user_pwd: ["", Validators.required],
      // user_gender: ["", Validators.required],
      // this.registrationForm = this.fb.group({
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    const formData = new HttpParams()
      .set('user_name', this.registrationForm.value.user_name)
      .set('user_email', this.registrationForm.value.user_email)
      .set('user_phone_no', this.registrationForm.value.user_phone_no)
      .set('user_pwd', this.registrationForm.value.user_pwd)
      .set('user_gender', this.registrationForm.value.user_gender);



    this.deltaService.register(formData).subscribe((res) => {
      console.log(res);
    });
  }


}
