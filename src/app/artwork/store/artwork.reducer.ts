import { createReducer, on } from "@ngrx/store";
import { _ArtWork } from "../domain/ArtWork.types";
import * as ArtworkActions from "./artwork.actions";

export interface ArtWorkState {
  artworks: _ArtWork[];
  loading: boolean;
  error: any;
}

export const initialState: ArtWorkState = {
  artworks: [],
  loading: false,
  error: null,
};

export const artworkReducer = createReducer(
  initialState,
  on(ArtworkActions.loadArtworks, (state) => ({
    ...state,
    loading: true,
  })),
  on(ArtworkActions.loadArtworksSuccess, (state, { artworks }) => ({
    ...state,
    artworks,
    loading: false,
  })),
  on(ArtworkActions.loadArtworksFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
