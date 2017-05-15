import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FacebookoauthService {

  apilink: string = `https://www.facebook.com/v2.9/dialog/oauth?client_id=`;
  client_id: number = 1686768478295477;
  redirect_uri: string = 'http://localhost:8080';
  token_uri: string = '&response_type=token';
  url: string;
  token:string;
  respons:any;
  error: any;
  

  constructor(private http: Http, private router: Router, private route : ActivatedRoute) {
    
    this.url = this.apilink + this.client_id.toString() + `&redirect_uri=` + this.redirect_uri + this.token_uri;

    
   
    
  }

  login() {
    window.location.href = this.url;

    this.token = this.parseParams()["access_token"];
    
    

   
    

}



  


    


 //parseparam
  parseParams() {
    var params = {}, queryString = location.hash.substring(1), regex = /([^&=]+)=([^&]*)/g, m;
    while (m = regex.exec(queryString)) {
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return params;
  };




}
