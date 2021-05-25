import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CladdingComponent } from './cladding.component';

describe('CladdingComponent', () => {
  let component: CladdingComponent;
  let fixture: ComponentFixture<CladdingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CladdingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CladdingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
