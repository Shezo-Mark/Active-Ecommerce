import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNewPinComponent } from './user-new-pin.component';

describe('UserNewPinComponent', () => {
  let component: UserNewPinComponent;
  let fixture: ComponentFixture<UserNewPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserNewPinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNewPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
