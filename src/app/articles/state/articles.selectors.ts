import { Article } from './../models/article';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticlesState } from './articles.state';

export const ARTICLES_STATE_NAME = 'articles'

const getArticlesState = createFeatureSelector<ArticlesState>(ARTICLES_STATE_NAME);

export const getArticles = createSelector(getArticlesState, (state) => {
    return state.articles;
});

export const getArticleToUpdateId = createSelector(getArticlesState, (state) => {
    console.log('bhsjvbhjsdv');

    return state.articleToUpdate;
});

export const getSelectedArticle = (id: number | null) => createSelector(getArticlesState, (state) => {
    if (!id) return null
    const article = state.articles.find(el => el.id === id)
    return article ? article : null
});