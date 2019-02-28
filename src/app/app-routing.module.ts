import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { ReposComponent } from './shared/components/repos/repos.component';
import { UserComponent } from './shared/components/user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'repositorio/:name', component: ReposComponent },
  { path: 'usuario/:user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
