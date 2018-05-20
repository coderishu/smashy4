import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiropaticCoinuranceComponent } from './chiropatic-coinurance.component';

describe('ChiropaticCoinuranceComponent', () => {
  let component: ChiropaticCoinuranceComponent;
  let fixture: ComponentFixture<ChiropaticCoinuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiropaticCoinuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiropaticCoinuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
