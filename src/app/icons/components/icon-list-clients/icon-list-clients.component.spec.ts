import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconListClientsComponent } from './icon-list-clients.component';

describe('IconListClientsComponent', () => {
  let component: IconListClientsComponent;
  let fixture: ComponentFixture<IconListClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconListClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconListClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
