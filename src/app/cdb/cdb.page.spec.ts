import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdbPage } from './cdb.page';

describe('CdbPage', () => {
  let component: CdbPage;
  let fixture: ComponentFixture<CdbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
