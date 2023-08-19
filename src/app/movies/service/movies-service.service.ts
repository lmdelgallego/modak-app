import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http
      .get<any>(`${environment.movies_url}/movie/now_playing?language=en-US`, {
        headers: {
          Authorization: `Bearer ${environment.movies_key}`,
        },
      })
      .pipe(
        map((res) => res.results),
      );
  }
}
