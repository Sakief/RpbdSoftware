import { Component, OnInit, Input } from '@angular/core';
import { Division } from '../../../model/division';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { DivisionService } from '../../../services/division.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-division',
  templateUrl: './add-division.component.html',
  styleUrls: ['./add-division.component.scss'],
})
export class AddDivisionComponent implements OnInit {
  
  submitted  = false

  divisionform = new FormGroup({
    division_code: new FormControl('', Validators.required),
    division_name: new FormControl(''),
  });

  constructor(
    private divisionservice: DivisionService,
    private router: Router
  ) {}

  ngOnInit() {}

  

  addDivision = () => {
    console.log(this.divisionform.value);
    this.divisionservice
      .createDivision(
        this.divisionform.value.division_code,
        this.divisionform.value.division_name
      )
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  };

  get f(){
    return this.divisionform.controls;
  }

  onSubmit(){
    this.submitted = true;

    if (this.divisionform.invalid) {
      return;
  }
  }
}
