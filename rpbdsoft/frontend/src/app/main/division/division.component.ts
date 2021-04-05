import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { DivisionService } from '../../services/division.service';
import { DivisionViewComponent } from './division-view/division-view.component';
import { AddDivisionComponent } from './add-division/add-division.component';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss'],
})
export class DivisionComponent implements OnInit {
  public add_division = false;

  @Input() divisions: any = [];

  loadaddform() {
    this.add_division = true;
  }

  constructor(private divisionservice: DivisionService) {}

  ngOnInit(): void {
    this.divisionservice.getDivisions().subscribe(
      (data) => {
        this.divisions = data;
        console.log(data);
      },
      (error) => console.log(error)
    );

    // this.divisionservice.createDivision().subscribe()
  }
}
