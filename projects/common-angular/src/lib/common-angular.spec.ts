import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { CommonAngular } from './common-angular';

describe('CommonAngular', () => {
  let component: CommonAngular;
  let fixture: ComponentFixture<CommonAngular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonAngular],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonAngular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
