import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateUser } from 'src/app/core/enums/state-user';
import { User } from 'src/app/core/models/user';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-page-list-users',
  templateUrl: './page-list-users.component.html',
  styleUrls: ['./page-list-users.component.scss'],
})
export class PageListUsersComponent implements OnInit {
  public title: string;
  public headers!: string[];
  public collection$: Observable<User[]>;
  public states = StateUser;
  constructor(private usersService: UsersService) {
    this.title = 'List orders';
    this.collection$ = this.usersService.collection;
  }

  ngOnInit(): void {
    this.headers = ['User Name', 'Mail', 'Rôles'];
  }

  public changeState(item: User, event: Event): void {
    const target = event.target as HTMLSelectElement;
    const state = target.value as StateUser;
    this.usersService.changeState(item, state).subscribe((data) => {
      Object.assign(item, data);
    });
  }
}
