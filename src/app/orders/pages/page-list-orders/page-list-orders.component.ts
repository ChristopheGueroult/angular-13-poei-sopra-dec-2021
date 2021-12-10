import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public title: string;
  constructor() {
    this.title = 'List orders';
  }

  ngOnInit(): void {}
}
