import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';

export class MockWeatherService {
  constructor() {}
}

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: WeatherService,
          useClass: MockWeatherService
        }
      ]
    });
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
