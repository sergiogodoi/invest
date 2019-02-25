import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraCreditoPage } from './letra-credito.page';

describe('LetraCreditoPage', () => {
  let component: LetraCreditoPage;
  let fixture: ComponentFixture<LetraCreditoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraCreditoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraCreditoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
