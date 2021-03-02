import { Component, OnInit } from '@angular/core';
import { DivisionService } from '../../services/division.service'; 

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent implements OnInit {

  constructor(private divisionservice:DivisionService) {
    
  }

  ngOnInit(): void {
  }

}
