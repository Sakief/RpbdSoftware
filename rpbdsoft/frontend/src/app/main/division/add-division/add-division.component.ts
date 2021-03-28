import { Component, OnInit, Input} from '@angular/core';
import { Division } from '../../../model/division';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';
import { DivisionService } from '../../../services/division.service';

@Component({
  selector: 'app-add-division',
  templateUrl: './add-division.component.html',
  styleUrls: ['./add-division.component.scss']
})
export class AddDivisionComponent implements OnInit {

  divisionform = new FormGroup({
    division_code : new FormControl(''),
    division_name : new FormControl('')
  });
 
 
  constructor(private divisionservice:DivisionService){

  }

  ngOnInit(){

  }

  addDivision=()=>{
    console.log(this.divisionform.value);
    this.divisionservice.createDivision(
    this.divisionform.value.division_code,this.divisionform.value.division_name).subscribe(
      result => console.log(result),
      error => console.log(error)
    );
      

  }

}
 
 
 
 
 
 
 
 
 
 
  // division_code : any;
  // division_name : any;
  
  // addDivisionForm = new FormGroup(
  //   this.division_code = new FormControl(''),
  //   DivisionName : new FormControl('')
  // );

  // }



  // [x: string]: any;
  // // addDivisionForm:any;
  // // form!: FormGroup 
  // // payload = '';

  // // divisions = {
  // //   division_code: '',
  // //   division_name: '',
  // // };
  // submitted = false;

  // FormGroup = this.addDivisionForm;
  // // add_division = []; 
  // // division_code!: string;
  // // division_name!: string
  
  // // division_code =  new FormControl('');
  // // division_name = new FormControl('');

  // constructor(private divisionservice:DivisionService) { }

  // ngOnInit(): void {
  // }

  // onSubmit() {
  //   // this.payload = JSON.stringify(this.divisions);

  //   this.divisionservice.addDivision(this.payload)
  //   .subscribe(
  //     (response) => console.log(response),
  //     (error) => console.log(error)
  //   );

  // }







