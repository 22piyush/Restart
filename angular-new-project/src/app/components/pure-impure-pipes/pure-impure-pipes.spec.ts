import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureImpurePipes } from './pure-impure-pipes';

describe('PureImpurePipes', () => {
  let component: PureImpurePipes;
  let fixture: ComponentFixture<PureImpurePipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PureImpurePipes],
    }).compileComponents();

    fixture = TestBed.createComponent(PureImpurePipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
