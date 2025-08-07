import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallerSetNewPinComponent } from './saller-set-new-pin.component';

describe('SallerSetNewPinComponent', () => {
  let component: SallerSetNewPinComponent;
  let fixture: ComponentFixture<SallerSetNewPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SallerSetNewPinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SallerSetNewPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
