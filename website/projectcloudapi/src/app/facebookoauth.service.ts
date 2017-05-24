import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FacebookoauthService {

  apilink: string = `https://www.facebook.com/v2.9/dialog/oauth?client_id=`;
  client_id: number = 1686768478295477;
  redirect_uri: string = 'http://localhost:4200';
  token_uri: string = '&response_type=token';
  url: string;
  token: string;
  respons: any;
  error: any;


  constructor(private http: Http, private router: Router, private route: ActivatedRoute) {
  }

  public login() {


    this.url = this.apilink + this.client_id.toString() + `&redirect_uri=` + this.redirect_uri + this.token_uri;
    this.token = this.parseParams()["access_token"];
    if(!this.token){
    window.location.href =this.url

    }


   return this.http.get('https://graph.facebook.com/v2.9/me?fields=name&access_token=' + this.token).map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json() || alert("SERVER ERROR")));

  }


  //parseparam
 private parseParams() {
    var params = {}, queryString = location.hash.substring(1), regex = /([^&=]+)=([^&]*)/g, m;
    while (m = regex.exec(queryString)) {
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return params;
  };




}
