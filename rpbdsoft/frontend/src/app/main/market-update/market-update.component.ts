import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MarketService } from 'src/app/services/market-point.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-market-update',
  templateUrl: './market-update.component.html',
  styleUrls: ['./market-update.component.scss'],
})
export class MarketUpdateComponent implements OnInit {
  marketForms: FormArray = this.fb.array([]);
  notification: any;
  constructor(
    private fb: FormBuilder,
    private marketservice: MarketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.marketservice.getMarket().subscribe((res) => {
      if (res == []) this.addBrandForm();
      else {
        (res as []).forEach((market: any) => {
          this.marketForms.push(
            this.fb.group({
              market_code: [market.market_code],
              market_name: [market.market_name],
            })
          );
        });
      }
    });
  }

  addBrandForm() {
    this.marketForms.push(
      this.fb.group({
        market_code: ['', Validators.required],
        market_name: ['', Validators.required],
      })
    );
  }

  marketUpdate(fg: FormGroup) {
    this.marketservice.updateMarket(fg.value).subscribe((res: any) => {
      this.showNotification('update');
    });
  }
  onDelete(market_code: number, i: any) {
    // if (brand_code == 0) this.brandForms.removeAt(i);
    //else if (confirm('Do you want to delete this outlet?'))
    this.marketservice.deleteMarket(market_code).subscribe((res) => {
      confirm('Do you want to delete this market?');
      this.marketForms.removeAt(i);
      this.showNotification('delete');
    });
  }
  showNotification(category: any) {
    switch (category) {
      case 'update':
        this.notification = { class: 'text-primary', message: 'updated!' };
        break;
      case 'delete':
        this.notification = { class: 'text-danger', message: 'deleted!' };
        break;

      default:
        break;
    }
    setTimeout(() => {
      this.notification = null;
    }, 2000);
  }
}
