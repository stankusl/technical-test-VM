import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { WeatherService } from '../../../services/weather.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})

export class ErrorComponent implements OnInit {

  error$: Observable<HttpErrorResponse | undefined> = this.service.selectError();

  constructor(
    private service: WeatherService
  ) { }

  ngOnInit(): void {
  }

}
