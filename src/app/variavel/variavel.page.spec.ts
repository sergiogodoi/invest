import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariavelPage } from './variavel.page';

describe('VariavelPage', () => {
  let component: VariavelPage;
  let fixture: ComponentFixture<VariavelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariavelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariavelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
