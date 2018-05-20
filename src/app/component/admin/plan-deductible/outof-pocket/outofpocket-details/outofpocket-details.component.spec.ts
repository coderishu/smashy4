import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutofpocketDetailsComponent } from './outofpocket-details.component';

describe('OutofpocketDetailsComponent', () => {
  let component: OutofpocketDetailsComponent;
  let fixture: ComponentFixture<OutofpocketDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutofpocketDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutofpocketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
