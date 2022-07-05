import { Article } from './../../models/article';
import { Observable, Subscription, tap } from 'rxjs';
import { getArticleToUpdateId, getSelectedArticle } from './../../state/articles.selectors';
import { Router, ActivatedRoute } from '@angular/router';
import { addArticle, updateArticle } from './../../state/articles.actions';
import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-articles-form',
  templateUrl: './articles-form.component.html',
  styleUrls: ['./articles-form.component.scss']
})
export class ArticlesFormComponent implements OnInit, OnDestroy {
  articleForm!: FormGroup;
  article$!: Subscription;
  update = false;
  id!: number;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.minLength(10)],
      img: ['']
    })

    this.id = Number(this.route.snapshot.params['id'])

    this.article$ = this.store.select(getSelectedArticle(this.id)).pipe(
      tap(el => {
        if (el) {
          this.update = true
          this.articleForm.controls['title'].setValue(el.title)
          this.articleForm.controls['content'].setValue(el.content)
          this.articleForm.controls['img'].setValue(el.img)

        }
      })
    ).subscribe()
  }

  submit() {
    if (this.update) {
      const article = { id: this.id, ...this.articleForm.value }
      this.store.dispatch(updateArticle({ article }))
    } else {
      this.store.dispatch(addArticle({ article: this.articleForm.value }))
    }
    this.router.navigateByUrl('/articles')
  }

  ngOnDestroy(): void {
    this.article$.unsubscribe()
  }
}
