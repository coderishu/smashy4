import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiropraticDeductibleComponent } from './chiropratic-deductible.component';

describe('ChiropraticDeductibleComponent', () => {
  let component: ChiropraticDeductibleComponent;
  let fixture: ComponentFixture<ChiropraticDeductibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiropraticDeductibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiropraticDeductibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
