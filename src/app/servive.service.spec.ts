import { TestBed } from '@angular/core/testing';

import { ServiveService } from './servive.service';

describe('ServiveService', () => {
  let service: ServiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
