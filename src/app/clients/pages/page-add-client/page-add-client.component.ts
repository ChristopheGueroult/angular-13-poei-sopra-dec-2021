import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss'],
})
export class PageAddClientComponent implements OnInit {
  constructor(private router: Router, private clientsService: ClientsService) {}

  ngOnInit(): void {}

  public action(item: Client): void {
    this.clientsService.add(item).subscribe((data) => {
      this.router.navigate(['clients']);
    });
  }
}
