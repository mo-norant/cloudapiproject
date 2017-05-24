import { Component, OnInit } from '@angular/core';
import { OpendataAntwerpenService } from '../opendata-antwerpen.service'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private opendataService: OpendataAntwerpenService) {
    this.opendataService.getHotspots().subscribe(succes => console.log(succes), error => console.log(error))
   }

  //init mapcanvas to Antwerp
  lat: number = 51.219831;
  lng: number = 4.4138813;
  zoom: number = 12;



  ngOnInit() {
    
  }

}
