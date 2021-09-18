import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPostByIdComponent } from './view-post-by-id.component';

describe('ViewPostByIdComponent', () => {
  let component: ViewPostByIdComponent;
  let fixture: ComponentFixture<ViewPostByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPostByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPostByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
