import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPointViewComponent } from './market-point-view.component';

describe('MarketPointViewComponent', () => {
  let component: MarketPointViewComponent;
  let fixture: ComponentFixture<MarketPointViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketPointViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketPointViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
