import { Component, OnInit } from '@angular/core';
import { PsvAuthService } from '../psv-auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {

  constructor(public authService: PsvAuthService) { }

  ngOnInit() {
  }

}
