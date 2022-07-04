import { Component, Input, OnInit } from '@angular/core';
import { Article } from './../../models/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles-item',
  templateUrl: './articles-item.component.html',
  styleUrls: ['./articles-item.component.scss']
})
export class ArticlesItemComponent implements OnInit {
  @Input() article!: Article;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  select() {
    this.router.navigateByUrl(`/articles/${this.article.id}`)
  }
}
