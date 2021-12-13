import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public title: string;
  public headers!: string[];
  public collection!: Order[];
  constructor(private ordersService: OrdersService) {
    this.title = 'List orders';
  }

  ngOnInit(): void {
    this.headers = [
      'Client',
      'Type',
      'Description',
      'Unit Price',
      'Nb Days',
      'Tva',
      'Total (excl. Taxes)',
      'Total (with Taxes)',
      'State',
    ];
    this.ordersService.collection.subscribe((data) => {
      this.collection = data;
    });
  }
}
