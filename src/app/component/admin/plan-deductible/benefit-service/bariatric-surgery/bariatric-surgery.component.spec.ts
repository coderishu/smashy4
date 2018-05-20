import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BariatricSurgeryComponent } from './bariatric-surgery.component';

describe('BariatricSurgeryComponent', () => {
  let component: BariatricSurgeryComponent;
  let fixture: ComponentFixture<BariatricSurgeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BariatricSurgeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BariatricSurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
