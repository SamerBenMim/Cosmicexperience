import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoAreWeComponent } from './who-are-we.component';

describe('WhoAreWeComponent', () => {
  let component: WhoAreWeComponent;
  let fixture: ComponentFixture<WhoAreWeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoAreWeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoAreWeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
