import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseSvc2Component } from './use-svc2.component';

describe('UseSvc2Component', () => {
  let component: UseSvc2Component;
  let fixture: ComponentFixture<UseSvc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseSvc2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseSvc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
