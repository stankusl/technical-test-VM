import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';

import * as fromWeatherActions from './../root-store/weather.actions';
import { WeatherService } from '../services/weather.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Weather, WeatherPayload } from '../model/weather';

@Injectable()
export class WeatherEffects {

  public constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) { }

  @Effect()
  getWeather$: Observable<Action> = this.actions$.pipe(
    ofType( fromWeatherActions.GET_WEATHER ),
    map((action: fromWeatherActions.GetWeather) => action.payload),
    switchMap((payload: WeatherPayload ) => this.weatherService.searchWeatherForCity( payload.city )),
    map( (data: Weather) => this.weatherService.reduceCollection(data)),
    map((data: Weather) => new fromWeatherActions.GetWeatherSuccess(data)),
    catchError( (error) => of( new fromWeatherActions.WeatherError(error) ) )
  );

}
