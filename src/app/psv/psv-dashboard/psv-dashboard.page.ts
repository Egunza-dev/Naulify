import { Component, OnInit } from '@angular/core';
import { PsvAuthService } from '../psv-auth.service';

@Component({
  selector: 'app-psv-dashboard',
  templateUrl: './psv-dashboard.page.html',
  styleUrls: ['./psv-dashboard.page.scss'],
})
export class PsvDashboardPage implements OnInit {

  constructor(public authService: PsvAuthService) { }

  ngOnInit() {
  }

}
