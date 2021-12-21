import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-page-add-user',
  templateUrl: './page-add-user.component.html',
  styleUrls: ['./page-add-user.component.scss'],
})
export class PageAddUserComponent implements OnInit {
  constructor(private router: Router, private usersService: UsersService) {}

  ngOnInit(): void {}

  public action(item: User): void {
    this.usersService.add(item).subscribe((data) => {
      this.router.navigate(['users']);
    });
  }
}
