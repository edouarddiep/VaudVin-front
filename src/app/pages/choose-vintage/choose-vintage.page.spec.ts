import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseVintagePage } from './choose-vintage.page';

describe('ChooseVintagePage', () => {
  let component: ChooseVintagePage;
  let fixture: ComponentFixture<ChooseVintagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseVintagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseVintagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
