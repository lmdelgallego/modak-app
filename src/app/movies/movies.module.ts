import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './list/list.component';
import { MoviesComponent } from './movies.component';
import { HttpClientModule } from '@angular/common/http';
import { CryptoRoutingModule } from './movies-routing.module';

import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [MovieListComponent, MoviesComponent],
  imports: [CommonModule, HttpClientModule, CryptoRoutingModule, TableModule],
})
export class MoviesModule {}
