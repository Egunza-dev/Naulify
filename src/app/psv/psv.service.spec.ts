import { TestBed } from '@angular/core/testing';

import { PsvService } from './psv.service';

describe('PsvService', () => {
  let service: PsvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
