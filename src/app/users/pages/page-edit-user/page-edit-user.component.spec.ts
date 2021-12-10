import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditUserComponent } from './page-edit-user.component';

describe('PageEditUserComponent', () => {
  let component: PageEditUserComponent;
  let fixture: ComponentFixture<PageEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
