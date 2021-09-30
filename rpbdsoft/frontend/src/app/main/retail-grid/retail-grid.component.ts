import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-community';
import { RetailService } from '../../services/retail.service';

@Component({
  selector: 'app-retail-grid',
  templateUrl: './retail-grid.component.html',
  styleUrls: ['./retail-grid.component.scss'],
})
export class RetailGridComponent implements OnInit {
  rowData: any;
  columnDefs: any;

  // gridApi and columnApi
  private api!: GridApi;
  private columnApi!: ColumnApi;
  router: any;

  // @Output() new createNewDivision = new EventEmitter();

  // inject the athleteService
  constructor(private retailservice: RetailService) {
    this.columnDefs = this.createColumnDefs();
  }

  // on init, subscribe to the athelete data
  ngOnInit() {
    this.retailservice.getRetail().subscribe(
      (retails) => {
        this.rowData = retails;
      },
      (error) => {
        console.log(error);
      }
    );

    // newDivision(){
    //     this.createNewDivision.emit();
    // }
  }
  // before grid initialised

  // one grid initialisation, grap the APIs and auto resize the columns to fit the available space
  onGridReady(params: { api: GridApi; columnApi: ColumnApi }): void {
    this.api = params.api;
    this.columnApi = params.columnApi;

    // this.api.sizeColumnsToFit();
  }

  // create some simple column definitions
  private createColumnDefs() {
    return [
      {
        headerName: 'Outlet ID',
        field: 'outlet_id',
        editable: true,
        filter: true,
        resizable: true,
        sortable: true,
      },
      {
        headerName: 'Start Month',
        field: 'start_month',
        editable: true,
        filter: true,
        resizable: true,
        sortable: true,
      },

      {
        headerName: 'End Month',
        field: 'end_month',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Visit Year',
        field: 'visit_year',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Brand Code',
        field: 'brand_code',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Visible Brand',
        field: 'vb',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Start Month Volume',
        field: 'start_month_volume',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'End Month Volume',
        field: 'end_month_volume',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Purchase Minimum',
        field: 'purchase_min',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Purchase Maximum',
        field: 'purchase _max',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Sales Min',
        field: 'sales_min',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Sales Max',
        field: 'sales_max',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Purchase Source',
        field: 'purchase_source',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Satisfaction Level',
        field: 'satisfaction_level',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },
      {
        headerName: 'Do to Delivery',
        field: 'do_to_delivery',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Monthly Credit',
        field: 'monthly_credit',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },
    ];
  }
}
