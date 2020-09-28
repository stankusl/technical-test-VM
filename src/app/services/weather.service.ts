import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as fromWeatherActions from '../root-store/weather.actions';
import { Store } from '@ngrx/store';
import * as fromWeatherStore from '../root-store/weather.reducers';
import * as fromWeatherSelectors from '../root-store/weather.selectors';
import { Weather, WeatherList } from '../model/weather';

@Injectable()
export class WeatherService {

  private params = {
    q: '',
    cnt: '50',
    units: 'metric',
    APPID: '46719d8a5aae956734bfbf61ee4aab79'
  };

  private url = 'https://api.openweathermap.org/data/2.5/forecast?q=';

  constructor(
    private http: HttpClient,
    private store: Store<fromWeatherStore.State>
  ) { }

  public selectWeather(): Observable<Weather[]> {
    return this.store.select(fromWeatherSelectors.getWeather);
  }

  public selectError(): Observable<HttpErrorResponse | undefined> {
    return this.store.select(fromWeatherSelectors.getError);
  }

  public reduceCollection(data: Weather): Weather {
    // API returns weather for next 5 days for every 3 hours
    // Only taking every 8th item to show 5 days
    if ( data ) {
      data.list = data.list.filter( (value: WeatherList, index: number) => (index % 8 === 0) ? value : null );
    }

    return data;
  }

  public getWeather(city: string): void {
    this.store.dispatch(new fromWeatherActions.GetWeather(
      {
        city
      }));
  }

  public sort(): void {
    this.store.dispatch(new fromWeatherActions.SortDate());
  }

  public searchWeatherForCity(city: string): Observable<Weather> {
    this.params.q = city;
    return this.http.get<Weather>( `${this.url}${this.params.q}&appid=${this.params.APPID}&cnt=${this.params.cnt}&units=${this.params.units}`);
  }

}
