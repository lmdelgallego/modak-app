import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PageComponent } from './page.component';

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, RouterModule, PagesRoutingModule],
})
export class PagesModule {}
