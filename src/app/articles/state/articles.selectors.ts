import { Article } from './../models/article';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticlesState } from './articles.state';

export const ARTICLES_STATE_NAME = 'articles'

const getArticlesState = createFeatureSelector<ArticlesState>(ARTICLES_STATE_NAME);

export const getArticles = createSelector(getArticlesState, (state) => {
    return state.articles;
});

export const getSelectedArticle = (id: number) => createSelector(getArticlesState, (state) => {
    const article = state.articles.find(el => el.id === id)
    return article ? article : null
});