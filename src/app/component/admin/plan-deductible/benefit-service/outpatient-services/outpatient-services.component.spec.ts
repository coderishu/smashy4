import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutpatientServicesComponent } from './outpatient-services.component';

describe('OutpatientServicesComponent', () => {
  let component: OutpatientServicesComponent;
  let fixture: ComponentFixture<OutpatientServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutpatientServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutpatientServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
