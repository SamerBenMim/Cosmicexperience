import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingeventsComponent } from './upcomingevents.component';

describe('UpcomingeventsComponent', () => {
  let component: UpcomingeventsComponent;
  let fixture: ComponentFixture<UpcomingeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingeventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
