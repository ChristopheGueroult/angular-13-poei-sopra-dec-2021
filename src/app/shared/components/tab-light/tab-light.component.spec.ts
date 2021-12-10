import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLightComponent } from './tab-light.component';

describe('TabLightComponent', () => {
  let component: TabLightComponent;
  let fixture: ComponentFixture<TabLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
