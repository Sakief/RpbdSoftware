import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-community';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../model/profile';

@Component({
  selector: 'app-profile-grid',
  templateUrl: './profile-grid.component.html',
  styleUrls: ['./profile-grid.component.scss'],
})
export class ProfileGridComponent implements OnInit {
  rowData: any;
  columnDefs: any;

  // gridApi and columnApi
  private api!: GridApi;
  private columnApi!: ColumnApi;
  router: any;

  // @Output() new createNewDivision = new EventEmitter();

  // inject the athleteService
  constructor(private profileservice: ProfileService) {
    this.columnDefs = this.createColumnDefs();
  }

  // on init, subscribe to the athelete data
  ngOnInit() {
    this.profileservice.getProfile().subscribe(
      (profiles) => {
        this.rowData = profiles;
      },
      (error) => {
        console.log(error);
      }
    );

    // newDivision(){
    //     this.createNewDivision.emit();
    // }
  }

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
        headerName: 'Outlet Type ID',
        field: 'outlet_type_id',
        editable: true,
        filter: true,
        resizable: true,
        sortable: true,
      },

      {
        headerName: 'Outlet Name',
        field: 'outlet_name',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Owner Name',
        field: 'owner_name',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Holding No',
        field: 'holding_no',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Road Name',
        field: 'road_name',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Block No',
        field: 'block_no',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Village',
        field: 'village',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Union',
        field: 'union',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Post Office',
        field: 'post_office',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Market Code',
        field: 'market_code',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Zone Code',
        field: 'zone_code',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Thana',
        field: 'thana_code',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'District',
        field: 'district_code',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Manager Name',
        field: 'manager_name',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Respondent Designation',
        field: 'respondent_designation',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Contact No 1',
        field: 'contact_no1',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Contact No 2',
        field: 'contact_no 2',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Contact No 3',
        field: 'contact_no 3',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Total Staff',
        field: 'total_staff',

        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Outlet Landmark',
        field: 'outlet_landmark',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'GPS Lattitude',
        field: 'gps_lat',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'GPS Longitude',
        field: 'gps_long',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Storage Capacity',
        field: 'storage_capacity',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Front Length',
        field: 'front_length',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Front Width',
        field: 'front_width',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Weekly Holiday',
        field: 'weekly_holiday',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'NID/Trade License No',
        field: 'outlet_name',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Survey By',
        field: 'survey_by',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Entry By',
        field: 'entry_by',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },

      {
        headerName: 'Visit Date',
        field: 'visit_date',
        filter: true,
        resizable: true,
        editable: true,
        sortable: true,
      },
    ];
  }
}
