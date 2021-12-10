import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListOrdersComponent } from './page-list-orders.component';

describe('PageListOrdersComponent', () => {
  let component: PageListOrdersComponent;
  let fixture: ComponentFixture<PageListOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
