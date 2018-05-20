import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutpatientHospitalComponent } from './outpatient-hospital.component';

describe('OutpatientHospitalComponent', () => {
  let component: OutpatientHospitalComponent;
  let fixture: ComponentFixture<OutpatientHospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutpatientHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutpatientHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
