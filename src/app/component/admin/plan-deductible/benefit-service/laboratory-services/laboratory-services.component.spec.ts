import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryServicesComponent } from './laboratory-services.component';

describe('LaboratoryServicesComponent', () => {
  let component: LaboratoryServicesComponent;
  let fixture: ComponentFixture<LaboratoryServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoryServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
