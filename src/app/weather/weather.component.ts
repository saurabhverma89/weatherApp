import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherInfo;
  error;
  defaultCity = 'Heidenheim';
  currentDateTime;

  constructor(private weatherService: WeatherService) { 
    this.getWeather(this.defaultCity);
  }
  
  ngOnInit(): void {
    
  }

  getWeather(cityname: string){
    this.currentDateTime = new Date();
    this.weatherService.getWeatherInfo(cityname).subscribe(data =>{
      this.weatherInfo = data;
    }, error => {
      this.weatherInfo = null;
      this.error = error.error.message;
    });
  }

}
