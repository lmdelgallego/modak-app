import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  email: string;
  name: string;
  token?: string;
  loggedIn: boolean;
}

export const initialState: AuthState = {
  email: '',
  name: '',
  loggedIn: false,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { email, name }) => ({
    ...state,
    email,
    name,
    loggedIn: true,
  }))
);
