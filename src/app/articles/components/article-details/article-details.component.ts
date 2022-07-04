import { ActivatedRoute, Router } from '@angular/router';
import { getSelectedArticle } from './../../state/articles.selectors';
import { Observable, tap } from 'rxjs';
import { AppState } from './../../../store/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { deleteArticle } from '../../state/articles.actions';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  article$!: Observable<Article | null>
  id!: number;

  constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params['id'])

    this.article$ = this.store.select(getSelectedArticle(this.id)).pipe(
      tap(el => {
        if (!el) this.router.navigateByUrl('/articles')
      })
    );
  }

  deleteArticle() {
    this.store.dispatch(deleteArticle({ id: this.id }))
  }
}
