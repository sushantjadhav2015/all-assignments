import { Component, OnInit } from "@angular/core";
import { GiphyService } from "src/app/services/giphy.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  constructor(private gifService: GiphyService) {}

  ngOnInit() {}

  search(searchTerm: string) {
    if (searchTerm !== "") {
      this.gifService.search(searchTerm);
    }
  }
}
