import { Component, OnInit, Input } from '@angular/core';
import { Market } from '../../../model/market';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MarketService } from '../../../services/market-point.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-market',
  templateUrl: './add-market.component.html',
  styleUrls: ['./add-market.component.scss'],
})
export class AddMarketComponent implements OnInit {
  marketform = new FormGroup({
    market_code: new FormControl('',[Validators.required, Validators.minLength(10)]),
    market_name: new FormControl('',Validators.required),
  });

  constructor(private marketservice: MarketService, private router: Router) {}

  ngOnInit() {}

  addMarket = () => {
    console.log(this.marketform.value);
    this.marketservice
      .createMarket(
        this.marketform.value.market_code,
        this.marketform.value.market_name
      )
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  };
}
