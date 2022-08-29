import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { ReposComponent } from './shared/components/repos/repos.component';
import { UserComponent } from './shared/components/user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/:user/:repos', component: ReposComponent },
  { path: 'user/:user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
