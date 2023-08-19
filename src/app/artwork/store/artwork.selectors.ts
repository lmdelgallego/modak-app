import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArtWorkState } from './artwork.reducer';

export const selectArtWorkState = createFeatureSelector<ArtWorkState>('artwork');

export const selectArtWorks = createSelector(
  selectArtWorkState,
  (state) => state.artworks
);
export const selectArtWorksLoading = createSelector(
  selectArtWorkState,
  (state) => state.loading
);
export const selectArtWorksError = createSelector(
  selectArtWorkState,
  (state) => state.error
);
