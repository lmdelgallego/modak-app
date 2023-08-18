import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PageComponent } from './page.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, RouterModule, PagesRoutingModule, SharedModule, HttpClientModule],
})
export class PagesModule {}
