import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddUserComponent } from './pages/page-add-user/page-add-user.component';
import { PageEditUserComponent } from './pages/page-edit-user/page-edit-user.component';
import { PageListUsersComponent } from './pages/page-list-users/page-list-users.component';

const routes: Routes = [
  { path: '', component: PageListUsersComponent },
  { path: 'add', component: PageAddUserComponent },
  { path: 'edit', component: PageEditUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
