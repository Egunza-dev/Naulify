import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { PsvService } from '../psv.service';
import { PsvAuthService } from '../psv-auth.service';

@Component({
  selector: 'app-edit-psv-profile',
  templateUrl: './edit-psv-profile.page.html',
  styleUrls: ['./edit-psv-profile.page.scss'],
})
export class EditPsvProfilePage implements OnInit {
  updatePsvProfileForm: FormGroup;
  user = JSON.parse(localStorage.getItem('user'));

  constructor(
    private psvService: PsvService,
    private authService: PsvAuthService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.psvService.getPsvProfile(this.user.uid).then((snapshot) => {
      let profile = snapshot.val();
      let value = {
        name: profile.name,
        email: this.user.email,
        mobile: profile.mobile,
        registration:profile.vehicle.registration,
        vehicle_type:profile.vehicle.type,
        mpesa_code:profile.vehicle.mpesa_code
        }
      this.updatePsvProfileForm.setValue(value);
    });
  }

  ngOnInit() {

    

    this.updatePsvProfileForm = this.fb.group({
      name: [''], 
      email:[''],     
      mobile: [''],
      registration: [''],
      vehicle_type: [''],
      mpesa_code: [''] 
    })
  }



updateForm() {
  this.psvService.updatePsvProfile(this.updatePsvProfileForm.value, this.user.uid, this.user.email)
    .then(() => {
      this.authService.displayToast('Update Successfull.')
      this.router.navigate(['/psv-dashboard/psv-dashboard/psv-home']);
    })
    .catch(error => this.authService.displayToast(error));
}

}
