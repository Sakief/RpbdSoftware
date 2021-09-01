import { Component, OnInit } from '@angular/core';
import { ThanaRetailsReportService } from 'src/app/services/thanaretailsreports.service';
import { ColumnApi, GridApi } from 'ag-grid-community';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-thanaretails',
  templateUrl: './thanaretails.component.html',
  styleUrls: ['./thanaretails.component.scss'],
})
export class ThanaretailsComponent implements OnInit {
  startretailsrowData: any;
  startretailscolumnDefs: any;

  endretailsrowData: any;
  endretailscolumnDefs: any;

  private api!: GridApi;
  private columnApi!: ColumnApi;
  router: any;

  constructor(private thretailservice: ThanaRetailsReportService) {
    this.endretailscolumnDefs = this.ThanaEndRetailsReport();
    this.startretailscolumnDefs = this.ThanaStartRetailsReport();
  }

  ngOnInit(): void {
    this.thretailservice.getThanaEndRetailsReport().subscribe(
      (thanaendretailsreport) => {
        this.endretailsrowData = thanaendretailsreport;
      },
      (error) => {
        console.log(error);
      }
    );

    this.thretailservice.getThanaStartRetailsReport().subscribe(
      (thanastartretailreport) => {
        this.startretailsrowData = thanastartretailreport;
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

  private ThanaEndRetailsReport() {
    return [
      {
        headerName: 'End Month Retail Counts',
        children: [
          {
            headerName: 'Thana Name',
            field: 'thana_name',
            rowGroup: true,
            hide: true,
          },
          {
            headerName: 'Brand Name',
            field: 'brand_name',
            filter: true,
            resizablbe: true,
            sortable: true,
          },
          {
            headerName: 'Month',
            field: 'end_month',
            flter: true,
            resizable: true,
          },
          {
            headerName: 'Retail',
            field: 'end_retail_counts',
            sortable: true,
            resizable: true,
          },
        ],
      },
    ];
  }

  private ThanaStartRetailsReport() {
    return [
      {
        headerName: 'Start Month Retail Counts',
        children: [
          {
            headerName: 'Thana Name',
            field: 'thana_name',
            rowGroup: true,
            hide: true,
          },
          {
            headerName: 'Brand Name',
            field: 'brand_name',
            filter: true,
            resizablbe: true,
            sortable: true,
          },
          {
            headerName: 'Month',
            field: 'start_month',
            flter: true,
            resizable: true,
          },
          {
            headerName: 'Retail',
            field: 'start_retail_counts',
            sortable: true,
            resizable: true,
          },
        ],
      },
    ];
  }
}
