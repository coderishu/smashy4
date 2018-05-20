import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InpatientHospitalComponent } from './inpatient-hospital.component';

describe('InpatientHospitalComponent', () => {
  let component: InpatientHospitalComponent;
  let fixture: ComponentFixture<InpatientHospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InpatientHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InpatientHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
