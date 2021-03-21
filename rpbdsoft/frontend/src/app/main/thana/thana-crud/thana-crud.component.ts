import { Component, OnInit } from '@angular/core';
import { ColumnApi, GridApi } from 'ag-grid-community';
import { ThanaService } from '../../../services/thana.service';

@Component({
  selector: 'app-thana-crud',
  templateUrl: './thana-crud.component.html',
  styleUrls: ['./thana-crud.component.scss']
})
export class ThanaCrudComponent implements OnInit {
  private api!: GridApi;
  private columnApi!: ColumnApi;
  event : any;
  gridApi: any;
  gridColumnApi: any;
  columnDefs: any;
  rowData: any;
  
  constructor(private thanaservice:ThanaService) 
  {
    this.columnDefs = this.createColumnDefs();

  }

  ngOnInit(): void {
    this.thanaservice.updateThana().subscribe(
      thanas => {
          this.rowData = thanas
      }
      // error => {
      //     console.log(error);
      // }
  )

  }

  onGridReady(params: { api: any; columnApi: any; }) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
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

  saveModifiedRows() {
    const allRowData: any[] = [];
    this.gridApi.forEachNode((node: { data: any; }) => allRowData.push(node.data));
    const modifiedRows = allRowData.filter(row => row['true']);
    // add API call to save modified rows

  }

  private createColumnDefs() {
    return [
      {headerName:"Thana Code" ,
       field: 'thana_code', 
       editable: true, 
       filter: true, 
       cellEditor:"richselect",
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
