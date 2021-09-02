import { Component, OnInit } from '@angular/core';
import { MokamSalesReportService } from 'src/app/services/mokamsalesreport.service';
import { ColumnApi, GridApi } from 'ag-grid-community';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-market-sales',
  templateUrl: './market-sales.component.html',
  styleUrls: ['./market-sales.component.scss'],
})
export class MarketSalesComponent implements OnInit {
  mokamsalesrowData: any;
  mokamsalesColumnDefs: any;

  private api!: GridApi;
  private columnApi!: ColumnApi;
  router: any;

  constructor(private mokamsalesreportservice: MokamSalesReportService) {
    this.mokamsalesColumnDefs = this.MokamSalesReport();
  }

  ngOnInit(): void {
    this.mokamsalesreportservice.getMokamSalesReport().subscribe(
      (mokamsalesreports) => {
        this.mokamsalesrowData = mokamsalesreports;
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

  private MokamSalesReport() {
    return [
      {
        headerName: 'Thana Name',
        field: 'thana_name',
        rowGroup: true,
      },

      {
        headerName: 'Market',
        field: 'market_name',
        rowGroup: true,
      },
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
            headerName: 'MonthName',
            field: 'end_month',
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
    ];
  }
}
