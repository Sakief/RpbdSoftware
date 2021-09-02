import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletsalesComponent } from './outletsales.component';

describe('OutletsalesComponent', () => {
  let component: OutletsalesComponent;
  let fixture: ComponentFixture<OutletsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutletsalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
