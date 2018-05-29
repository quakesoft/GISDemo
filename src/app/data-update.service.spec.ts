import { TestBed, inject } from '@angular/core/testing';

import { DataUpdateService } from './data-update.service';

describe('DataUpdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataUpdateService]
    });
  });

  it('should be created', inject([DataUpdateService], (service: DataUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
