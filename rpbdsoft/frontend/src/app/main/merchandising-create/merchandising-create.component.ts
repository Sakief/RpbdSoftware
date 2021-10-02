import { Component, Injectable, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MerchandiseService } from 'src/app/services/merchandising.service';

@Component({
  selector: 'app-merchandising-create',
  templateUrl: './merchandising-create.component.html',
  styleUrls: ['./merchandising-create.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class MerchandisingCreateComponent implements OnInit {
  merchandisingForms: FormArray = this.fb.array([]);
  notification: any;

  constructor(
    private fb: FormBuilder,
    private merchandisingservice: MerchandiseService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addMerchandiseForm() {
    this.merchandisingForms.push(
      this.fb.group({
        outlet_id: ['', Validators.required],
        visit_start_month: ['', Validators.required],
        visit_end_month: ['', Validators.required],
        brand_code: ['', Validators.required],
        Quantity: [''],
      })
    );
  }

  merchandisingSubmit(fg: FormGroup) {
    this.merchandisingservice
      .createMerchandise(fg.value)
      .subscribe((res: any) => {
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
