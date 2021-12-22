import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent implements OnInit {
  public title: string;
  public headers!: string[];
  public collection$: Observable<Client[]>;
  public filters!: string[];
  public states = Object.values(StateClient);
  constructor(private clientsService: ClientsService, private router: Router) {
    this.title = 'List Clients';
    this.collection$ = this.clientsService.collection;
  }

  ngOnInit(): void {
    this.headers = [
      'Company',
      'First Name',
      'Last Name',
      'Phone',
      'Mobile',
      'Mail',
      'State',
    ];
    this.filters = ['All', 'ACTIVE', 'INACTIVE'];
  }

  public changeState(item: Client, event: Event): void {
    const target = event.target as HTMLSelectElement;
    const state = target.value as StateClient;
    this.clientsService.changeState(item, state).subscribe((data) => {
      // Object.assign(item, data);
    });
  }

  public selectItems(expression: string): void {
    this.clientsService.getItemsBySearch(expression);
  }
  public filterItems(expression: string): void {
    // console.log(expression);
    this.clientsService.getItemsByFilter(expression);
  }

  public goToEdit(id: number): void {
    this.router.navigate(['clients', 'edit', id]);
  }

  public deleteItem(id: number): void {
    this.clientsService.delete(id).subscribe();
  }
}
