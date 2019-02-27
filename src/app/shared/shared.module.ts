import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ReposComponent } from './components/repos/repos.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    HomeComponent,
    ReposComponent,
    UserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class SharedModule { }
