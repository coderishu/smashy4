import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutofPocketComponent } from './outof-pocket.component';

describe('OutofPocketComponent', () => {
  let component: OutofPocketComponent;
  let fixture: ComponentFixture<OutofPocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutofPocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutofPocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
