import { Component, OnInit } from '@angular/core';
import { ColumnApi, GridApi } from 'ag-grid-community';
import { OverallMokamService } from 'src/app/services/overallmokam.service';
import 'ag-grid-enterprise';
@Component({
  selector: 'app-overallmokamsummaryreport',
  templateUrl: './overallmokamsummaryreport.component.html',
  styleUrls: ['./overallmokamsummaryreport.component.scss'],
})
export class OverallmokamsummaryreportComponent implements OnInit {
  overallMokamRowData: any;
  overallMokamColumnDefs: any;

  crownOverallMokamRowData: any;
  crownOverallMokamColumnDefs: any;

  leadningBrandOverallMokamRowData: any;
  leadingBrandOverallMokamColumnDefs: any;

  private api!: GridApi;
  private columnApi!: ColumnApi;
  router: any;

  constructor(private overallmokaservice: OverallMokamService) {
    this.overallMokamColumnDefs = this.OverallMokamDetailsReport();
    this.crownOverallMokamColumnDefs = this.OverallCrownMokamDetailsReport();
    this.leadingBrandOverallMokamColumnDefs = this.OverallLeadingMokamReport();
  }

  ngOnInit(): void {
    this.overallmokaservice.getMokamSummaryReport().subscribe(
      (overallmokamreports) => {
        this.overallMokamRowData = overallmokamreports;
      },
      (error) => {
        console.log(error);
      }
    );

    this.overallmokaservice.getCrownMokamSummaryReport().subscribe(
      (crownoverallmokamreports) => {
        this.crownOverallMokamRowData = crownoverallmokamreports;
      },
      (error) => {
        console.log(error);
      }
    );

    this.overallmokaservice.getLeadingBrandMokamSummaryReport().subscribe(
      (leadingoverallmokamreports) => {
        this.leadningBrandOverallMokamRowData = leadingoverallmokamreports;
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

  private OverallMokamDetailsReport() {
    return [
      {
        headerName: 'Thana Name',
        field: 'thana_name',
        resizable: true,
        sortable: true,
        rowGroup: true,
      },

      {
        headerName: 'Market Name',
        field: 'market_name',
        filter: true,
        resizable: true,
      },
      {
        headerName: 'Total Retail',
        field: 'total_retail',
        resizable: true,
        sortable: true,
        aggFunc: 'sum',
        valueParser: 'Number(newValue)',
      },
      {
        headerName: 'Market Size',
        field: 'Market_Size',
        sortable: true,
        aggFunc: 'sum',
        valueParser: 'Number(newValue)',
      },
    ];
  }

  private OverallCrownMokamDetailsReport() {
    return [
      {
        headerName: 'Thana',
        field: 'thana_name',
        filter: true,
        resizable: true,
      },

      {
        headerName: 'Mokam',
        field: 'market_name',
        resizable: true,
      },
      {
        headerName: 'Retail',
        field: 'crown_retail',
        resizable: true,
        sortable: true,
        aggFunc: 'sum',
        valueParser: 'Number(newValue)',
      },

      {
        headerName: 'Sales',
        field: 'crown_sales',
        resizable: true,
        sortable: true,
        aggFunc: 'sum',
        valueParser: 'Number(newValue)',
      },

      {
        headerName: 'Share',
        field: 'Crown_Share',
        resizable: true,
        sortable: true,
      },
    ];
  }

  private OverallLeadingMokamReport() {
    return [
      {
        headerName: 'Thana',
        field: 'thana_name',
        rowGroup: true,
        resizable: true,
      },

      {
        headerName: 'Market',
        field: 'market_name',
        resizable: true,
      },

      {
        headerName: 'Brand',
        field: 'brand_name',
        resizable: true,
        filter: true,
      },

      {
        headerName: 'Retail',
        field: 'LeadingBrandRetail',
        resizable: true,
        sortable: true,
        aggFunc: 'sum',
        valueParser: 'Number(newValue)',
      },

      {
        headerName: 'Sales',
        field: 'LeadingBrandSales',
        resizable: true,
        sortable: true,
        aggFunc: 'sum',
        valueParser: 'Number(newValue)',
      },

      {
        headerName: 'Share',
        field: 'Leading_brand_share',
        resizable: true,
        sortable: true,
      },
    ];
  }
}
