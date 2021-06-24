import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PsvAuthService } from '../psv-auth.service';

@Component({
  selector: 'app-psv-registration',
  templateUrl: './psv-registration.page.html',
  styleUrls: ['./psv-registration.page.scss'],
})
export class PsvRegistrationPage implements OnInit {

  constructor(
    public authService: PsvAuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  signUp(email, password){
    this.authService.RegisterUser(email.value, password.value)      
    .then((res) => {
      // Do something here
      this.authService.SendVerificationMail()
      this.router.navigate(['verify-email']);
    }).catch((error) => {
      window.alert(error.message)
    })
}

}
