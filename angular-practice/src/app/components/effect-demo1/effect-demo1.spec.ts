import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectDemo1 } from './effect-demo1';

describe('EffectDemo1', () => {
  let component: EffectDemo1;
  let fixture: ComponentFixture<EffectDemo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectDemo1],
    }).compileComponents();

    fixture = TestBed.createComponent(EffectDemo1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
