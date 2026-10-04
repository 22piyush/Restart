import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormDemo } from './template-form-demo';

describe('TemplateFormDemo', () => {
  let component: TemplateFormDemo;
  let fixture: ComponentFixture<TemplateFormDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFormDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateFormDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
