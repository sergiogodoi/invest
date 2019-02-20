import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesouroPage } from './tesouro.page';

describe('TesouroPage', () => {
  let component: TesouroPage;
  let fixture: ComponentFixture<TesouroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesouroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesouroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
