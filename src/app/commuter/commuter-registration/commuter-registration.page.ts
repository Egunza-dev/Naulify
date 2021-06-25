import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CommuterAuthService } from '../commuter-auth.service';

@Component({
  selector: 'app-commuter-registration',
  templateUrl: './commuter-registration.page.html',
  styleUrls: ['./commuter-registration.page.scss'],
})
export class CommuterRegistrationPage implements OnInit {

  constructor(
    public authService: CommuterAuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  signUp(email, password){
    this.authService.RegisterUser(email.value, password.value)      
    .then((res) => {
      // Do something here
      this.authService.SendVerificationMail()
      this.router.navigate(['commuter-verify-email']);
    }).catch((error) => {
      window.alert(error.message)
    })
}

}
