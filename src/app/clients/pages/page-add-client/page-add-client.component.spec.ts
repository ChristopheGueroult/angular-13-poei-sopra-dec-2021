import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddClientComponent } from './page-add-client.component';

describe('PageAddClientComponent', () => {
  let component: PageAddClientComponent;
  let fixture: ComponentFixture<PageAddClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
