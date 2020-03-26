import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ArticlesComponent} from './articles/articles.component';
import {LoginComponent} from './login/login.component';
import {SingleArticleComponent} from './single-article/single-article.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'article/:id',
    component: SingleArticleComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
