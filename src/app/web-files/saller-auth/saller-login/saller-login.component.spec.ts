import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallerLoginComponent } from './saller-login.component';

describe('SallerLoginComponent', () => {
  let component: SallerLoginComponent;
  let fixture: ComponentFixture<SallerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SallerLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SallerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
