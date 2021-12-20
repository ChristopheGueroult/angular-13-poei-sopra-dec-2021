import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPlusCircleComponent } from './icon-plus-circle.component';

describe('IconPlusCircleComponent', () => {
  let component: IconPlusCircleComponent;
  let fixture: ComponentFixture<IconPlusCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconPlusCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPlusCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
