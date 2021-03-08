import {Component, OnInit} from '@angular/core';
import {ColDef, ColumnApi, GridApi} from 'ag-grid-community';
import {DistrictService} from '../../../services/district.service';
//import {District} from '../model/district';


@Component({
    selector: 'app-district-view',
    templateUrl: './district-view.component.html',
    styleUrls: ['./district-view.component.scss']
})
export class DistrictViewComponent implements OnInit {
    // row data and column definitions
    // row data and column definitions
    rowData : any;
    columnDefs : any;
    

    // gridApi and columnApi
    private api!: GridApi;
    private columnApi!: ColumnApi;

    // inject the athleteService
    constructor(private districtservice: DistrictService) {
        this.columnDefs = this.createColumnDefs();
    }

    // on init, subscribe to the athelete data
    ngOnInit() {
        this.districtservice.getDistrict().subscribe(
            districts => {
                this.rowData = districts
            },
            error => {
                console.log(error);
            }
        )
    }

    // one grid initialisation, grap the APIs and auto resize the columns to fit the available space
    onGridReady(params: { api: GridApi; columnApi: ColumnApi; }): void {
        this.api = params.api;
        this.columnApi = params.columnApi;

        this.api.sizeColumnsToFit();
    }

    // create some simple column definitions
    private createColumnDefs() {
        return [
          {headerName:"District Code" ,
           field: 'district_code', 
           editable: true, 
           filter: true, 
           resizable: true, 
           sortable:true },
          
          {headerName:'District Name',
           field: 'district_name',
           filter: true,
           resizable: true,
           sortable: true
          }
            
        ]
    }
}