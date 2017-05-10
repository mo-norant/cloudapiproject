import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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

  constructor(private router: Router, private _fb: FormBuilder ) { }

  ngOnInit() {
    
   }

    login() {
        this.loading = true;
        console.log(this.model.email + " " + this.model.password)
   }

}
