import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { ArtWorksService } from "../services/art-service.service";
import * as ArtworkActions from "./artwork.actions";



@Injectable()
export class ArtworkEffects {
  constructor(private actions$: Actions, private artworkService: ArtWorksService) {}

  loadArtworks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArtworkActions.loadArtworks),
      mergeMap((action) => {
        const { query } = action;
        return this.artworkService.getArtworkList(query).pipe(
          map((artworks) => ArtworkActions.loadArtworksSuccess({ artworks })),
          catchError((error) => of(ArtworkActions.loadArtworksFailure({ error })))
        );
      })
    )
  );

}
