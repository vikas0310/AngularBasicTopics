import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableAndSubscribeComponent } from './observable-and-subscribe.component';

describe('ObservableAndSubscribeComponent', () => {
  let component: ObservableAndSubscribeComponent;
  let fixture: ComponentFixture<ObservableAndSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableAndSubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableAndSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
