import { Component, Input } from '@angular/core';
import { _ArtWork } from 'src/app/artwork/domain/ArtWork.types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  @Input('art')
  art!: _ArtWork;

  getImageUrl(imageId: string) {
    return `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
  }
}
