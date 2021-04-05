import { TestBed } from '@angular/core/testing';

import { BeadservService } from './beadserv.service';

describe('BeadservService', () => {
  let service: BeadservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeadservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
