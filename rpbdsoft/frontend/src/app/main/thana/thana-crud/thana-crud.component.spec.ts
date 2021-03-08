import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanaCrudComponent } from './thana-crud.component';

describe('ThanaCrudComponent', () => {
  let component: ThanaCrudComponent;
  let fixture: ComponentFixture<ThanaCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanaCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
