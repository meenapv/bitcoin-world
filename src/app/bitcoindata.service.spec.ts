import { TestBed, inject } from '@angular/core/testing';

import { BitcoindataService } from './bitcoindata.service';

describe('BitcoindataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BitcoindataService]
    });
  });

  it('should be created', inject([BitcoindataService], (service: BitcoindataService) => {
    expect(service).toBeTruthy();
  }));
});
