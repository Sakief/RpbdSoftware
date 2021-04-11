import { Component, OnInit, Input } from '@angular/core';
import {  
  ToastrService  
} from 'ngx-toastr'; 
import { ZoneService } from '../../../services/zone.service';
import { Zone } from '../../../model/zone';
import {  
  ColDef,  
  GridApi,  
  ColumnApi  
} from 'ag-grid-community';
import {  
  Router  
} from '@angular/router'; 


@Component({
  selector: 'app-update-zone',
  templateUrl: './update-zone.component.html',
  styleUrls: ['./update-zone.component.scss']
})
export class UpdateZoneComponent implements OnInit {

  private gridApi : any;
  private gridColumnApi : any;

  @Input() zones: any = [];
  api: any;
  toastr: any;

  constructor(private zoneservice:ZoneService) { }

  ngOnInit(): void {
    this.zoneservice.getZone().subscribe(
      (data) => {
        this.zones = data;
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  editZone() {  
    debugger;  
    const d = this.api.getEditingCells();  
    if (this.api.getSelectedRows().length == 0) {  
        this.toastr.error("error", "Please select a Zone for update");  
        return;  
    }  
    var row = this.api.getSelectedRows();  
    this.zoneservice.updateZone(row[0]).subscribe(data => {  
        this.toastr.success("success", data);  
       this.ngOnInit();  
    });  
}

}
