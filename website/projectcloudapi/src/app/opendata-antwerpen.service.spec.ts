import { TestBed, inject } from '@angular/core/testing';

import { OpendataAntwerpenService } from './opendata-antwerpen.service';

describe('OpendataAntwerpenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpendataAntwerpenService]
    });
  });

  it('should ...', inject([OpendataAntwerpenService], (service: OpendataAntwerpenService) => {
    expect(service).toBeTruthy();
  }));
});
