import { User } from './../models/user';
import { createAction, props } from "@ngrx/store";

export const LOGIN_ACTION = '[login page] login';
export const LOGOUT_ACTION = '[navbar] logout';
export const REGISTER_ACTION = '[register page] register';


export const login = createAction(
    LOGIN_ACTION,
    props<{ user: User }>()
);

export const logout = createAction(LOGOUT_ACTION);

export const register = createAction(
    REGISTER_ACTION,
    props<{ user: User }>()
);