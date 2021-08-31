import { Component, OnInit } from '@angular/core';
import { DistrictRetailsReportService } from 'src/app/services/districtretailsreports.service';
import { ColumnApi, GridApi } from 'ag-grid-community';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-districtretails',
  templateUrl: './districtretails.component.html',
  styleUrls: ['./districtretails.component.scss'],
})
export class DistrictretailsComponent implements OnInit {
  startretailsrowData: any;
  startretailscolumnDefs: any;

  endretailsrowData: any;
  endretailscolumnDefs: any;

  private api!: GridApi;
  private columnApi!: ColumnApi;
  router: any;

  constructor(private dsretailservice: DistrictRetailsReportService) {
    this.endretailscolumnDefs = this.DistrictEndRetailsReport();
    this.startretailscolumnDefs = this.DistrictStartRetailsReport();
  }

  ngOnInit(): void {
    this.dsretailservice.getDistrictEndRetailsReport().subscribe(
      (districtendretailsreport) => {
        this.endretailsrowData = districtendretailsreport;
      },
      (error) => {
        console.log(error);
      }
    );

    this.dsretailservice.getDistrictStartRetailsReport().subscribe(
      (districtstartretailreport) => {
        this.startretailsrowData = districtstartretailreport;
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

  private DistrictEndRetailsReport() {
    return [
      {
        headerName: 'End Month Retail Counts',
        children: [
          {
            headerName: 'Brand Name',
            field: 'brand_name',
            filter: true,
            resizable: true,
            sortable: true,
          },
          {
            headerName: 'Month',
            field: 'end_month',
            resizable: true,
          },
          {
            headerName: 'Retails',
            field: 'end_retail_counts',
            resizable: true,
            sortable: true,
            aggFunc: 'sum',
            valueParser: 'valueParser(newValue)',
          },
        ],
      },
    ];
  }
  private DistrictStartRetailsReport() {
    return [
      {
        headerName: 'Start Month Retail Counts',
        children: [
          {
            headerName: 'Brand Name',
            field: 'brand_name',
            filter: true,
            resizable: true,
            sortable: true,
          },
          {
            headerName: 'Month',
            field: 'start_month',
            resizable: true,
          },
          {
            headerName: 'Retails',
            field: 'start_retail_counts',
            resizable: true,
            sortable: true,
            aggFunc: 'sum',
            valueParser: 'newValue(Number)',
          },
        ],
      },
    ];
  }
}
