import { User } from './../models/user';
import { createReducer, on } from "@ngrx/store";
import { login, logout, register } from "./auth.actions";
import { initialState, AuthState } from './auth.state';

const _authReducer = createReducer(
    initialState,
    on(login, (state, action) => {
        return {
            ...state,
            user: { ...action.user },
        };
    }),
    on(logout, (state) => {
        return {
            ...state,
            user: null
        };
    }),
    on(register, (state, action) => {
        return {
            ...state,
            user: { ...action.user },
        };
    }),
);

export function authReducer(state: AuthState, action: any) {
    return _authReducer(state, action);
}
