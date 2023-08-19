import { props, createAction } from '@ngrx/store';

export enum AuthActionTypes {
  Login = '[AUTH] LOGIN',
  LoginSuccess = '[AUTH] LOGIN_SUCCESS',
  LoginFailure = '[AUTH] LOGIN_FAILURE',
}

export const login = createAction(
  AuthActionTypes.Login,
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(
  AuthActionTypes.LoginSuccess,
  props<{ email: string; name: string }>()
);
export const loginFailure = createAction(
  AuthActionTypes.LoginFailure,
  props<{ error: any }>()
);
