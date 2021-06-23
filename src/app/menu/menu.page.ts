import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Home',
      url: '/menu/welcome'
    },
    {
      title: 'PSV Login',
      url: '/menu/psv_login'
    },
    {
      title: 'Commuter Login',
      url: '/menu/commuter_login'
    }
  ];

  selectedPath = '';

  constructor(private router: Router) { 

    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }

}
