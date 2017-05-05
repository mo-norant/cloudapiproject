import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Router} from '@angular/router';


@Injectable()
export class AuthserviceService {
isAuthenticated: boolean = false;
   userId;
 
  constructor(private http: Http, private router: Router) { }

  login(usercreds){
    
        var headers = new Headers();
        var creds = 'name=' + usercreds.username + '&password=' + usercreds.password;

        
        
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return new Promise((resolve) => {
        this.http.post('https://github.com/login/oauth/authorize', creds, {headers: headers}).subscribe((data) => {
            if(data.json().success) {
                this.userId = data.json().userId;      
                this.isAuthenticated = true;}
                resolve(this.isAuthenticated);
            }
        )
        
        })

}
}