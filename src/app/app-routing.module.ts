import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes = [
  // { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
