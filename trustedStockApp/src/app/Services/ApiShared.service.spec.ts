/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiSharedService } from './ApiShared.service';

describe('Service: ApiShared', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiSharedService]
    });
  });

  it('should ...', inject([ApiSharedService], (service: ApiSharedService) => {
    expect(service).toBeTruthy();
  }));
});
