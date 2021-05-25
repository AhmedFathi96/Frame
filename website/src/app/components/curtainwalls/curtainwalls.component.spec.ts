import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtainwallsComponent } from './curtainwalls.component';

describe('CurtainwallsComponent', () => {
  let component: CurtainwallsComponent;
  let fixture: ComponentFixture<CurtainwallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurtainwallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurtainwallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
