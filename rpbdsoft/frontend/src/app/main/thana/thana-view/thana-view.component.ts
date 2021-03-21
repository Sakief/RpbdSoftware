import {Component, OnInit} from '@angular/core';
import {ColDef, ColumnApi, GridApi} from 'ag-grid-community';
import {ThanaService} from '../../../services/thana.service';
import {AgGridModule} from 'ag-grid-angular';
//import {District} from '../model/district';


@Component({
    selector: 'app-thana-view',
    templateUrl: './thana-view.component.html',
    styleUrls: ['./thana-view.component.scss']
})
export class ThanaViewComponent implements OnInit {
    // row data and column definitions
    // row data and column definitions
    rowData : any;
    columnDefs : any;
    

    // gridApi and columnApi
    private api!: GridApi;
    private columnApi!: ColumnApi;
    gridApi: any;

    // inject the athleteService
    constructor(private thanaservice: ThanaService) {
        this.columnDefs = this.createColumnDefs();
    }

    // on init, subscribe to the athelete data
    ngOnInit() {
        this.thanaservice.getThana().subscribe(
            thanas => {
                this.rowData = thanas
            },
            error => {
                console.log(error);
            }
        )

        // this.thanaservice.updateThana().subscribe(
        //     thanas => {
        //         this.rowData = thanas
        //     },
        //     error => {
        //         console.log(error);
        //     }
        // )

    }

    onCellValueChanged(event:any) {
        //console.log(event) to test it
        event.data.modified = true;
      }
    
      getAllData() {
        let rowData: any[] = [];
        this.gridApi.forEachNode((node: { data: any; }) => rowData.push(node.data));
        return rowData;  
      }

    // one grid initialisation, grap the APIs and auto resize the columns to fit the available space
    onGridReady(params: { api: GridApi; columnApi: ColumnApi; }): void {
        this.api = params.api;
        this.columnApi = params.columnApi;

        this.api.sizeColumnsToFit();
    }

    saveModifiedRows() {
        const rowData: any[] = [];
        this.gridApi.forEachNode((node: { data: any; }) => rowData.push(node.data));
        const modifiedRows = rowData.filter(row => row['modified']);
        // add API call to save modified rows
    
      }

    // create some simple column definitions
    private createColumnDefs() {
        return [
          {headerName:"Thana Code" ,
           field: 'thana_code', 
           editable: true, 
           filter: true, 
           
           resizable: true, 
           sortable:true },
          
          {headerName:'Thana Name',
           field: 'thana_name',
           filter: true,
           editable:true,
           resizable: true,
           sortable: true
          }
            
        ]
    }
}