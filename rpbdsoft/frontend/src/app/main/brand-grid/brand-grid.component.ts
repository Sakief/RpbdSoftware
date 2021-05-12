import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { ColumnApi, GridApi } from 'ag-grid-community';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-grid',
  templateUrl: './brand-grid.component.html',
  styleUrls: ['./brand-grid.component.scss'],
})
export class BrandGridComponent implements OnInit {
  rowData: any;
  columnDefs: any;

  private api!: GridApi;
  private columnApi!: ColumnApi;
  router: any;

  constructor(private brandservice: BrandService) {
    this.columnDefs = this.createColumnDefs();
  }

  ngOnInit(): void {
    this.brandservice.getBrand().subscribe(
      (brands) => {
        this.rowData = brands;
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
        headerName: 'Brand Code',
        field: 'brand_code',
        editable: true,
        filter: true,
        resizable: true,
        sortable: true,
      },

      {
        headerName: 'Brand Name',
        field: 'brand_name',
        editable: true,
        filter: true,
        resizable: true,
        sortable: true,
      },
      {
        headerName: 'Company Name',
        field: 'company_name',
        editable: true,
        filter: true,
        resizable: true,
        sortable: true,
      },
    ];
  }
}
