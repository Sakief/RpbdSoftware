import { Component, OnInit, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { ThanaService } from '../../services/thana.service'; 
// import { ThanaViewComponent } from './division-view/division-view.component';
import { ThanaViewComponent } from './thana-view/thana-view.component';
import { AddThanaComponent } from './add-thana/add-thana.component';
// import { AddDivisionComponent } from './add-division/add-division.component';

@Component({
  selector: 'app-thana',
  templateUrl: './thana.component.html',
  styleUrls: ['./thana.component.scss']
})
export class ThanaComponent implements OnInit {
  
  public add_thana = false

  @Input() thanas: any = [];

  loadaddform()
  {
    this.add_thana = true;
  }
  
  constructor(
    
    private thanaservice:ThanaService
    ){}

  ngOnInit():void{
    
    this.thanaservice.getThana().subscribe(
      data => {
      this.thanas = data;
      console.log(data);
      },
      error => console.log(error)
    );
    
    
  }

}
