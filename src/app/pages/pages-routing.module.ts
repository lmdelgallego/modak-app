import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageComponent } from './page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PageComponent,
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
