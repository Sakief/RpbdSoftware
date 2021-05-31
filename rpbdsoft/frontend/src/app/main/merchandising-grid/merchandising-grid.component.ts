import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-community';
import { MerchandiseService } from '../../services/merchandising.service';
import { Merchandising } from '../../model/merchandising';

@Component({
  selector: 'app-merchandising-grid',
  templateUrl: './merchandising-grid.component.html',
  styleUrls: ['./merchandising-grid.component.scss'],
})
export class MerchandisingGridComponent implements OnInit {
  rowData: any;
  columnDefs: any;
  isExpanded = true;

  private api!: GridApi;
  private columnApi!: ColumnApi;
  router: any;

  constructor(private merchservice: MerchandiseService) {
    this.columnDefs = this.createColumnDefs();
  }

  ngOnInit(): void {
    this.merchservice.getMerchandise().subscribe(
      (merchandises) => {
        this.rowData = merchandises;
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
        headerName: ' Outlet ID ',
        field: 'outlet_id',
        editable: true,
        filter: true,
        resizable: true,
        sortable: true,
      },

      {
        headerName: 'Visit Month',
        field: 'date',
        editable: true,
        filter: true,
        resizable: true,
        sortable: true,
      },
      {
        headerName: 'Brand Code',
        field: 'brand_code',
        editable: true,
        filter: true,
        resizable: true,
        sortable: true,
      },
      {
        headerName: 'Merchandising Tools',
        field: 'merchandising_tools',
        editable: true,
        filter: true,
        resizable: true,
        sortable: true,
      },
      {
        headerName: 'Quantity',
        field: 'quantity',
        editable: true,
        filter: true,
        resizable: true,
        sortable: true,
      },
    ];
  }
}
