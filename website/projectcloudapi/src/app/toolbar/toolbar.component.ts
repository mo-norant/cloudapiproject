import { Component, OnInit } from '@angular/core';
import { FacebookoauthService} from '../facebookoauth.service';
import { AlertsService} from '@jaspero/ng2-alerts';
import { ConfirmationService } from '@jaspero/ng2-confirmations';
@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  name:String;
  showname:boolean = false;

  constructor(private authService : FacebookoauthService, private _alert: AlertsService, private _confirmation: ConfirmationService) {
   
    _confirmation.create('Login with facebook', 'If you don\'t want to, you can log in anonymously ')
        .subscribe((ans) => {
          this.showname = ans.resolved;
          if (ans.resolved){
            this.loginFacebook();
            
          }
          else{
            this.name = "Anonymous"
          }
        })
}
   

  ngOnInit() {
  }



  
private loginFacebook(){
  
  this.authService.login().subscribe((succes)=> {
  this.name = succes.name;
  });;
}


}
