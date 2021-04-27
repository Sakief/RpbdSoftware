import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-crud',
  templateUrl: './profile-crud.component.html',
  styleUrls: ['./profile-crud.component.scss'],
})
export class ProfileCrudComponent implements OnInit {
  profileForms: FormArray = this.fb.array([]);

  constructor(
    private fb: FormBuilder,
    private profileservice: ProfileService
  ) {}

  ngOnInit(): void {
    this.addProfileForm();
  }

  addProfileForm() {
    this.profileForms.push(
      this.fb.group({
        outlet_id: ['', Validators.required],
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
    this.profileservice.createProfile(fg.value).subscribe((res: any) => {});
  }
}
