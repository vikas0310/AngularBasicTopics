import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableAndAsyncComponent } from './observable-and-async.component';

describe('ObservableAndAsyncComponent', () => {
  let component: ObservableAndAsyncComponent;
  let fixture: ComponentFixture<ObservableAndAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableAndAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableAndAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
