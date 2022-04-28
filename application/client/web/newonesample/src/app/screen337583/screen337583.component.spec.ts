import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen337583Component } from './screen337583.component';

describe('Screen337583Component', () => {
  let component: Screen337583Component;
  let fixture: ComponentFixture<Screen337583Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen337583Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen337583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});