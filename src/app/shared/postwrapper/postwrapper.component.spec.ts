import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostwrapperComponent } from './postwrapper.component';

describe('PostwrapperComponent', () => {
  let component: PostwrapperComponent;
  let fixture: ComponentFixture<PostwrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostwrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
