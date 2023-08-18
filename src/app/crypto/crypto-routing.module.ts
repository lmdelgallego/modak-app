import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoComponent } from './crypto.component';
import { CryptoListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: CryptoComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: CryptoListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoRoutingModule {}
