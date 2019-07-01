import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineDetailPage } from './wine-detail.page';

describe('WineDetailPage', () => {
  let component: WineDetailPage;
  let fixture: ComponentFixture<WineDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
