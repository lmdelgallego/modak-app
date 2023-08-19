import { createAction, props } from "@ngrx/store";
import { _ArtWork } from "../domain/ArtWork.types";


export enum ArtworkActionTypes {
  LoadArtworks = '[ARTWORK] LOAD_ARTWORKS',
  LoadArtworksSuccess = '[ARTWORK] LOAD_ARTWORKS_SUCCESS',
  LoadArtworksFailure = '[ARTWORK] LOAD_ARTWORKS_FAILURE',
}

export const loadArtworks = createAction(
  ArtworkActionTypes.LoadArtworks,
  props<{ query: string }>()
);
export const loadArtworksSuccess = createAction(
  ArtworkActionTypes.LoadArtworksSuccess,
  props<{ artworks: _ArtWork[] }>()
);
export const loadArtworksFailure = createAction(
  ArtworkActionTypes.LoadArtworksFailure,
  props<{ error: any }>()
);
