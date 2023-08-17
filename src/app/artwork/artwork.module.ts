import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworkComponent } from './artwork.component';
import { ArtworkRoutingModule } from './artwork-routing.module';

@NgModule({
  declarations: [ArtworkComponent],
  imports: [CommonModule, ArtworkRoutingModule],
})
export class ArtworkModule {}
