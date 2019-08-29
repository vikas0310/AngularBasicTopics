import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableAndSubscribeWithNgIfComponent } from './observable-and-subscribe-with-ng-if.component';

describe('ObservableAndSubscribeWithNgIfComponent', () => {
  let component: ObservableAndSubscribeWithNgIfComponent;
  let fixture: ComponentFixture<ObservableAndSubscribeWithNgIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableAndSubscribeWithNgIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableAndSubscribeWithNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
