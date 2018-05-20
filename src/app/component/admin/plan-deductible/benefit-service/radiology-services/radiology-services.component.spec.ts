import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiologyServicesComponent } from './radiology-services.component';

describe('RadiologyServicesComponent', () => {
  let component: RadiologyServicesComponent;
  let fixture: ComponentFixture<RadiologyServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiologyServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiologyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
