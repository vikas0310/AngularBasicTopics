import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckForDirectivesComponent } from './check-for-directives.component';

describe('CheckForDirectivesComponent', () => {
  let component: CheckForDirectivesComponent;
  let fixture: ComponentFixture<CheckForDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckForDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckForDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
