import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherContainerComponent } from './weather-container.component';
import { Observable, of } from 'rxjs';
import { WeatherService } from '../../services/weather.service';

class MockWeatherService {
  buildUpCrumbs(): Observable<{}> {
    return of({});
  }
}

describe('WeatherContainerComponent', () => {
  let component: WeatherContainerComponent;
  let fixture: ComponentFixture<WeatherContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherContainerComponent ],
      providers: [
        { provide: WeatherService, useClass: MockWeatherService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
