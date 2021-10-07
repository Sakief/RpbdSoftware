import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-community';
import { DealerService } from '../../services/dealer.service';

@Component({
  selector: 'app-profile-grid',
  templateUrl: './dealer-profile-grid.component.html',
  styleUrls: ['./dealer-profile-grid.component.scss'],
})
export class DealerProfileGridComponent implements OnInit {
  rowData: any;
  columnDefs: any;

  // gridApi and columnApi
  private api!: GridApi;
  private columnApi!: ColumnApi;
  router: any;

  // @Output() new createNewDivision = new EventEmitter();

  // inject the athleteService
  constructor(private dealerservice: DealerService) {
    this.columnDefs = this.createColumnDefs();
  }

  // on init, subscribe to the athelete data
  ngOnInit() {
    this.dealerservice.getProfile().subscribe(
      (dealers) => {
        this.rowData = dealers;
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
        headerName: 'Dealer ID',
        field: 'dealer_id',
        filter: true,
        resizable: true,
        sortable: true,
      },
      {
        headerName: 'Dealer Name',
        field: 'dealer_name',

        filter: true,
        resizable: true,
        sortable: true,
      },

      {
        headerName: 'Holding No',
        field: 'holding_no',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Road Name',
        field: 'road_name',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Block No',
        field: 'block_no',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Union',
        field: 'union',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Post Office',
        field: 'post_office',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Market Code',
        field: 'market_code',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Zone Code',
        field: 'zone_code',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Thana Code',
        field: 'thana_code',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'District Code',
        field: 'district_code',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Division Code',
        field: 'division_code',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Manager Name',
        field: 'manager_name',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Respondent Designation',
        field: 'respondent_designation',
        filter: true,
        resizable: true,

        sortable: true,
      },
      {
        headerName: 'contact_no1',
        field: 'Contact No 1',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Contact No 2',
        field: 'contact_no2',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Contact No 3',
        field: 'contact_no3',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Total Staff',
        field: 'total_staff',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Outlet Landmark',
        field: 'outlet_landmark',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Outlet Status',
        field: 'outlet_status',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Year of Establishment',
        field: 'year_of_establishment',

        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Monthly avg. Volume',
        field: 'monthly_average_volume',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Total Retail',
        field: 'total_retail',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Self Transport',
        field: 'self_transport',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Storage Capacity',
        field: 'storage_capacity',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Front Length',
        field: 'front_length',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Front Width',
        field: 'front_width',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Business Patter',
        field: 'business_partter',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'NID/Trade License No.',
        field: 'nid',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Asset',
        field: 'asset',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Liability',
        field: 'liability',
        filter: true,
        resizable: true,

        sortable: true,
      },

      {
        headerName: 'Business Ethics',
        field: 'business_ethics',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },
      {
        headerName: 'Succesor',
        field: 'succesor',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },
      {
        headerName: 'Under Crown Dealer',
        field: 'under_crown_dealer',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },
      {
        headerName: 'Under Crown sr',
        field: 'under_crown_sr',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },
      {
        headerName: 'Potential Crown Dealer',
        field: 'potential_crown_dealer',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },
      {
        headerName: 'Potential Crown Retailer',
        field: 'potential_crown_retailer',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },
    ];
  }
}
