// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX
import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Weather } from '../model/weather';


export const GET_WEATHER                      = '[WEATHER] Get Weather';
export const GET_WEATHER_SUCCESS              = '[WEATHER] Get Weather Success';
export const REDUCE_WEATHER_COLLECTION        = '[WEATHER] Reduce Weather Collection';
export const WEATHER_ERROR                    = '[WEATHER] Weather Error';
export const WEATHER_SORT                     = '[WEATHER] Weather Sort ASC/DESC';


export class GetWeather implements Action {
  readonly type = GET_WEATHER;
  constructor(public payload: {
    city: string
  }) { }
}

export class GetWeatherSuccess implements Action {
  readonly type = GET_WEATHER_SUCCESS;
  constructor(public payload: Weather) { }
}

export class WeatherError implements Action {
  readonly type = WEATHER_ERROR;
  constructor(public payload: HttpErrorResponse | undefined) { }
}

export class ReduceWeatherCollection implements Action {
  readonly type = REDUCE_WEATHER_COLLECTION;
  constructor() { }
}

export class SortDate implements Action {
  readonly type = WEATHER_SORT;
  constructor() { }
}

export type Actions
  = GetWeather
  | GetWeatherSuccess
  | ReduceWeatherCollection
  | WeatherError
  | SortDate
  ;
