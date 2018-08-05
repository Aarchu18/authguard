import { TestBed, inject } from '@angular/core/testing';

import { AuthsServiceService } from './auths-service.service';

describe('AuthsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthsServiceService]
    });
  });

  it('should be created', inject([AuthsServiceService], (service: AuthsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
