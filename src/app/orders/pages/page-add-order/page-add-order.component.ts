import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { ClientsService } from 'src/app/core/services/clients.service';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent implements OnInit {
  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private clientsService: ClientsService
  ) {}

  ngOnInit(): void {}
  public action(item: Order): void {
    item.customerId = this.clientsService.getClientByName(item.customerCompany);
    if (item.customerId != 0) {
      this.ordersService.add(item).subscribe((data) => {
        this.router.navigate(['orders']);
      });
    } else {
      console.log('error');
    }
  }
}
