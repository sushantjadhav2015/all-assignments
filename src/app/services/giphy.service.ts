import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GiphyService {
  apiKey =
    "http://api.giphy.com/v1/gifs/trending?api_key=kVXhSNmGd8oHoSyvRq16udfb5Y3qjpzy&limit=50";

  gifs = new BehaviorSubject<any>([]); //it pass the defult value

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.apiKey).subscribe((res: any) => {
      this.gifs.next(res.data);
    });
  }

  // this is updated as per the user search here we applied query to the api
  search(gifName: string) {
    //  here we are using backitick not single cot
    const apiUrl = `http://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=kVXhSNmGd8oHoSyvRq16udfb5Y3qjpzy&limit=50`;
    return this.http.get(apiUrl).subscribe((res: any) => {
      this.gifs.next(res.data);
    });
  }

  getGifs() {
    return this.gifs.asObservable();
  }
}
