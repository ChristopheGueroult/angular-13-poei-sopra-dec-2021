import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconNightModeComponent } from './icon-night-mode.component';

describe('IconNightModeComponent', () => {
  let component: IconNightModeComponent;
  let fixture: ComponentFixture<IconNightModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconNightModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconNightModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
