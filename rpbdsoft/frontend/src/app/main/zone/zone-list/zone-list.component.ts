import { Component, OnInit } from '@angular/core';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-community';
import { ZoneService } from '../../../services/zone.service';
import { AgGridModule } from 'ag-grid-angular';
import { Zone } from '../../../model/zone';
// import { toastr } from '../../../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-zone-list',
  templateUrl: './zone-list.component.html',
  styleUrls: ['./zone-list.component.scss'],
})
export class ZoneListComponent implements OnInit {
  // row data and column definitions
  // row data and column definitions
  rowData: any;
  columnDefs: any;
  

  // gridApi and columnApi
  private api!: GridApi;
  private columnApi!: ColumnApi;
  toastr: any;
  

  // inject the athleteService
  constructor(private zoneservice: ZoneService) {
    this.columnDefs = this.createColumnDefs();
  }

  // on init, subscribe to the athelete data
  ngOnInit() {
    this.zoneservice.getZone().subscribe(
      (zones) => {
        this.rowData = zones;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // one grid initialisation, grap the APIs and auto resize the columns to fit the available space
  onGridReady(params: { api: GridApi; columnApi: ColumnApi }): void {
    this.api = params.api;
    this.columnApi = params.columnApi;

    this.api.sizeColumnsToFit();
  }

  // onCellValueChanged(event) {
  //   //console.log(event) to test it
  //   event.data.modified = true;
  // }
  // saveModifiedRows() {
  //   const allRowData = [];
  //   this.gridApi.forEachNode(node => allRowData.push(node.data));
  //   const modifiedRows = allRowData.filter(row => row['modified']);
  //   // add API call to save modified rows

  // }

  // create some simple column definitions
  private createColumnDefs() {
    return [
      {
        headerName: 'Zone Code',
        field: 'zone_code',
        editable: true,
        filter: true,
        resizable: true,
        sortable: true,
      },

      {
        headerName: 'Zone Name',
        field: 'zone_name',
        filter: true,
        resizable: true,
        sortable: true,
      },
    ];
  }
 

  

}
