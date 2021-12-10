import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDayModeComponent } from './icon-day-mode.component';

describe('IconDayModeComponent', () => {
  let component: IconDayModeComponent;
  let fixture: ComponentFixture<IconDayModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconDayModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDayModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
