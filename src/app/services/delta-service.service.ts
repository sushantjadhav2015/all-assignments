import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root",
})
export class DeltaServiceService {
  jsonUrl =
    "https://devrunner.co.in/machine_test/index.php/web_api/Users/Register";

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
  //   }),
  // };

  constructor(private http: HttpClient) {}

  register(data: any) {
    return this.http.post(this.jsonUrl, data);
  }

  getUsers() {
    return this.http.get(this.jsonUrl);
  }

  update(Id: any, data: any): Observable<any> {
    const neweditUrl = `${this.jsonUrl}/${Id}`;
    return this.http.put(neweditUrl, data);
  }


  delete(id: any) {
    const newUrl = `${this.jsonUrl}/${id}`;
    return this.http.delete(newUrl, id);
  }


}
