import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallerForgetComponent } from './saller-forget.component';

describe('SallerForgetComponent', () => {
  let component: SallerForgetComponent;
  let fixture: ComponentFixture<SallerForgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SallerForgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SallerForgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
