import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PageAddUserComponent } from './pages/page-add-user/page-add-user.component';
import { PageEditUserComponent } from './pages/page-edit-user/page-edit-user.component';
import { PageListUsersComponent } from './pages/page-list-users/page-list-users.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    PageListUsersComponent,
    PageEditUserComponent,
    PageAddUserComponent,
  ],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
})
export class UsersModule {}
