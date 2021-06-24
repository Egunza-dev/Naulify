import { TestBed } from '@angular/core/testing';

import { PsvAuthService } from './psv-auth.service';

describe('PsvAuthService', () => {
  let service: PsvAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsvAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
