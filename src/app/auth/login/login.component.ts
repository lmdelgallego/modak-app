import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthAction from '../store/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = this.FB.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.min(8)]],
  });

  constructor(private FB: FormBuilder, private store: Store, private router: Router) {}

  onSubmit() {

    this.store.dispatch(AuthAction.login({
      email: this.loginForm.value.email as string,
      password: this.loginForm.value.password as string,
    }));
    // this.router.navigate(['/']);
  }
}
