import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { PsvService } from '../psv.service';
import { PsvAuthService } from '../psv-auth.service';
import { PsvRoute } from '../psv_route';

@Component({
  selector: 'app-manage-routes',
  templateUrl: './manage-routes.page.html',
  styleUrls: ['./manage-routes.page.scss'],
})
export class ManageRoutesPage implements OnInit {
  routeForm: FormGroup;
  psv_id = JSON.parse(localStorage.getItem('user')).uid;
  Routes: any[];

  constructor(
    private psvService: PsvService,
    private authService: PsvAuthService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {

    this.fetchRoutes();
    this.routeForm = this.fb.group({
      route_desc: [''], 
      cost:['']      
    })

  }

  fetchRoutes() {
    let routesRes = this.psvService.getRoutes(this.psv_id);
    routesRes.once('value', (snapshot) => {
      this.Routes = [];
      snapshot.forEach((childSnapshot) => {
        let a = childSnapshot.val();
        a['$key'] = childSnapshot.key;
        this.Routes.push(a as PsvRoute);
      });
    });
  }

  addRoute(){
    if (!this.routeForm.valid) {
      return false;
    } else {
     
        this.psvService.createRoute(this.psv_id, this.routeForm.value);
        this.fetchRoutes();
        this.routeForm.reset();
  }

}

deleteRoute(route_key){
  this.psvService.deleteRoute(route_key, this.psv_id);
  this.Routes = this.Routes.filter((value, index, arr) => {
    return value.$key !== route_key;
  });
}

}
