import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {AuthGuard} from '../auth/auth.guard';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ArticlesComponent} from './articles/articles.component';
import {ArticleComponent} from './article/article.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'articles',
        component: ArticlesComponent
      },
      {
        path: 'articles/delete/:id',
        component: ArticlesComponent
      },
      {
        path: 'articles/add',
        component: ArticleComponent
      },
      {
        path: 'articles/edit/:id',
        component: ArticleComponent
      },
      {
        path: 'articles/update/:id',
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
