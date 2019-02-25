import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixaPage } from './fixa.page';

describe('FixaPage', () => {
  let component: FixaPage;
  let fixture: ComponentFixture<FixaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
