import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWineComponent } from './list-wine.component';

describe('ListWinePage', () => {
  let component: ListWineComponent;
  let fixture: ComponentFixture<ListWineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWineComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
