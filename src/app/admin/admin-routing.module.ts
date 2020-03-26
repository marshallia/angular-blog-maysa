import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {AuthGuard} from '../auth/auth.guard';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ArticlesComponent} from './articles/articles.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'admin/dashboard',
        component: DashboardComponent
      },
      {
        path: 'admin/articles',
        component: ArticlesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
