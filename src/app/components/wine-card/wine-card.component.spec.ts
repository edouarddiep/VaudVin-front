import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineCardComponent } from './wine-card.component';

describe('WineCardComponent', () => {
  let component: WineCardComponent;
  let fixture: ComponentFixture<WineCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineCardComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
