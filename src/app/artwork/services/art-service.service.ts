import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, forkJoin, map, mergeMap, of, switchMap } from 'rxjs';

import { Main, Artworks, Info, Config } from './artwork-service';
import { ArtWork } from '../domain/ArtWork';
import { _ArtWork } from '../domain/ArtWork.types';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class ArtWorksService {
  constructor(private http: HttpClient) {}

  search(query: string): Observable<ArtWork[]> {
    const url = `${base_url}/search`
    return this.http.get<Main>(url, {
      params: {
        q: query,
        size: 12,
      },
    }).pipe(
      map((res) => res.data),
    );
  }

  getArtwork(id: number): Observable<_ArtWork> {
    const url = `${base_url}/${id}`;
    return this.http
      .get<{
        data: _ArtWork;
        info: Info;
        config: Config;
      }>(url)
      .pipe(map((res) => res.data));
  }

  getArtworkList(query: string): Observable<_ArtWork[]> {

    return this.search(query).pipe(
      switchMap((artworkList) => {
        const detailsRequest: Observable<_ArtWork>[] = artworkList.map<Observable<_ArtWork>>((artwork) =>
          this.getArtwork(artwork.id)
        );
        return forkJoin(detailsRequest);
      }),
      map((artworkList) => {
        return artworkList.map((artwork) => {
          return new ArtWork(
            artwork.id,
            artwork.title,
            artwork.image_id,
            artwork.artwork_type_title,
            artwork.artist_display
          );
        });
      })

    );
  }
}
