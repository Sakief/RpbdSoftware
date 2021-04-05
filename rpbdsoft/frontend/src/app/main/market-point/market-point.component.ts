import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ThanaService } from '../../services/thana.service';
// import { ThanaViewComponent } from './division-view/division-view.component';
import { MarketViewComponent } from './market-point-view/market-point-view.component';
import { AddMarketComponent } from './add-market/add-market.component';
import { MarketService } from 'src/app/services/market-point.service';
// import { AddDivisionComponent } from './add-division/add-division.component';

@Component({
  selector: 'app-market-point',
  templateUrl: './market-point.component.html',
  styleUrls: ['./market-point.component.scss'],
})
export class MarketPointComponent implements OnInit {
  public add_market = false;

  @Input() markets: any = [];

  loadaddform() {
    this.add_market = true;
  }

  constructor(private marketservice: MarketService) {}

  ngOnInit(): void {
    this.marketservice.getMarket().subscribe(
      (data) => {
        this.markets = data;
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
}
