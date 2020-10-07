import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = '506caac019f87c9b0c7f1b263fd71b49';

  constructor(private http: HttpClient) { }

  getWeatherInfo(city: string){
    let params = new HttpParams()
    .set('q', city)
    .set('appid', this.apiKey)

    return this.http.get(this.url,{params});
  }
}
 