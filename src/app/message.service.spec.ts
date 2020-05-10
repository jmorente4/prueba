import { TestBed } from '@angular/core/testing';

import { MESSAGEService } from './message.service';

describe('MESSAGEService', () => {
  let service: MESSAGEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MESSAGEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
