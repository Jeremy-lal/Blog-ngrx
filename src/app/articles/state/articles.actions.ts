import { Article } from './../models/article';
import { createAction, props } from "@ngrx/store";

export const ADD_ARTICLE_ACTION = '[article form page] add article';
export const UPDATE_ARTICLE_ACTION = '[article form page] update article';
export const DELETE_ARTICLE_ACTION = '[article details page] delete article';
export const SELECT_ARTICLE_ACTION = '[article details page] select article';


export const addArticle = createAction(ADD_ARTICLE_ACTION, props<{ article: Article }>());

export const updateArticle = createAction(
    UPDATE_ARTICLE_ACTION,
    props<{ article: Article }>()
);

export const deleteArticle = createAction(
    DELETE_ARTICLE_ACTION,
    props<{ id: number }>()
);

export const selectArticleToUpdate = createAction(
    SELECT_ARTICLE_ACTION,
    props<{ id: number }>()
);



