import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserStack } from 'protractor/built/driverProviders';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-create',
  templateUrl: './brand-create.component.html',
  styleUrls: ['./brand-create.component.scss'],
})
export class BrandCreateComponent implements OnInit {
  brandForms: FormArray = this.fb.array([]);
  notification: any;

  constructor(
    private fb: FormBuilder,
    private brandservice: BrandService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addBrandForm() {
    this.brandForms.push(
      this.fb.group({
        brand_code: ['', Validators.required],
        brand_name: [''],
        company_name: [],
      })
    );
  }

  brandSubmit(fg: FormGroup) {
    this.brandservice.createBrand(fg.value).subscribe((res: any) => {
      fg.patchValue({ brand_code: res.brand_code });
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
