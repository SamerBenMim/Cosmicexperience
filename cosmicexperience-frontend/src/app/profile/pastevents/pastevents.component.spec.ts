import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteventsComponent } from './pastevents.component';

describe('PasteventsComponent', () => {
  let component: PasteventsComponent;
  let fixture: ComponentFixture<PasteventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasteventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasteventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
