import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BscommonModuleComponent } from './bscommon-module.component';

describe('BscommonModuleComponent', () => {
  let component: BscommonModuleComponent;
  let fixture: ComponentFixture<BscommonModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BscommonModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BscommonModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
