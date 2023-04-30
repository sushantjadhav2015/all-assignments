import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  imageUrl = 'https://miro.medium.com/max/1200/0*QOZm9X5er1Y0r5-t';

  constructor() { }

  ngOnInit() {
  }

}
