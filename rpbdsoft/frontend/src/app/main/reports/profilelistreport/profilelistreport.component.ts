import { Component, OnInit } from '@angular/core';
import { ProfileListservice } from 'src/app/services/profilelist.service';
import { ColumnApi, GridApi } from 'ag-grid-community';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-profilelistreport',
  templateUrl: './profilelistreport.component.html',
  styleUrls: ['./profilelistreport.component.scss'],
})
export class ProfilelistreportComponent implements OnInit {
  rowData: any;
  columnDefs: any;

  private api!: GridApi;
  private columnApi!: ColumnApi;
  router: any;

  constructor(private profilelistservice: ProfileListservice) {
    this.columnDefs = this.ProfileListReport();
  }

  ngOnInit(): void {
    this.profilelistservice.getProfileListReport().subscribe(
      (profilelistreports) => {
        this.rowData = profilelistreports;
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

  private ProfileListReport() {
    return [
      {
        headerName: 'District Name',
        field: 'district_name',
        filter: true,
        resizable: true,
        sortable: true,
      },
      {
        headerName: 'Thana Name',
        field: 'thana_name',
        filter: true,
        sortable: true,
        resizable: true,
      },

      {
        headerName: 'Zone Name',
        field: 'zone_name',
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
      {
        headerName: 'Outlet ID',
        field: 'outlet_id',
        filter: true,
        resizable: true,
        sortable: true,
      },
      {
        headerName: 'Outlet Name',
        field: 'outlet_name',
        filter: true,
        resizable: true,
        sortable: true,
      },
      {
        headerName: 'Owner Name',
        field: 'owner_name',
        filter: true,
        resizable: true,
        sortable: true,
      },
      {
        headerName: 'Contact no 1',
        field: 'contact_no1',
        filter: true,
        resizable: true,
        sortable: true,
      },
      {
        headerName: 'Contact no 2',
        field: 'contact_no2',
        filter: true,
        resizable: true,
        sortable: true,
      },
      {
        headerName: 'Holding no',
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
        headerName: 'Village',
        field: ' village',
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
    ];
  }
}
