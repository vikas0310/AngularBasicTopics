import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicImportComponent } from './dynamic-import.component';

describe('DynamicImportComponent', () => {
  let component: DynamicImportComponent;
  let fixture: ComponentFixture<DynamicImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
