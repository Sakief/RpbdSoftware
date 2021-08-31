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
        headerName: 'End Month Sales Volume/Share',

        children: [
          {
            headerName: 'End Month',
            field: 'end_month',
          },
          {
            headerName: 'Sales',
            field: 'end_month_sale_volume',
            sortable: true,
            resizable: true,
            aggFunc: 'sum',
            valueParser: 'Number(newValue)',
          },
          {
            headerName: 'Share',
            field: 'end_month_ms',
            sortable: true,
            resizable: true,
          },
        ],
      },
      {
        headerName: 'Start Month Sales Volume',
        children: [
          {
            headerName: 'Start Month',
            field: 'start_month',
          },
          {
            headerName: 'Sales',
            field: 'start_month_sale_volume',
            sortable: true,
            resizable: true,
            aggFunc: 'sum',
            valueParser: 'Number(newValue)',
          },
          {
            headerName: 'Share',
            field: 'start_month_ms',
            sortable: true,
            resizable: true,
          },
        ],
      },
    ];
  }
}
