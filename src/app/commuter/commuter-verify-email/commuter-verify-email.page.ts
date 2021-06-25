import { Component, OnInit } from '@angular/core';
import { CommuterAuthService } from '../commuter-auth.service';

@Component({
  selector: 'app-commuter-verify-email',
  templateUrl: './commuter-verify-email.page.html',
  styleUrls: ['./commuter-verify-email.page.scss'],
})
export class CommuterVerifyEmailPage implements OnInit {

  constructor(public authService: CommuterAuthService) { }

  ngOnInit() {
  }

}

