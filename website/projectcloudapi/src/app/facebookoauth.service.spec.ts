import { TestBed, inject } from '@angular/core/testing';

import { FacebookoauthService } from './facebookoauth.service';

describe('FacebookoauthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacebookoauthService]
    });
  });

  it('should ...', inject([FacebookoauthService], (service: FacebookoauthService) => {
    expect(service).toBeTruthy();
  }));
});
