import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsRoutingDynamicallyComponent } from './tabs-routing-dynamically.component';

describe('TabsRoutingDynamicallyComponent', () => {
  let component: TabsRoutingDynamicallyComponent;
  let fixture: ComponentFixture<TabsRoutingDynamicallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsRoutingDynamicallyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsRoutingDynamicallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
