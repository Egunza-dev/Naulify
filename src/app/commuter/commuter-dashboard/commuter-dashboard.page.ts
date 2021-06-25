import { Component, OnInit } from '@angular/core';
import { CommuterAuthService } from '../commuter-auth.service';

@Component({
  selector: 'app-commuter-dashboard',
  templateUrl: './commuter-dashboard.page.html',
  styleUrls: ['./commuter-dashboard.page.scss'],
})
export class CommuterDashboardPage implements OnInit {

  constructor(public authService: CommuterAuthService) { }

  ngOnInit() {
  }

}
