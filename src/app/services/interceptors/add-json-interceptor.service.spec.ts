import { TestBed, inject } from '@angular/core/testing';

import { AddJsonInterceptorService } from './add-json-interceptor.service';

describe('AddJsonInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddJsonInterceptorService]
    });
  });

  it('should be created', inject([AddJsonInterceptorService], (service: AddJsonInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
