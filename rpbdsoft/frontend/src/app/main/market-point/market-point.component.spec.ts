import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPointComponent } from './market-point.component';

describe('MarketPointComponent', () => {
  let component: MarketPointComponent;
  let fixture: ComponentFixture<MarketPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
