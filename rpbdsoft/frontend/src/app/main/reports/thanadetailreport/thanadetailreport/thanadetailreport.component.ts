import { Component, OnInit } from '@angular/core';
import { Thanadetailservice } from 'src/app/services/thanadetailreport.service';
import { ColumnApi, GridApi } from 'ag-grid-community';

@Component({
  selector: 'app-thanadetailreport',
  templateUrl: './thanadetailreport.component.html',
  styleUrls: ['./thanadetailreport.component.scss'],
})
export class ThanadetailreportComponent implements OnInit {
  rowData: any;
  columnDefs: any;

  private api!: GridApi;
  private columnApi!: ColumnApi;
  router: any;
  constructor(private thanadetailservice: Thanadetailservice) {
    this.columnDefs = this.ThanaDetailsReport();
  }

  ngOnInit(): void {
    this.thanadetailservice.getThanaDetailsReport().subscribe(
      (thanadetailreports) => {
        this.rowData = thanadetailreports;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onGridReady(params: { api: GridApi; columnApi: ColumnApi }): void {
    this.api = params.api;
    this.columnApi = params.columnApi;
  }

  private ThanaDetailsReport() {
    return [
      {
        headerName: 'Thana Name',
        field: 'thana_name',
        filter: true,
        resizable: true,
        sortable: true,
      },
    ];
  }
}
