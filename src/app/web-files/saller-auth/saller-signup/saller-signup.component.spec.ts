import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallerSignupComponent } from './saller-signup.component';

describe('SallerSignupComponent', () => {
  let component: SallerSignupComponent;
  let fixture: ComponentFixture<SallerSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SallerSignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SallerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
