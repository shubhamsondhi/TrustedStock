/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlphaService } from './Alpha.service';

describe('Service: Alpha', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlphaService]
    });
  });

  it('should ...', inject([AlphaService], (service: AlphaService) => {
    expect(service).toBeTruthy();
  }));
});
