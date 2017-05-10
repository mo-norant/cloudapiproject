import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FacebookoauthService {

  apilink: string = `https://www.facebook.com/v2.9/dialog/oauth?client_id=`;
  client_id: number = 1686768478295477;
  redirect_uri: string = 'http://localhost:8080';
  url: string;
  

  constructor(private http: Http, private router: Router) {
    
    this.url = this.apilink + this.client_id.toString() + `&redirect_uri=` + this.redirect_uri;
   
    
  }

  login() {
    window.location.href = this.url;
    return window.location.href;
  }



}
