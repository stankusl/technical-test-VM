import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Weather } from '../../../model/weather';
import { Observable } from 'rxjs';
import { WeatherService } from '../../../services/weather.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent {

  weatherList$: Observable<Weather[]> = this.service.selectWeather();
  @Input() weatherInformation !: Weather[];

  constructor(
    private service: WeatherService
  ) { }

}


