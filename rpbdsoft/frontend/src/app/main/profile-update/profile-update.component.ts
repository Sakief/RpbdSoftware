import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss'],
})
export class ProfileUpdateComponent implements OnInit {
  profileForms: FormArray = this.fb.array([]);
  notification: any;
  constructor(
    private fb: FormBuilder,
    private profileservice: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.profileservice.getProfile().subscribe((res) => {
      if (res == []) this.addProfileForm();
      else {
        (res as []).forEach((profile: any) => {
          this.profileForms.push(
            this.fb.group({
              outlet_id: [profile.outlet_id],
              outlet_type_id: [profile.outlet_type_id],
              outlet_name: [profile.outlet_name],
              owner_name: [profile.owner_name],
              holding_no: [profile.holding_no],
              road_name: [profile.road_name],
              block_no: [profile.block_no],
              village: [profile.village],
              union: [profile.union],
              post_office: [profile.post_office],
              market_code: [profile.market_code],
              zone_code: [profile.zone_code],
              thana_code: [profile.thana_code],
              district_code: [profile.district_code],
              outlet_type: [profile.outlet_type],
              manager_name: [profile.manager_name],
              respondent_designation: [profile.respondent_designation],
              contact_no1: [profile.contact_no1],
              contact_no2: [profile.contact_no2],
              contact_no3: [profile.contact_no3],
              total_staff: [profile.total_staff],
              outlet_landmark: [profile.outlet_landmark],
              gps_lat: [profile.gps_lat],
              gps_long: [profile.gps_long],
              storage_capacity: [profile.storage_capacity],
              front_length: [profile.front_length],
              front_width: [profile.front_width],
              weekly_holiday: [profile.weekly_holiday],
              nid: [profile.nid],
              survey_by: [profile.survey_by],
              entry_by: [profile.entry_by],
              visit_date: [profile.visit_date],
            })
          );
        });
      }
    });
  }

  addProfileForm() {
    this.profileForms.push(
      this.fb.group({
        outlet_id: ['', Validators.required],
        outlet_type_id: ['', Validators.required],
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
        manager_name: [''],
        respondent_designation: [''],
        contact_no1: [''],
        contact_no2: [''],
        contact_no3: [''],
        total_staff: [''],
        outlet_landmark: [''],
        gps_lat: [''],
        gps_long: [''],
        storage_capacity: [''],
        front_length: [''],
        front_width: [''],
        weekly_holiday: [''],
        nid: [''],
        survey_by: [''],
        entry_by: [''],
        visit_date: [''],
      })
    );
  }

  profileUpdate(fg: FormGroup) {
    this.profileservice.updateProfile(fg.value).subscribe((res: any) => {
      this.showNotification('update');
    });
  }
  onDelete(outlet_id: number, i: any) {
    // if (brand_code == 0) this.brandForms.removeAt(i);
    //else if (confirm('Do you want to delete this outlet?'))
    this.profileservice.deleteProfile(outlet_id).subscribe((res) => {
      confirm('Do you want to delete this profile?');
      this.profileForms.removeAt(i);
      this.showNotification('delete');
    });
  }
  showNotification(category: any) {
    switch (category) {
      case 'update':
        this.notification = { class: 'text-primary', message: 'updated!' };
        break;
      case 'delete':
        this.notification = { class: 'text-danger', message: 'deleted!' };
        break;

      default:
        break;
    }
    setTimeout(() => {
      this.notification = null;
    }, 2000);
  }
}