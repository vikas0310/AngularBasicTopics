import { TestBed } from '@angular/core/testing';

import { BookmapsericeService } from './bookmapserice.service';

describe('BookmapsericeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookmapsericeService = TestBed.get(BookmapsericeService);
    expect(service).toBeTruthy();
  });
});
