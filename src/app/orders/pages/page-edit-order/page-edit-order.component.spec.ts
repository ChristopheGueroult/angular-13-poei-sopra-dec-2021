import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditOrderComponent } from './page-edit-order.component';

describe('PageEditOrderComponent', () => {
  let component: PageEditOrderComponent;
  let fixture: ComponentFixture<PageEditOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
