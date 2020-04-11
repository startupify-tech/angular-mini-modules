import { TestBed } from '@angular/core/testing';

import { NotifyingService } from './notifying.service';

describe('NotifyingService', () => {
  let service: NotifyingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifyingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
