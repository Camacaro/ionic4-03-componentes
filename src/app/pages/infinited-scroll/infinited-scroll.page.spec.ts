import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinitedScrollPage } from './infinited-scroll.page';

describe('InfinitedScrollPage', () => {
  let component: InfinitedScrollPage;
  let fixture: ComponentFixture<InfinitedScrollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfinitedScrollPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfinitedScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
