import { Component, OnInit } from '@angular/core';
import { OutletSalesReportService } from 'src/app/services/outletsalesreport.service';
import { ColumnApi, GridApi } from 'ag-grid-community';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-outletsales',
  templateUrl: './outletsales.component.html',
  styleUrls: ['./outletsales.component.scss'],
})
export class OutletsalesComponent implements OnInit {
  outletsalesrowData: any;
  outletsalesColumnDefs: any;

  private api!: GridApi;
  private columnApi!: ColumnApi;
  private gridApi!: GridApi;

  router: any;

  constructor(private outletsalesreportservice: OutletSalesReportService) {
    this.outletsalesColumnDefs = this.OutletSalesReport();
  }

  ngOnInit(): void {
    this.outletsalesreportservice.getOutletSalesReport().subscribe(
      (outletsalesreport) => {
        this.outletsalesrowData = outletsalesreport;
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

  private OutletSalesReport() {
    return [
      {
        headerName: 'District Name',
        field: 'district_name',
        rowGroup: true,
        filter: true,
        resizable: true,
      },
      {
        headerName: 'Thana Name',
        field: 'thana_name',
        rowGroup: true,
      },

      {
        headerName: 'Mokam',
        field: 'market_name',
        rowGroup: true,
      },

      {
        headerName: 'Outlet Name',
        field: 'outlet_name',
        filter: true,
        resizable: true,
      },

      {
        headerName: 'Brand',
        field: 'brand_name',
        filter: true,
        resizable: true,
      },

      {
        headerName: 'End Month Sales Volume/Share',

        children: [
          {
            headerName: 'Month Name',
            field: 'end_month',
            filter: true,
          },
          {
            headerName: 'Sales',
            field: 'volume_end',
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
        headerName: 'Start Month Sales/Share',
        children: [
          {
            headerName: 'Month Name',
            field: 'start_month',
            filter: true,
          },
          {
            headerName: 'Sales',
            field: 'volume_start',
            sortable: true,
            resizable: true,
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
