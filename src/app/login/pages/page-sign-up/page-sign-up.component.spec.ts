import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSignUpComponent } from './page-sign-up.component';

describe('PageSignUpComponent', () => {
  let component: PageSignUpComponent;
  let fixture: ComponentFixture<PageSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
