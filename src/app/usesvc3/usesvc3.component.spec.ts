import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usesvc3Component } from './usesvc3.component';

describe('Usesvc3Component', () => {
  let component: Usesvc3Component;
  let fixture: ComponentFixture<Usesvc3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Usesvc3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usesvc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
