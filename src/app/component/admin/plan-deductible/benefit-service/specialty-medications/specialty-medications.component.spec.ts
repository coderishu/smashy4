import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtyMedicationsComponent } from './specialty-medications.component';

describe('SpecialtyMedicationsComponent', () => {
  let component: SpecialtyMedicationsComponent;
  let fixture: ComponentFixture<SpecialtyMedicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialtyMedicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtyMedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
