import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherInfo;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    
  }

  getWeather(city: string){
    this.weatherService.getWeatherInfo(city).subscribe(data =>{
      this.weatherInfo = data;
    });
  }

}
