import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { NewUserComponent } from './new-user/new-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [NewUserComponent, UserDetailComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
