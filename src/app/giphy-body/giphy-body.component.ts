import { Component, OnDestroy, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material";
import { Subscription } from "rxjs";
import { GiphyService } from "../services/giphy.service";

@Component({
  selector: "app-giphy-body",
  templateUrl: "./giphy-body.component.html",
  styleUrls: ["./giphy-body.component.css"],
})
export class GiphyBodyComponent implements OnInit, OnDestroy {
  data: any[] = [];
  subscription: Subscription;
  // MatPaginator Inputs
  p:number=1
  itemPerPage:number = 10;
  totalGifs:any

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private giphyService: GiphyService) {}

  ngOnInit() {
    this.giphyData();
  }

  giphyData() {
    this.giphyService.getData();
    this.subscription = this.giphyService.getGifs().subscribe((res) => {
      this.data = res;
      this.totalGifs=res.length;
      console.log(this.data);
    });
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
