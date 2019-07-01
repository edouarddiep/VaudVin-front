import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMapPage } from './test-map.page';

describe('TestMapPage', () => {
  let component: TestMapPage;
  let fixture: ComponentFixture<TestMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
