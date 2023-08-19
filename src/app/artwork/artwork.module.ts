import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AnimateModule } from 'primeng/animate';
import { PaginatorModule } from 'primeng/paginator';

import { ArtworkComponent } from './artwork.component';
import { ArtworkRoutingModule } from './artwork-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [ArtworkComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ArtworkRoutingModule,
    AnimateModule,
    InputTextModule,
    ButtonModule,
    PaginatorModule,
    ComponentsModule,
  ],
})
export class ArtworkModule {}
