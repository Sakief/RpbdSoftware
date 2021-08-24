import { Component, OnInit } from '@angular/core';
import { Thanadetailservice } from 'src/app/services/thanadetailreport.service';
import { ColumnApi, GridApi } from 'ag-grid-community';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-thanadetailreport',
  templateUrl: './thanadetailreport.component.html',
  styleUrls: ['./thanadetailreport.component.scss'],
})
export class ThanadetailreportComponent implements OnInit {
  rowData: any;
  columnDefs: any;

  crownRowData: any;
  crownColumnDefs: any;

  leadingRowData: any;
  leadingColumnDefs: any;

  private api!: GridApi;
  private columnApi!: ColumnApi;
  router: any;
  constructor(private thanadetailservice: Thanadetailservice) {
    this.columnDefs = this.ThanaDetailsReport();
    this.crownColumnDefs = this.CrownDetailsReport();
    this.leadingColumnDefs = this.LeadingBrandDetailReport();
  }

  ngOnInit(): void {
    this.thanadetailservice.getThanaDetailsReport().subscribe(
      (thanadetailreports) => {
        this.rowData = thanadetailreports;
      },
      (error) => {
        console.log(error);
      }
    );

    this.thanadetailservice.getCrownDetailReport().subscribe(
      (crowndetailreports) => {
        this.crownRowData = crowndetailreports;
      },
      (error) => {
        console.log(error);
      }
    );

    this.thanadetailservice.getLeadingBrandDetailReport().subscribe(
      (leadingdetailreports) => {
        this.leadingRowData = leadingdetailreports;
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

  private ThanaDetailsReport() {
    return [
      {
        headerName: 'Thana Name',
        field: 'thana_name',
        filter: true,
        resizable: true,
        sortable: true,
      },

      {
        headerName: 'Mokam',
        field: 'mokam',
        filter: true,
        resizable: true,
        sortable: true,
        aggFunc: 'sum',
        valueParser: 'Number(newValue)',
      },
      {
        headerName: 'Total Retail',

        field: 'total_retail',
        filter: true,
        resizable: true,
        sortable: true,
        aggFunc: 'sum',
        valueParser: 'Number(newValue)',
      },

      {
        headerName: 'Market Size',
        field: 'Market_Size',
        filter: true,
        resizable: true,
        sortable: true,
        aggFunc: 'sum',
        valueParser: 'Number(newValue)',
      },
    ];
  }

  private CrownDetailsReport() {
    return [
      {
        headerName: 'Thana Name',
        field: 'thana_name',
        filter: true,
        resizable: true,
        sortable: true,
      },

      {
        headerName: 'Mokam',
        field: 'crown_presence_mokam',
        filter: true,
        resizable: true,
        sortable: true,
        // editable: true,
        aggFunc: 'sum',
        valueParser: 'Number(newValue)',
      },

      {
        headerName: 'Retail',
        field: 'crown_retail',
        filter: true,
        resizable: true,
        sortable: true,
        aggFunc: 'sum',
        valueParser: 'Number(newValue)',
      },

      {
        headerName: 'Sales',
        field: 'crown_sales',
        filter: true,
        resizable: true,
        sortable: true,
        aggFunc: 'sum',
        valueParser: 'Number(newValue)',
      },
      {
        headerName: 'Share',
        field: 'Crown_Share',
        filter: true,
        resizable: true,
        sortable: true,
        aggFunc: 'sum',
        valueParser: 'Number(newValue)',
      },
    ];
  }

  private LeadingBrandDetailReport() {
    return [
      {
        headerName: 'Thana Name',
        field: 'thana_name',
        filter: true,
        resizable: true,
        sortable: true,
      },

      {
        headerName: 'Brand Name',
        field: 'brand_name',
        filter: true,
        resizable: true,
        sortable: true,
      },
      {
        headerName: 'Retail',
        field: 'LeadingBrandRetail',
        filter: true,
        resizable: true,
        sortable: true,
        aggFunc: 'sum',
        valueParser: 'Number(newValue)',
      },
      {
        headerName: 'Sales',
        field: 'LeadingBrandSales',
        filter: true,
        resizable: true,
        sortable: true,
        aggFunc: 'sum',
        valueParser: 'Number(newValue)',
      },
      {
        headerName: 'Share',
        field: 'Leading_brand_share',
        filter: true,
        resizable: true,
        sortable: true,
      },
    ];
  }
}
