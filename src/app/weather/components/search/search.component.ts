import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../../../model/weather';

import { WeatherService } from '../../../services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit, OnDestroy {
  public city = '';
  private weather$!: Observable<Weather[]>;

  @Output() protected citySearch: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private service: WeatherService,
  ) { }

  ngOnInit(): void {
    this.weather$ = this.service.selectWeather();
  }

  search(): void {
    this.service.getWeather(this.city);
    this.citySearch.emit(this.city);
  }

  sort(): void {
    this.service.sort();
  }

  ngOnDestroy(): void {
    this.weather$.subscribe();
  }
}
