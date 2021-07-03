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
  
  psv_profileRef:AngularFireObject<any>;
  psv_profileListRef:AngularFireList<any>;
  database = firebase.database();
  userId = JSON.parse(localStorage.getItem('user')).uid;
  email = JSON.parse(localStorage.getItem('user')).email;
  psvProfile: any;  

  constructor(private db: AngularFireDatabase,
              public router: Router,
              public authservice: PsvAuthService,) { 
                this.checkProfile
              }

  
  
   checkProfile(){   
        return this.database.ref('psv_profile/' + this.userId); 
    } 
  // Create PSV Profile
  createPsvProfile(profile) {
    this.database.ref('psv_profile/' + this.userId).set({
      name: profile.name,
      email: this.email,
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
  getPsvProfile() {            
    return firebase.database().ref('psv_profile/' + this.userId).once("value");    
  }

  updatePsvProfile(profile) {
  
  let value = {
    name: profile.name,
    email: this.email,
    mobile: profile.mobile,
    vehicle:{
      registration:profile.registration,
      type:profile.vehicle_type,
      mpesa_code:profile.mpesa_code
    }}

  let updates = {};
  updates['psv_profile/' + this.userId] = value;
  
  return firebase.database().ref().update(updates);
  }



}
