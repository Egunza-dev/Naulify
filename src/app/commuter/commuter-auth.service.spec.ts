import { TestBed } from '@angular/core/testing';

import { CommuterAuthService } from './commuter-auth.service';

describe('CommuterAuthService', () => {
  let service: CommuterAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommuterAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
