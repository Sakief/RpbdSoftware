import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-create',
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.scss'],
})
export class ProfileCreateComponent implements OnInit {
  profileForms: FormArray = this.fb.array([]);
  notification: any;

  constructor(
    private fb: FormBuilder,
    private profileservice: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addProfileForm() {
    this.profileForms.push(
      this.fb.group({
        outlet_id: ['', Validators.required],
        outlet_type_id: [''],
        outlet_name: [''],
        owner_name: [''],
        holding_no: [''],
        road_name: [''],
        block_no: [''],
        village: [''],
        union: [''],
        post_office: [''],
        market_code: ['', Validators.required],
        zone_code: ['', Validators.required],
        thana_code: ['', Validators.required],
        district_code: ['', Validators.required],
        division_code: ['', Validators.required],
        outlet_type: [''],
        manager_name: [],
        respondent_designation: [],
        contact_no1: [],
        contact_no2: [],
        contact_no3: [],
        total_staff: [],
        outlet_landmark: [],
        gps_lat: [],
        gps_long: [],
        storage_capacity: [],
        front_length: [],
        front_width: [],
        weekly_holiday: [],
        nid: [],
        survey_by: [],
        entry_by: [],
        visit_date: [],
      })
    );
  }

  profileSubmit(fg: FormGroup) {
    this.profileservice.createProfile(fg.value).subscribe((res: any) => {
      fg.patchValue({ outlet_id: res.outlet_id });
      this.showNotification('insert');
    });
  }

  showNotification(category: any) {
    switch (category) {
      case 'insert':
        this.notification = { class: 'text-success', message: 'saved!' };
        break;

      default:
        break;
    }
    setTimeout(() => {
      this.notification = null;
    }, 2000);
  }
}
