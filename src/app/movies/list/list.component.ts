import { Component } from '@angular/core';
import { MoviesService } from '../service/movies-service.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class MovieListComponent {
  moviesData: Array<any> = [];
  constructor(private service: MoviesService) {
    this.service.getMovies().subscribe((res) => {
      this.moviesData = res as Array<any>;
    });
  }

  getImageUrl(url: string) {
    return `https://image.tmdb.org/t/p/w500/${url}`;
  }
}
