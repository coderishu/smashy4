import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCostShareQualifierComponent } from './add-cost-share-qualifier.component';

describe('AddCostShareQualifierComponent', () => {
  let component: AddCostShareQualifierComponent;
  let fixture: ComponentFixture<AddCostShareQualifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCostShareQualifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCostShareQualifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
