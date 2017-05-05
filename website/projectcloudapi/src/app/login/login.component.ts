import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private auth: AuthserviceService) { }

  ngOnInit() {
  }

  login(usercreds) {

    let userlogin = this.auth.login(usercreds);
    userlogin.then((res) => {
      if (res)
        this.router.navigate(['/Dashboard']);
    })

  }

}
