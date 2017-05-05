import { TestBed, inject } from '@angular/core/testing';

import { OauthguardService } from './oauthguard.service';

describe('OauthguardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OauthguardService]
    });
  });

  it('should ...', inject([OauthguardService], (service: OauthguardService) => {
    expect(service).toBeTruthy();
  }));
});
