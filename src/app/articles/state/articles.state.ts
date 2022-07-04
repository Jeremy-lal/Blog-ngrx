import { Article } from './../models/article';

export interface ArticlesState {
    articles: Article[];
}

export const initialState: ArticlesState = {
    articles: [
        {
            id: 1,
            title: 'Premier article',
            content: 'fhjesfbjhsebfhjbsefh',
            img: 'https://imgs.search.brave.com/V2kC5MTNyUx53eeE6FVVJjSZFJOlJM8kEPeST20ELfM/rs:fit:787:371:1/g:ce/aHR0cHM6Ly9hdGEt/bG9naXN0aXF1ZS5m/ci93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ny8wNS9pbWctYXJ0/aWNsZS5qcGc'
        }
    ],
} 