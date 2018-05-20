import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiropracticOutofPocketComponent } from './chiropractic-outof-pocket.component';

describe('ChiropracticOutofPocketComponent', () => {
  let component: ChiropracticOutofPocketComponent;
  let fixture: ComponentFixture<ChiropracticOutofPocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiropracticOutofPocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiropracticOutofPocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
