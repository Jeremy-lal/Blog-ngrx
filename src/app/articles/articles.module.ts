import { StoreModule } from '@ngrx/store';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticlesItemComponent } from './components/articles-item/articles-item.component';
import { ArticlesFormComponent } from './components/articles-form/articles-form.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { articlesReducer } from './state/articles.reducer';
import { ARTICLES_STATE_NAME } from './state/articles.selectors';

const routes: Routes = [
  { path: '', component: ArticlesListComponent },
  { path: ':id', component: ArticleDetailsComponent }
]

@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticlesItemComponent,
    ArticlesFormComponent,
    ArticleDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(ARTICLES_STATE_NAME, articlesReducer)
  ]
})
export class ArticlesModule { }
