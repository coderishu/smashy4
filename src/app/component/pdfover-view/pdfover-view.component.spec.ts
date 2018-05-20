import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfoverViewComponent } from './pdfover-view.component';

describe('PdfoverViewComponent', () => {
  let component: PdfoverViewComponent;
  let fixture: ComponentFixture<PdfoverViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfoverViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfoverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
