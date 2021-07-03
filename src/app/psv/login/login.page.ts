import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PsvAuthService } from '../psv-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public authService: PsvAuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        if(res.user.emailVerified) {
          localStorage.setItem('userId', JSON.stringify(res.user.uid));
          this.router.navigate(['psv-dashboard']);
          
                  
        } else {
          this.authService.displayToast('Email is not verified');
          return false;
        }
      }).catch((error) => {
        this.authService.displayToast(error.message);
      })
  }

}
