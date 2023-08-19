import { Component } from '@angular/core';
import { ArtWorksService } from './services/art-service.service';
import { ArtWork } from './domain/ArtWork';
import { FormBuilder, Validators } from '@angular/forms';
import { PaginatorState } from 'primeng/paginator';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss'],
})
export class ArtworkComponent {
  first: number = 0;
  rows: number = 10;
  artwork: Array<ArtWork> = [];

  searchForm = this.fb.group({
    search: ['', [Validators.required]],
  });

  constructor(private service: ArtWorksService, private fb: FormBuilder) {}

  onSubmit() {
    const search = this.searchForm.value.search as string;
    this.service.getArtworkList(search).subscribe((artwork) => {
      this.artwork = artwork;
    });
  }

  onPageChange(event: PaginatorState) {
    console.log(event);
  }
}
