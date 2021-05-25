import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LouverComponent } from './louver.component';

describe('LouverComponent', () => {
  let component: LouverComponent;
  let fixture: ComponentFixture<LouverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LouverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LouverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
