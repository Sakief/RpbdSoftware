import { Component, OnInit, Input } from '@angular/core';
import { Thana } from '../../../model/thana';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ThanaService } from '../../../services/thana.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-thana',
  templateUrl: './add-thana.component.html',
  styleUrls: ['./add-thana.component.scss'],
})
export class AddThanaComponent implements OnInit {
  thanaform = new FormGroup({
    thana_code: new FormControl(''),
    thana_name: new FormControl(''),
  });

  constructor(private thanaservice: ThanaService, private router: Router) {}

  ngOnInit() {}

  addThana = () => {
    console.log(this.thanaform.value);
    this.thanaservice
      .createThana(
        this.thanaform.value.thana_code,
        this.thanaform.value.thana_name
      )
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  };
}
