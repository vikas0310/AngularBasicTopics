import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableAndMapComponent } from './observable-and-map.component';

describe('ObservableAndMapComponent', () => {
  let component: ObservableAndMapComponent;
  let fixture: ComponentFixture<ObservableAndMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableAndMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableAndMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
