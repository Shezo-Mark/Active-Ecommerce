import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdustsComponent } from './produsts.component';

describe('ProdustsComponent', () => {
  let component: ProdustsComponent;
  let fixture: ComponentFixture<ProdustsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdustsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdustsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
