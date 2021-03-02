import { Component, OnInit } from '@angular/core';
import { DistrictService } from '../../services/district.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {

  constructor(
    private districtservice:DistrictService
  ) { }

  ngOnInit(): void {
  }

}
