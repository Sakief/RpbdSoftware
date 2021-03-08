import {Component, OnInit} from '@angular/core';
import {ColDef, ColumnApi, GridApi} from 'ag-grid-community';
import {DivisionService} from '../../../services/division.service';
//import {Division} from '../../../model/division';


@Component({
    selector: 'app-division-view',
    templateUrl: './division-view.component.html',
    styleUrls: ['./division-view.component.scss']
})
export class DivisionViewComponent implements OnInit {
    // row data and column definitions
    // row data and column definitions
    rowData : any;
    columnDefs : any;
    

    // gridApi and columnApi
    private api!: GridApi;
    private columnApi!: ColumnApi;

    // inject the athleteService
    constructor(private divisionservice: DivisionService) {
        this.columnDefs = this.createColumnDefs();
    }

    // on init, subscribe to the athelete data
    ngOnInit() {
        this.divisionservice.getDivisions().subscribe(
            divisions => {
                this.rowData = divisions
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
          {
            headerName:"Division Code" ,
            field: 'division_code', 
            editable: true, 
            filter: true, 
            resizable: true, 
            sortable:true 
          },
          
          {
            headerName:'Division Name',
            field: 'division_name',
            filter: true,
            resizable: true,
            sortable: true
          }
            
        ]
    }
}