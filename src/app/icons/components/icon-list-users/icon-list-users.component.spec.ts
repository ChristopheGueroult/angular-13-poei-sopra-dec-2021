import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconListUsersComponent } from './icon-list-users.component';

describe('IconListUsersComponent', () => {
  let component: IconListUsersComponent;
  let fixture: ComponentFixture<IconListUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconListUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
