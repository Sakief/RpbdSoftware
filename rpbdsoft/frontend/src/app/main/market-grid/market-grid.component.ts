import { Component, OnInit } from '@angular/core';
import { MarketService } from 'src/app/services/market-point.service';
import { ColumnApi, GridApi } from 'ag-grid-community';

@Component({
  selector: 'app-market-grid',
  templateUrl: './market-grid.component.html',
  styleUrls: ['./market-grid.component.scss'],
})
export class MarketGridComponent implements OnInit {
  rowData: any;
  columnDefs: any;

  private api!: GridApi;
  private columnApi!: ColumnApi;
  router: any;

  constructor(private zoneservice: MarketService) {
    this.columnDefs = this.createColumnDefs();
  }

  ngOnInit(): void {
    this.zoneservice.getMarket().subscribe(
      (markets) => {
        this.rowData = markets;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onGridReady(params: { api: GridApi; columnApi: ColumnApi }): void {
    this.api = params.api;
    this.columnApi = params.columnApi;

    // this.api.sizeColumnsToFit();
  }

  private createColumnDefs() {
    return [
      {
        headerName: 'Market Code',
        field: 'market_code',
        editable: true,
        filter: true,
        resizable: true,
        sortable: true,
      },

      {
        headerName: 'Market Name',
        field: 'market_name',
        editable: true,
        filter: true,
        resizable: true,
        sortable: true,
      },
    ];
  }
}
