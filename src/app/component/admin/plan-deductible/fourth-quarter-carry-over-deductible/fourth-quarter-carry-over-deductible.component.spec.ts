import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthQuarterCarryOverDeductibleComponent } from './fourth-quarter-carry-over-deductible.component';

describe('FourthQuarterCarryOverDeductibleComponent', () => {
  let component: FourthQuarterCarryOverDeductibleComponent;
  let fixture: ComponentFixture<FourthQuarterCarryOverDeductibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthQuarterCarryOverDeductibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthQuarterCarryOverDeductibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
