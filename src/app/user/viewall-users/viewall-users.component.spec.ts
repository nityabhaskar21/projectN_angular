import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallUsersComponent } from './viewall-users.component';

describe('ViewallUsersComponent', () => {
  let component: ViewallUsersComponent;
  let fixture: ComponentFixture<ViewallUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
