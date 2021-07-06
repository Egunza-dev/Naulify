import { Injectable } from '@angular/core';
import { PsvProfile } from './psv-profile';
import { PsvAuthService } from './psv-auth.service';
import firebase from 'firebase';
import { Router } from "@angular/router";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PsvService {
  
  psv_routeRef:AngularFireObject<any>;
  psv_routeListRef:AngularFireList<any>;
  database = firebase.database();
  psvProfile: any;  

  constructor(private db: AngularFireDatabase,
              public router: Router,
              public authservice: PsvAuthService,) { 
                this.checkProfile
              }

  
  
   checkProfile(userId:any){   
        return this.database.ref('psv_profile/' + userId); 
    } 
  // Create PSV Profile
  createPsvProfile(profile, userId, email) {
    this.database.ref('psv_profile/' + userId).set({
      name: profile.name,
      email: email,
      mobile: profile.mobile,
      vehicle:{
        registration:profile.registration,
        type:profile.vehicle_type,
        mpesa_code:profile.mpesa_code
      }
    }, (error) => {
      if (error) {
        // The write failed...
        this.authservice.displayToast(error);
      } else {
        // Data saved successfully!
        this.router.navigate(['psv-dashboard']);
        this.authservice.displayToast('Profile Successfully saved.');
      }});
  }

  // Get Single PSV Profile
  getPsvProfile(userId) {            
    return firebase.database().ref('psv_profile/' + userId).once("value");    
  }

  updatePsvProfile(profile, userId, email) {
  
  let value = {
    name: profile.name,
    email: email,
    mobile: profile.mobile,
    vehicle:{
      registration:profile.registration,
      type:profile.vehicle_type,
      mpesa_code:profile.mpesa_code
    }}

  let updates = {};
  updates['psv_profile/' + userId] = value;
  
  return firebase.database().ref().update(updates);
  }


  createRoute(psv_id: any, value: any) {

    let newRouteKey = firebase.database().ref().child('psv_routes').child(psv_id).push().key;

    this.database.ref('/psv_routes/' + psv_id + '/' + newRouteKey).set({
      
      route_description: value.route_desc,
      route_fare: value.cost,
      psv_id:psv_id      
      }, (error) => {
      if (error) {
        // The write failed...
        this.authservice.displayToast(error);
      } else {
        // Data saved successfully!
        //this.router.navigate(['psv-dashboard']);
        this.authservice.displayToast('Route Successfully Created.');
      }});
    
  }

  getRoutes(psv_id: any) {
    return this.database.ref('/psv_routes/' + psv_id)
  }

  deleteRoute(route_key: any, psv_id: any) {
    this.psv_routeRef = this.db.object('/psv_routes/' + psv_id + '/' + route_key);
    this.psv_routeRef.remove();
  }
   


}
