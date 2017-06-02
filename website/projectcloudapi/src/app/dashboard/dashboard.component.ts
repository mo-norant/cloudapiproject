import { Component, OnInit } from '@angular/core';
import { OpendataAntwerpenService } from '../opendata-antwerpen.service'
import { NotificationsService } from 'angular2-notifications';
import * as moment from 'moment';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //init mapcanvas to Antwerp
  lat: number = 51.219831;
  lng: number = 4.4138813;
  zoom: number = 12;
  weather;
  opendata;
  moment;
  today;
  week = [];
  weekdescription;

  constructor(private opendataService: OpendataAntwerpenService, private _service: NotificationsService) {
    this.opendataService.getHotspots().subscribe((succes) => {


      this.opendata = succes.data;
      this.succesnotification();
    }, (error) => this.errornotification(error));


    this.opendataService.getWeather().subscribe((succes) => {
      this.weather = succes;
      moment.locale('nl');
      this.today = moment()

      for(let i = 1 ; i < 7 ; i++){
        var j = moment().add(i,'days').format("LLLL")
        this.week.push(j)
        }
      
      


    });

    this.opendataService.getForecast().subscribe((succes) => {
      this.weekdescription = succes;
    })

  }
   
  

  ngOnInit() {
  }




  private errornotification(error: string) {
    this._service.error(
      'Error',
      error,
      {
        timeOut: 5000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: true,
        maxLength: 10
      }
    )
  }
  private succesnotification() {
    this._service.success(
      'Content loaded',
      'request ok',
      {
        timeOut: 5000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: true,
        maxLength: 10
      }
    )
  }


}
