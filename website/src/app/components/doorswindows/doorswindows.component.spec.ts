import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorswindowsComponent } from './doorswindows.component';

describe('DoorswindowsComponent', () => {
  let component: DoorswindowsComponent;
  let fixture: ComponentFixture<DoorswindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoorswindowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorswindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
