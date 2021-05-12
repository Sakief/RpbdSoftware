import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ZoneService } from 'src/app/services/zone.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-zone-update',
  templateUrl: './zone-update.component.html',
  styleUrls: ['./zone-update.component.scss'],
})
export class ZoneUpdateComponent implements OnInit {
  zoneForms: FormArray = this.fb.array([]);
  notification: any;
  constructor(
    private fb: FormBuilder,
    private zoneservice: ZoneService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.zoneservice.getZone().subscribe((res) => {
      if (res == []) this.addBrandForm();
      else {
        (res as []).forEach((zone: any) => {
          this.zoneForms.push(
            this.fb.group({
              zone_code: [zone.zone_code],
              zone_name: [zone.zone_name],
            })
          );
        });
      }
    });
  }

  addBrandForm() {
    this.zoneForms.push(
      this.fb.group({
        zone_code: ['', Validators.required],
        zone_name: ['', Validators.required],
      })
    );
  }

  zoneUpdate(fg: FormGroup) {
    this.zoneservice.updateZone(fg.value).subscribe((res: any) => {
      this.showNotification('update');
    });
  }
  onDelete(zone_code: number, i: any) {
    // if (brand_code == 0) this.brandForms.removeAt(i);
    //else if (confirm('Do you want to delete this outlet?'))
    this.zoneservice.deleteZone(zone_code).subscribe((res) => {
      confirm('Do you want to delete this zone?');
      this.zoneForms.removeAt(i);
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
