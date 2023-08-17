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
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
