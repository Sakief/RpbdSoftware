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
  private gridApi!: GridApi;

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

  onBtPrint() {
    const api = this.gridApi;
    setPrinterFriendly(api);
    setTimeout(function () {
      print();
      setNormal(api);
    }, 2000);
  }

  onGridReady(params: { api: GridApi; columnApi: ColumnApi }): void {
    this.api = params.api;
    this.columnApi = params.columnApi;
  }

  private MokamSalesReport() {
    return [
      {
        headerName: 'District Name',
        field: 'district_name',
        rowGroup: true,
        filter: true,
      },
      {
        headerName: 'Thana Name',
        field: 'thana_name',
        filter: true,
        rowGroup: true,
        hide: true,
      },

      {
        headerName: 'Market',
        field: 'market_name',
        rowGroup: true,
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
function setPrinterFriendly(api: GridApi) {
  const eGridDiv = document.querySelector('.my-grid') as HTMLElement;
  eGridDiv.style.height = '';
  api.setDomLayout('print');
}

function setNormal(api: GridApi) {
  const eGridDiv = document.querySelector('.my-grid') as HTMLElement;
  eGridDiv.style.width = '700px';
  eGridDiv.style.height = '200px';
  // api.setDomLayout(null);
}
