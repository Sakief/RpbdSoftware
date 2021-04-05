import { Component, OnInit, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { ThanaService } from '../../services/thana.service'; 
// import { ThanaViewComponent } from './division-view/division-view.component';
import { ZoneListComponent } from './zone-list/zone-list.component';
import { AddZoneComponent } from './add-zone/add-zone.component';
import { ZoneService } from 'src/app/services/zone.service';
// import { AddDivisionComponent } from './add-division/add-division.component';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit {
  
  public add_zone = false

  @Input() zones: any = [];
 

  loadaddform()
  {
    this.add_zone = true;
  }
  
  constructor(
    
    private zoneservice:ZoneService
    ){}

  ngOnInit():void{
    
    this.zoneservice.getZone().subscribe(
      data => {
      this.zones = data;
      console.log(data);
      },
      error => console.log(error)
    );
    
    
  }

}
