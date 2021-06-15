import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MerchandiseService } from 'src/app/services/merchandising.service';

@Component({
  selector: 'app-merch-create',
  templateUrl: './merch-create.component.html',
  styleUrls: ['./merch-create.component.scss'],
})
export class MerchCreateComponent implements OnInit {
  submitted = false;

  merchForm = new FormGroup({
    outlet_id: new FormControl('', Validators.required),
    visit_month: new FormControl(''),
    brands: this.fb.array([]),
  });

  constructor(
    private fb: FormBuilder,
    private merchservice: MerchandiseService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.merchForm = this.fb.group({
    //   outlet_id: '',
    //   visit_month: '',
    //   brands: this.fb.array([]),
    // });
  }

  brands(): FormArray {
    return this.merchForm.get('brands') as FormArray;
  }

  newBrands(): FormGroup {
    return this.fb.group({
      brand_code: ['', Validators.required],
      merchandising_tools: '',
      quantity: '',
    });
  }

  addBrand() {
    this.brands().push(this.newBrands());
  }

  removeBrand(i: number) {
    this.brands().removeAt(i);
  }

  // addMerch = () => {
  //   console.log(this.merchForm.value);
  //   this.merchservice
  //     .createMerchandise(
  //       this.merchForm.value.outlet_id,
  //       this.merchForm.value.visit_month,
  //       this.merchForm.value.brands
  //     )
  //     .subscribe(
  //       (result) => console.log(result),
  //       (error) => console.log(error)
  //     );
  // };

  addMerch(data: FormData) {
    this.merchservice.createMerchandise(data);
  }

  onSubmit() {
    console.log(this.merchForm.value);
  }
}
