import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { ClientsService } from 'src/app/core/services/clients.service';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public title: string;
  public headers!: string[];
  public filters!: string[];
  public collection$: Subject<Order[]>;
  public states = Object.values(StateOrder);

  stateClicked = false;
  constructor(private ordersService: OrdersService, private router: Router) {
    this.title = 'List orders';
    this.collection$ = this.ordersService.collection;
  }

  ngOnInit(): void {
    this.headers = [
      'Action',
      'Client',
      'Description',
      'Type',
      'Unit Price',
      'Nb Days',
      'Tva',
      'Total (excl. Taxes)',
      'Total (with Taxes)',
      'State',
    ];
    this.filters = ['All', ...this.states];
  }

  public goToEdit(id: number): void {
    this.router.navigate(['orders', 'edit', id]);
  }

  public deleteItem(id: number): void {
    this.ordersService.delete(id).subscribe();
  }

  public changeState(item: Order, event: Event): void {
    const target = event.target as HTMLSelectElement;
    const state = target.value as StateOrder;
    this.ordersService.changeState(item, state).subscribe((data) => {
      Object.assign(item, data);
    });
  }

  public selectItems(expression: string): void {
    this.ordersService.getItemsBySearch(expression);
  }
  public filterItems(expression: string): void {
    // console.log(expression);
    this.ordersService.getItemsByFilter(expression);
  }
}
