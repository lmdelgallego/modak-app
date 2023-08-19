import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AnimateModule } from 'primeng/animate';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { ArtworkComponent } from './artwork.component';
import { ArtworkRoutingModule } from './artwork-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { artworkReducer } from './store/artwork.reducer';
import { ArtworkEffects } from './store/artwork.effects';

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
    ProgressSpinnerModule,
    ComponentsModule,
    StoreModule.forFeature('artwork', artworkReducer),
    EffectsModule.forFeature([ArtworkEffects]),
  ],
})
export class ArtworkModule {}
