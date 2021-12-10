import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListUsersComponent } from './page-list-users.component';

describe('PageListUsersComponent', () => {
  let component: PageListUsersComponent;
  let fixture: ComponentFixture<PageListUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
