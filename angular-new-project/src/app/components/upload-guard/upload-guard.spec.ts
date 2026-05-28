import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadGuard } from './upload-guard';

describe('UploadGuard', () => {
  let component: UploadGuard;
  let fixture: ComponentFixture<UploadGuard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadGuard],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadGuard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
