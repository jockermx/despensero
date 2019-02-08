import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewproductPage } from './newproduct.page';

describe('NewproductPage', () => {
  let component: NewproductPage;
  let fixture: ComponentFixture<NewproductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewproductPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewproductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
