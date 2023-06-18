import { TestBed } from '@angular/core/testing';

import { CommunicatServiceService } from './communicat-service.service';

describe('CommunicatServiceService', () => {
  let service: CommunicatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
