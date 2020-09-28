import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, weatherReducerFractal } from './weather.reducers';
import { Weather } from '../model/weather';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Selectors.
 */
export const getFractalState = createFeatureSelector<State>(weatherReducerFractal);

// Weather
export const getError = createSelector(getFractalState, (state: State): HttpErrorResponse | undefined => state.error);
export const getWeather = createSelector(getFractalState, (state: State): Weather[] => state.weather);
