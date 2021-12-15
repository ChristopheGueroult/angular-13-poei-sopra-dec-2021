import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  constructor(private clientsService: ClientsService) {
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
  }

  public changeState(item: Client): void {
    this.clientsService.changeState(item).subscribe((data) => {
      Object.assign(item, data);
    });
  }
}
