import { Component, OnInit } from '@angular/core';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-icon-list-clients',
  templateUrl: './icon-list-clients.component.html',
  styleUrls: ['./icon-list-clients.component.scss'],
})
export class IconListClientsComponent implements OnInit {
  public myIcon = faAddressBook;
  constructor() {}

  ngOnInit(): void {}
}
