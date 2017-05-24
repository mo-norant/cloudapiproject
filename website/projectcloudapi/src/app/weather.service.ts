import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  

  constructor(private http: Http) { }

 public getWeather(){
      return this.http.get("api.openweathermap.org/data/2.5/weather?APPID=2296d20b3986da9f5f41a49a4e520b52&q=antwerpen").map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json() || alert("SERVER ERROR")));
   }

}
