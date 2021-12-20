import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconEyeSlashComponent } from './icon-eye-slash.component';

describe('IconEyeSlashComponent', () => {
  let component: IconEyeSlashComponent;
  let fixture: ComponentFixture<IconEyeSlashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconEyeSlashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconEyeSlashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
