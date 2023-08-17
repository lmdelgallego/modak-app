import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AnimateModule } from 'primeng/animate';

import { ArtworkComponent } from './artwork.component';
import { ArtworkRoutingModule } from './artwork-routing.module';

@NgModule({
  declarations: [ArtworkComponent],
  imports: [CommonModule, ArtworkRoutingModule, AnimateModule, InputTextModule, ButtonModule],
})
export class ArtworkModule {}
