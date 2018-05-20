import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDeductibleComponent } from './plan-deductible.component';

describe('PlanDeductibleComponent', () => {
  let component: PlanDeductibleComponent;
  let fixture: ComponentFixture<PlanDeductibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanDeductibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanDeductibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
