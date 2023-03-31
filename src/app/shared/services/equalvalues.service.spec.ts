import { TestBed } from '@angular/core/testing';

import { EqualvaluesService } from './equalvalues.service';

describe('EqualvaluesService', () => {
  let service: EqualvaluesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EqualvaluesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
