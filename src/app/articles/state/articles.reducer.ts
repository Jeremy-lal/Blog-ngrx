import { addArticle, deleteArticle, selectArticleToUpdate, updateArticle } from './articles.actions';
import { createReducer, on } from "@ngrx/store";
import { ArticlesState, initialState } from "./articles.state";

const _articlesReducer = createReducer(
    initialState,
    on(addArticle, (state, action) => {
        let article = { ...action.article };

        article.id = Math.max(...state.articles.map(el => el.id)) + 1

        return {
            ...state,
            articles: [...state.articles, article],
        };
    }),
    on(updateArticle, (state, action) => {
        const updatedArticles = state.articles.map((article) => {
            return action.article.id === article.id ? action.article : article;
        });

        return {
            ...state,
            articles: updatedArticles,
        };
    }),
    on(deleteArticle, (state, { id }) => {
        const updatedArticles = state.articles.filter((article) => {
            return article.id !== id;
        });

        return {
            ...state,
            articles: updatedArticles,
        };
    }),
    on(selectArticleToUpdate, (state, { id }) => {
        return {
            ...state,
            articleToUpdate: id,
        };
    }),

);

export function articlesReducer(state: ArticlesState, action: any) {
    return _articlesReducer(state, action);
}


