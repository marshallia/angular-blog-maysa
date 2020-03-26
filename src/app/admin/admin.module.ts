import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ArticlesComponent } from './articles/articles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleComponent } from './article/article.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    ArticlesComponent,
    DashboardComponent,
    ArticleComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule
    ]
})
export class AdminModule { }
