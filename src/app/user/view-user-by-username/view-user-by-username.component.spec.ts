import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserByUsernameComponent } from './view-user-by-username.component';

describe('ViewUserByUsernameComponent', () => {
  let component: ViewUserByUsernameComponent;
  let fixture: ComponentFixture<ViewUserByUsernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserByUsernameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserByUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
