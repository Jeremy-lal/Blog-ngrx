import { getArticles } from './../../state/articles.selectors';
import { Article } from './../../models/article';
import { AppState } from './../../../store/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  articles$!: Observable<Article[]>

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    console.log(1)
    this.articles$ = this.store.select(getArticles)
  }

}
