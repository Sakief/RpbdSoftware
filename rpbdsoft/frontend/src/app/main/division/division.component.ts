import { Component, OnInit } from '@angular/core';
import { DivisionService } from '../../services/division.service'; 

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent implements OnInit {
  [divisions: string]: any;
 

  constructor(
    
    private divisionservice:DivisionService
    ){}

  ngOnInit():void{
    
    this.divisionservice.getDivisions().subscribe(
      data => {
      this.divisions = data;
      console.log(data);
      },
      error => console.log(error)
    );
  }

}
