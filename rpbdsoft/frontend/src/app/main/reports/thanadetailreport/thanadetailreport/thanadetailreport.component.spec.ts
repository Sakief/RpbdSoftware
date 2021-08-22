import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanadetailreportComponent } from './thanadetailreport.component';

describe('ThanadetailreportComponent', () => {
  let component: ThanadetailreportComponent;
  let fixture: ComponentFixture<ThanadetailreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanadetailreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanadetailreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
