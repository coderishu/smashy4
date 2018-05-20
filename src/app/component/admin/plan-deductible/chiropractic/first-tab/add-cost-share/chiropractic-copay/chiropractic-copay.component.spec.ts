import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiropracticCopayComponent } from './chiropractic-copay.component';

describe('ChiropracticCopayComponent', () => {
  let component: ChiropracticCopayComponent;
  let fixture: ComponentFixture<ChiropracticCopayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiropracticCopayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiropracticCopayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
