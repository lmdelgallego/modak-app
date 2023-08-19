import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import { AuthGuard } from '../auth/guards/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PageComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../artwork/artwork.module').then((m) => m.ArtworkModule),
          },
          {
            path: 'crypto',
            loadChildren: () =>
              import('../crypto/crypto.module').then((m) => m.CryptoModule),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
