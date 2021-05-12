import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserStack } from 'protractor/built/driverProviders';
import { MarketService } from 'src/app/services/market-point.service';

@Component({
  selector: 'app-market-create',
  templateUrl: './market-create.component.html',
  styleUrls: ['./market-create.component.scss'],
})
export class MarketCreateComponent implements OnInit {
  marketForms: FormArray = this.fb.array([]);
  notification: any;

  constructor(
    private fb: FormBuilder,
    private marketservice: MarketService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addMarketForm() {
    this.marketForms.push(
      this.fb.group({
        market_code: ['', Validators.required],
        market_name: [''],
      })
    );
  }

  marketSubmit(fg: FormGroup) {
    this.marketservice.createMarket(fg.value).subscribe((res: any) => {
      fg.patchValue({ brand_code: res.brand_code });
      this.showNotification('insert');
    });
  }

  showNotification(category: any) {
    switch (category) {
      case 'insert':
        this.notification = { class: 'text-success', message: 'saved!' };
        break;

      default:
        break;
    }
    setTimeout(() => {
      this.notification = null;
    }, 2000);
  }
}
