import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditClientComponent } from './page-edit-client.component';

describe('PageEditClientComponent', () => {
  let component: PageEditClientComponent;
  let fixture: ComponentFixture<PageEditClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
