import { TestBed } from '@angular/core/testing';

import { ParentandchildService } from './parentandchild.service';

describe('ParentandchildService', () => {
  let service: ParentandchildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentandchildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
