import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommuterAuthService } from '../commuter-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  constructor(
    public authService: CommuterAuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        if(res.user.emailVerified) {
          this.router.navigate(['commuter-dashboard']);          
        } else {
          this.authService.displayToast('Email is not verified')
          return false;
        }
      }).catch((error) => {
        this.authService.displayToast(error.message)
      })
  }

}

