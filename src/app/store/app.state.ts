import { articlesReducer } from '../articles/state/articles.reducer';
import { authReducer } from '../auth/state/auth.reducer';
import { ArticlesState } from './../articles/state/articles.state';
import { AuthState } from './../auth/state/auth.state';

export interface AppState {
    auth: any;
    articles: any;
    // auth: AuthState;
    // articles: ArticlesState;
}

export const appReducer: AppState = {
    auth: authReducer,
    articles: articlesReducer,
};