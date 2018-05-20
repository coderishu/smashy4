import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionMedicationsComponent } from './prescription-medications.component';

describe('PrescriptionMedicationsComponent', () => {
  let component: PrescriptionMedicationsComponent;
  let fixture: ComponentFixture<PrescriptionMedicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriptionMedicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionMedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
