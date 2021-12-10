import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list-users',
  templateUrl: './page-list-users.component.html',
  styleUrls: ['./page-list-users.component.scss'],
})
export class PageListUsersComponent implements OnInit {
  public title: string;
  constructor() {
    this.title = 'List users';
  }

  ngOnInit(): void {}
}
