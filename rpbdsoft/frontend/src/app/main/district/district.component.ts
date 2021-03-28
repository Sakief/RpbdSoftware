import { Component, OnInit } from '@angular/core';
import { DistrictService } from '../../services/district.service';
import { DistrictViewComponent } from './district-view/district-view.component';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss'],
})
export class DistrictComponent implements OnInit {
  [districts: string]: any;

  constructor(private districtservice: DistrictService) {}

  ngOnInit(): void {
    this.districtservice.getDistrict().subscribe(
      (data) => {
        this.districts = data;
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
}
