import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { PsvService } from '../psv.service';

@Component({
  selector: 'app-psv-home',
  templateUrl: './psv-home.page.html',
  styleUrls: ['./psv-home.page.scss'],
})
export class PsvHomePage implements OnInit {

  psvForm: FormGroup;  
  psvObj: any;
  bool:any;
  user = JSON.parse(localStorage.getItem('user'));
  constructor(public router: Router,
              public fb: FormBuilder,
              public psvService: PsvService) {}

  ngOnInit() {

    this.psvService.checkProfile(this.user.uid).on('value', (snapshot) => {
      let bool = snapshot.exists()
      this.setBool(bool);
      });

      this.psvService.getPsvProfile(this.user.uid).then((snapshot) => {
        let data = snapshot.val();
        this.setPsvObj(data); 
      });
    
    this.psvForm = this.fb.group({
      name: [''],      
      mobile: [''],
      registration: [''],
      vehicle_type: [''],
      mpesa_code: [''] 
    })
       
  }          
  
  setBool = (val) => {
    this.bool = val;
  };

  setPsvObj = (val) => {
    this.psvObj = val;
  }

  

  formSubmit() {
    if (!this.psvForm.valid) {
      return false;
    } else {
      this.psvService.createPsvProfile(this.psvForm.value, this.user.uid, this.user.email)
      this.psvService.getPsvProfile(this.user.uid).then((snapshot) => {
        let data = snapshot.val();
        this.setPsvObj(data); 
      });
      this.psvForm.reset();
        
    }
  }

}
