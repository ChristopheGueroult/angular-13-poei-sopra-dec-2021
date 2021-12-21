import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-page-edit-user',
  templateUrl: './page-edit-user.component.html',
  styleUrls: ['./page-edit-user.component.scss'],
})
export class PageEditUserComponent implements OnInit {
  public item$!: Observable<User>;
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.item$ = this.usersService.getItemById(id);
    });
  }

  ngOnInit(): void {}
  public action(item: User): void {
    this.usersService.update(item).subscribe((data) => {
      this.router.navigate(['users']);
    });
  }
}
