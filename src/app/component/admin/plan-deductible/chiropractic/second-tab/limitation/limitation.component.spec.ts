import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitationComponent } from './limitation.component';

describe('LimitationComponent', () => {
  let component: LimitationComponent;
  let fixture: ComponentFixture<LimitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
