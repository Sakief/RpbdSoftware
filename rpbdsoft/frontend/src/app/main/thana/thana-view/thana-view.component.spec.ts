import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanaViewComponent } from './thana-view.component';

describe('ThanaViewComponent', () => {
  let component: ThanaViewComponent;
  let fixture: ComponentFixture<ThanaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
