import { TestBed } from '@angular/core/testing';

import { TypeServiceService } from './type.service';

describe('TypeServiceService', () => {
  let service: TypeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});