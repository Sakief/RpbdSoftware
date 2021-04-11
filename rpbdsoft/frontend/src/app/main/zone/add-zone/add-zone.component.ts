import { Component, OnInit, Input } from '@angular/core';
import { Zone } from '../../../model/zone';

import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ZoneService } from '../../../services/zone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-zone',
  templateUrl: './add-zone.component.html',
  styleUrls: ['./add-zone.component.scss'],
})
export class AddZoneComponent implements OnInit {
  zoneform = new FormGroup({
    zone_code: new FormControl(''),
    zone_name: new FormControl(''),
  });

  constructor(private zoneservice: ZoneService, private router: Router) {}

  ngOnInit() {}

  addZone = () => {
    console.log(this.zoneform.value);
    this.zoneservice
      .createZone(
        this.zoneform.value.zone_code,
        this.zoneform.value.zone_name
      )
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  };
}
