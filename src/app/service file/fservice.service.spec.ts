import { TestBed } from '@angular/core/testing';

import { FserviceService } from './fservice.service';

describe('FserviceService', () => {
  let service: FserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
