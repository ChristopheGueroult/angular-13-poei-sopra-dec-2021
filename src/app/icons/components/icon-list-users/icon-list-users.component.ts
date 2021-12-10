import { Component, OnInit } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-list-users',
  templateUrl: './icon-list-users.component.html',
  styleUrls: ['./icon-list-users.component.scss'],
})
export class IconListUsersComponent implements OnInit {
  public myIcon = faUsers;
  constructor() {}

  ngOnInit(): void {}
}
