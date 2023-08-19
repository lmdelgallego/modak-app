import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private router: Router) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap((action) => {
        const { email, password } = action;
        const isAuthenticated = true;
        if (isAuthenticated) {
          this.router.navigate(['/']);
          return of(AuthActions.loginSuccess({ email, name: 'John Doe' }));
        } else {
          return of(AuthActions.loginFailure({ error: 'Invalid credentials' }));
        }
      }),
      catchError((error) => of(AuthActions.loginFailure({ error })))
    )
  );
}
