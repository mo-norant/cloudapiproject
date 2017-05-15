import { Component, OnInit } from '@angular/core';
import { FacebookoauthService} from '../facebookoauth.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  name:String;

  constructor(private authService : FacebookoauthService) { }

  ngOnInit() {
  }


  
loginFacebook(){
  
  this.authService.login().subscribe((succes)=> {
  this.name = succes.name;
  });;
}


}
