import { Component, OnInit } from '@angular/core';
import { ThanaSalesReportService } from 'src/app/services/thanasalesreport.service';
import { ColumnApi, GridApi } from 'ag-grid-community';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-thanasales',
  templateUrl: './thanasales.component.html',
  styleUrls: ['./thanasales.component.scss'],
})
export class ThanasalesComponent implements OnInit {
  thanasalesrowData: any;
  thanasalesColumnDefs: any;

  private api!: GridApi;
  private columnApi!: ColumnApi;
  router: any;

  constructor(private thanasalesreportservice: ThanaSalesReportService) {
    this.thanasalesColumnDefs = this.ThanaSalesReport();
  }

  ngOnInit(): void {
    this.thanasalesreportservice.getThanaSalesReport().subscribe(
      (thanasalesreports) => {
        this.thanasalesrowData = thanasalesreports;
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

  private ThanaSalesReport() {
    return [
      {
        headerName: 'Thana Name',
        field: 'thana_name',
        rowGroup: true,
        groupHeader: 'Thana',
        hide: true,
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
      {
        headerName: 'Start Month Sales/Share',

        children: [
          {
            headerName: 'Month',
            field: 'start_month',
          },
          {
            headerName: 'Sales',
            field: 'volume_start',
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
