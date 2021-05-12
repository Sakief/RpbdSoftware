import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserStack } from 'protractor/built/driverProviders';
import { ZoneService } from 'src/app/services/zone.service';

@Component({
  selector: 'app-zone-create',
  templateUrl: './zone-create.component.html',
  styleUrls: ['./zone-create.component.scss'],
})
export class ZoneCreateComponent implements OnInit {
  zoneForms: FormArray = this.fb.array([]);
  notification: any;

  constructor(
    private fb: FormBuilder,
    private zoneservice: ZoneService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addZoneForm() {
    this.zoneForms.push(
      this.fb.group({
        zone_code: ['', Validators.required],
        zone_name: [''],
      })
    );
  }

  zoneSubmit(fg: FormGroup) {
    this.zoneservice.createZone(fg.value).subscribe((res: any) => {
      fg.patchValue({ zone_code: res.zone_code });
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
