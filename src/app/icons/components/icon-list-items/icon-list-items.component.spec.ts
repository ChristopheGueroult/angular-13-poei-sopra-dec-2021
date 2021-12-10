import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconListItemsComponent } from './icon-list-items.component';

describe('IconListItemsComponent', () => {
  let component: IconListItemsComponent;
  let fixture: ComponentFixture<IconListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconListItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
