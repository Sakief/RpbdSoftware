import { Component, OnInit } from '@angular/core';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-community';
import { MarketService } from '../../../services/market-point.service';
//import {Division} from '../../../model/division';

@Component({
  selector: 'app-market-point-view',
  templateUrl: './market-point-view.component.html',
  styleUrls: ['./market-point-view.component.scss'],
})
export class MarketViewComponent implements OnInit {
  // row data and column definitions
  // row data and column definitions
  rowData: any;
  columnDefs: any;

  // gridApi and columnApi
  private api!: GridApi;
  private columnApi!: ColumnApi;

  // inject the athleteService
  constructor(private marketpointservice: MarketService) {
    this.columnDefs = this.createColumnDefs();
  }

  // on init, subscribe to the athelete data
  ngOnInit() {
    this.marketpointservice.getMarket().subscribe(
      (markets) => {
        this.rowData = markets;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // one grid initialisation, grap the APIs and auto resize the columns to fit the available space
  onGridReady(params: { api: GridApi; columnApi: ColumnApi }): void {
    this.api = params.api;
    this.columnApi = params.columnApi;

    this.api.sizeColumnsToFit();
  }

  // create some simple column definitions
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
        filter: true,
        resizable: true,
        sortable: true,
      },
    ];
  }
}
