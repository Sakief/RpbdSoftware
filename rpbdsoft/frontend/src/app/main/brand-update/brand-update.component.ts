import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandService } from 'src/app/services/brand.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.scss'],
})
export class BrandUpdateComponent implements OnInit {
  brandForms: FormArray = this.fb.array([]);
  notification: any;
  constructor(
    private fb: FormBuilder,
    private brandservice: BrandService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.brandservice.getBrand().subscribe((res) => {
      if (res == []) this.addBrandForm();
      else {
        (res as []).forEach((brand: any) => {
          this.brandForms.push(
            this.fb.group({
              brand_code: [brand.brand_code],
              brand_name: [brand.brand_name],
              company_name: [brand.company_name],
            })
          );
        });
      }
    });
  }

  addBrandForm() {
    this.brandForms.push(
      this.fb.group({
        brand_code: ['', Validators.required],
        brand_name: ['', Validators.required],
        company_name: [''],
      })
    );
  }

  brandUpdate(fg: FormGroup) {
    this.brandservice.updateBrand(fg.value).subscribe((res: any) => {
      this.showNotification('update');
    });
  }
  onDelete(brand_code: number, i: any) {
    // if (brand_code == 0) this.brandForms.removeAt(i);
    //else if (confirm('Do you want to delete this outlet?'))
    this.brandservice.deleteBrand(brand_code).subscribe((res) => {
      confirm('Do you want to delete this brand?');
      this.brandForms.removeAt(i);
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
