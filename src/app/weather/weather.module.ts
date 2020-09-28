import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { WeatherContainerComponent } from './weather-container/weather-container.component';
import { reducers } from '../root-store/weather.reducers';
import { WeatherEffects } from '../root-store/weather.effects';
import { WeatherService } from '../services/weather.service';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forFeature('weather', reducers),
    EffectsModule.forFeature([ WeatherEffects ])
  ],
  declarations: [
    SearchComponent,
    ResultsComponent,
    WeatherContainerComponent,
    ErrorComponent
  ],
  exports: [
    SearchComponent,
    ResultsComponent,
    WeatherContainerComponent
  ],
  providers: [
    WeatherService
  ]
})
export class WeatherModule { }
