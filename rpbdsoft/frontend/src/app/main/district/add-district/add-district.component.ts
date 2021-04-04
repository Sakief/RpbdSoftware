import { Component, OnInit, Input } from '@angular/core';
import { Division } from '../../../model/division';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { DistrictService } from '../../../services/district.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-district',
  templateUrl: './add-district.component.html',
  styleUrls: ['./add-district.component.scss'],
})
export class AddDistrictComponent implements OnInit {
  districtform = new FormGroup({
    district_code: new FormControl(''),
    district_name: new FormControl(''),
  });

  constructor(
    private districtservice: DistrictService,
    private router: Router
  ) {}

  ngOnInit() {}

  addDistrict = () => {
    console.log(this.districtform.value);
    this.districtservice
      .createDistrict(
        this.districtform.value.district_code,
        this.districtform.value.district_name
      )
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  };
}
