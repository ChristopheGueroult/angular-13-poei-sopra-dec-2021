import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddOrderComponent } from './page-add-order.component';

describe('PageAddOrderComponent', () => {
  let component: PageAddOrderComponent;
  let fixture: ComponentFixture<PageAddOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
