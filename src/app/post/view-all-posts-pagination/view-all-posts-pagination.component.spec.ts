import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPostsPaginationComponent } from './view-all-posts-pagination.component';

describe('ViewAllPostsPaginationComponent', () => {
  let component: ViewAllPostsPaginationComponent;
  let fixture: ComponentFixture<ViewAllPostsPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllPostsPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllPostsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
