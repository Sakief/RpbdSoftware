import { Component, OnInit } from '@angular/core';
import { DistrictReportService } from 'src/app/services/districtreportservice';
import { ColumnApi, GridApi } from 'ag-grid-community';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-districtreport',
  templateUrl: './districtreport.component.html',
  styleUrls: ['./districtreport.component.scss'],
})
export class DistrictReportComponent implements OnInit {
  districtsalesrowData: any;
  districtsalesColumnDefs: any;

  private api!: GridApi;
  private columnApi!: ColumnApi;
  router: any;

  constructor(private districtreportservice: DistrictReportService) {
    this.districtsalesColumnDefs = this.DistrictSalesReport();
  }

  ngOnInit(): void {
    this.districtreportservice.getDistrictReport().subscribe(
      (districtreports) => {
        this.districtsalesrowData = districtreports;
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

  private DistrictSalesReport() {
    return [
      {
        headerName: 'Brand Name',
        field: 'brand_name',
        filter: true,
        resizable: true,
        sortable: true,
      },

      {
        headerName: 'Sales Volume',
        children: [
          {
            field: 'end_month',
          },
        ],
      },
    ];
  }
}
