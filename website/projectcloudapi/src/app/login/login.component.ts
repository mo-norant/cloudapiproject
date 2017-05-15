import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { FacebookoauthService} from '../facebookoauth.service';

import {User} from'../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    model: any = {};
    loading = false;
    returnUrl: string;

  constructor(private router: Router, private _fb: FormBuilder , private authService : FacebookoauthService) { }

  ngOnInit() {
    
   }


    testrestapi(){
      this.authService.getTimeDate().subscribe{
        data => console.log(data);
      }
    }


/*
   testrestapi(){
   this.authService.login();
   }
*/
}
