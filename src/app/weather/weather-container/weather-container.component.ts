import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Weather } from '../../model/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss']
})
export class WeatherContainerComponent {

  public weatherInformationFromAPI: Weather[] = [];

  constructor(
    private weatherService: WeatherService
  ) {}

  captureSearchValue(value: string): void {
    // this.weatherService.searchWeatherForCity(value).subscribe(result => {
    //   console.log(result);
    //   // this.weatherInformationFromAPI = <Weather>result;
    //   // this.weatherService.reduceCollection();
    // });
  }
}
