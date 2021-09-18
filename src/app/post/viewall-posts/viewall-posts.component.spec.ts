import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallPostsComponent } from './viewall-posts.component';

describe('ViewallPostsComponent', () => {
  let component: ViewallPostsComponent;
  let fixture: ComponentFixture<ViewallPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
