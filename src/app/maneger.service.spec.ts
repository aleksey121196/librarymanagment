import { TestBed } from '@angular/core/testing';

import { ManegerService } from './maneger.service';

describe('ManegerService', () => {
  let service: ManegerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManegerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
