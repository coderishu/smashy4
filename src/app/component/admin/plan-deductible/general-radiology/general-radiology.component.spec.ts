import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRadiologyComponent } from './general-radiology.component';

describe('GeneralRadiologyComponent', () => {
  let component: GeneralRadiologyComponent;
  let fixture: ComponentFixture<GeneralRadiologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralRadiologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRadiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
