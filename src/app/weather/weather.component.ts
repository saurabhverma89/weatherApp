import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherInfo;
  errorMessage;
  defaultCity = 'Heidenheim, Germany';

  constructor(private weatherService: WeatherService) { 
    
  }
  
  ngOnInit(): void {
    this.getWeather(this.defaultCity);
  }

  getWeather(cityname: string){
    this.errorMessage = '';

    this.weatherService.getWeatherInfo(cityname).subscribe(data =>{
      this.weatherInfo = data;
    }, error => {
      this.errorMessage = error.error.message;
    });
  }

  getDateTime(dt: number, timeZone: number): string {
    return new Date((dt + timeZone) * 1000).toUTCString();
  }

  getTime(dt: number, timeZone: number): string {
    return new Date((dt + timeZone) * 1000).toUTCString().substring(17, 22);
  }
}
