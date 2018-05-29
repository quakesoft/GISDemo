import { TestBed, inject } from '@angular/core/testing';

import { ActionUpdateService } from './action-update.service';

describe('ActionUpdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActionUpdateService]
    });
  });

  it('should be created', inject([ActionUpdateService], (service: ActionUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
