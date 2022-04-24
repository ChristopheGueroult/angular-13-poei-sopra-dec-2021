import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public filters!: string[];
  constructor(private usersService: UsersService, private router: Router) {
    this.title = 'List users';
    this.collection$ = this.usersService.collection;
  }

  ngOnInit(): void {
    this.headers = ['Actions', 'First name', 'Last name', 'Email', 'Rôles'];
    this.filters = ['All', ...Object.values(StateUser)];
  }

  public changeState(item: User, event: Event): void {
    const target = event.target as HTMLSelectElement;
    const state = target.value as StateUser;
    this.usersService.changeState(item, state).subscribe((data) => {
      Object.assign(item, data);
    });
  }

  public selectItems(expression: string): void {
    this.usersService.getItemsBySearch(expression);
  }
  public filterItems(expression: string): void {
    // console.log(expression);
    this.usersService.getItemsByFilter(expression);
  }

  public goToEdit(id: number): void {
    this.router.navigate(['users', 'edit', id]);
  }

  public deleteItem(id: number): void {
    this.usersService.delete(id).subscribe();
  }
}
