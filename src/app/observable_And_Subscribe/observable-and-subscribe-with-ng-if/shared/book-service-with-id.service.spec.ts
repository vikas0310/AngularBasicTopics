import { TestBed } from '@angular/core/testing';

import { BookServiceWithIdService } from './book-service-with-id.service';

describe('BookServiceWithIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookServiceWithIdService = TestBed.get(BookServiceWithIdService);
    expect(service).toBeTruthy();
  });
});
