import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgentCareComponent } from './urgent-care.component';

describe('UrgentCareComponent', () => {
  let component: UrgentCareComponent;
  let fixture: ComponentFixture<UrgentCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrgentCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrgentCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
