import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateColsComponent } from './template-cols.component';

describe('TemplateColsComponent', () => {
  let component: TemplateColsComponent;
  let fixture: ComponentFixture<TemplateColsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateColsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateColsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
