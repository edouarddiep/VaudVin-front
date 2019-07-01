import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMillesimePage } from './list-millesime.page';

describe('ListMillesimePage', () => {
  let component: ListMillesimePage;
  let fixture: ComponentFixture<ListMillesimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMillesimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMillesimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
