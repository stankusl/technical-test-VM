import { HttpErrorResponse } from '@angular/common/http';

import * as fromWeatherActions from './weather.actions';
import { Weather } from '../model/weather';

export const weatherReducerFractal = 'weather';

export interface State {
  isLoading: boolean;
  weather: Weather[];
  error: HttpErrorResponse | undefined;
  success: boolean;
}

const initialState: State = {
  isLoading: false,
  weather: [],
  error: undefined,
  success: false
};

export function reducers( state: State = initialState, action: fromWeatherActions.Actions): State {

  switch (action.type) {

    case fromWeatherActions.WEATHER_ERROR:
    {
      return {
        ...state,
        isLoading: false,
        error: action.payload?.error
      };
    }

    case fromWeatherActions.GET_WEATHER:
    {
      return {
        ...state,
        isLoading: true,
      };
    }

    case fromWeatherActions.GET_WEATHER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        weather: [
          action.payload,
          ...state.weather
        ],
        success: true,
        error: undefined
      };
    }

    case fromWeatherActions.REDUCE_WEATHER_COLLECTION: {
      return {
        ...state,
        weather: [
          ...state.weather,
        ],
      };
    }

    case fromWeatherActions.WEATHER_SORT: {
      return {
        ...state,
        weather: state.weather.map(location => {
          return  {
            ...location,
            list: location.list.slice().reverse()
          };
        })
      };
    }

    default:
      return state;
  }
}

