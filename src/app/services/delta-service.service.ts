import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DeltaServiceService {
  jsonUrl = "https://devrunner.co.in/machine_test/index.php/web_api/Users/";

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
  //   }),
  // };

  constructor(private http: HttpClient, private router: Router) {}

  register(data: any) {
    return this.http.post(this.jsonUrl, data);
  }

  getUsers() {
    return this.http.get(this.jsonUrl);
  }

  delete(id: any) {
    const newUrl = `${this.jsonUrl}/${id}`;
    return this.http.delete(newUrl, id);
  }

  // login(email, password) {
  //   this.getUsers()
  //   let par = {
  //     user_email: email,
  //     user_pwd: password,
  //   };
  //   return this.http.get(this.jsonUrl + "login", { params: par });
  // }

  login(email, password) {
    this.getUsers();
    let par = {
      user_email: email,
      user_pwd: password,
    };

    return this.http.get<any>(this.jsonUrl + "login", { params: par }).pipe(
      map((response) => {
        if (response.message === "Login Successfull") {
          localStorage.setItem("token", response.data[0].token);
          this.router.navigate(["/dashBoard"]);
        }
        return response;
      })
    );
  }

  logout() {
    localStorage.removeItem("token");
  }

  getToken() {
    return localStorage.getItem("token");
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }
}
