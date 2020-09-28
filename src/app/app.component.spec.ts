import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WeatherContainerComponent } from './weather/weather-container/weather-container.component';
import { WeatherService } from './services/weather.service';
import { Observable, of } from 'rxjs';

class MockWeatherService {
  buildUpCrumbs(): Observable<{}> {
    return of({});
  }
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WeatherContainerComponent,
        AppComponent
      ],
      providers: [
        { provide: WeatherService, useClass: MockWeatherService }

      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'weather-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('WeatherApp');
  });

});
