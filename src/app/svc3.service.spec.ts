import { TestBed } from '@angular/core/testing';

import { Svc3Service } from './svc3.service';

describe('Svc3Service', () => {
  let service: Svc3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svc3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
