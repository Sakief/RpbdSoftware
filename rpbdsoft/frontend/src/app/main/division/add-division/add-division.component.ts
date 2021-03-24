import { Component, OnInit, Input} from '@angular/core';
import { Division } from '../../../model/division';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-division',
  templateUrl: './add-division.component.html',
  styleUrls: ['./add-division.component.scss']
})
export class AddDivisionComponent implements OnInit {
  addDivisionForm = FormGroup;
  add_division = []; 
  
  division_code =  new FormControl('');
  division_name = new FormControl('');


 
  constructor(private div: FormBuilder) { }

  ngOnInit(): void {
   
    }


  }




