import { Component, OnInit } from '@angular/core';
import { ZoneService } from 'src/app/services/zone.service';
import { ColumnApi, GridApi } from 'ag-grid-community';

@Component({
  selector: 'app-zone-grid',
  templateUrl: './zone-grid.component.html',
  styleUrls: ['./zone-grid.component.scss'],
})
export class ZoneGridComponent implements OnInit {
  rowData: any;
  columnDefs: any;

  private api!: GridApi;
  private columnApi!: ColumnApi;
  router: any;

  constructor(private zoneservice: ZoneService) {
    this.columnDefs = this.createColumnDefs();
  }

  ngOnInit(): void {
    this.zoneservice.getZone().subscribe(
      (zones) => {
        this.rowData = zones;
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
        headerName: 'Zone Code',
        field: 'zone_code',
        editable: true,
        filter: true,
        resizable: true,
        sortable: true,
      },

      {
        headerName: 'Zone Name',
        field: 'zone_name',
        editable: true,
        filter: true,
        resizable: true,
        sortable: true,
      },
    ];
  }
}
