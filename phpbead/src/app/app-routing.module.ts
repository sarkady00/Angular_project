import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { RouteguardGuard } from './routeguard.guard';

const routes: Routes = [ // létrehozzuk a routeokat
  {
    path: '', // alaphelyzetben a logint hozzuk be
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'list',
    component: ListComponent,
    canActivate: [RouteguardGuard] // alkalmazzuk a védelmet a nem bejelentkezett felhasználók ellen
  },
  {
    path: 'form',
    component: FormComponent,
    canActivate: [RouteguardGuard]// itt is
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
