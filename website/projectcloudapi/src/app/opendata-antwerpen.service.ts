import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class OpendataAntwerpenService {

  constructor(private http: Http) {
    
   }


   public getHotspots(){
      return this.http.get('http://datasets.antwerpen.be/v4/gis/wifiopenbaar.json').map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json() || alert("SERVER ERROR")));
   }

}
