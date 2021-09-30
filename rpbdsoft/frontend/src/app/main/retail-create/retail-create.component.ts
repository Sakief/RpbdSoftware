import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RetailService } from 'src/app/services/retail.service';

@Component({
  selector: 'app-retail-create',
  templateUrl: './retail-create.component.html',
  styleUrls: ['./retail-create.component.scss'],
})
export class RetailCreateComponent implements OnInit {
  retailForms: FormArray = this.fb.array([]);
  notification: any;

  constructor(
    private fb: FormBuilder,
    private retailservice: RetailService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addRetailForm() {
    this.retailForms.push(
      this.fb.group({
        outlet_id: ['', Validators.required],
        start_month: ['', Validators.required],
        end_month: ['', Validators.required],
        visit_year: [''],
        brand_code: ['', Validators.required],
        vb: [''],
        start_month_volume: [''],
        end_month_volume: [''],
        purchase_min: [''],
        purchase_max: [''],
        sales_min: [''],
        sales_max: [''],
        purchase_source: ['', Validators.required],
        do_to_delivery: [''],
        monthly_credit: [''],
      })
    );
  }

  retailSubmit(fg: FormGroup) {
    this.retailservice.createRetail(fg.value).subscribe((res: any) => {
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
