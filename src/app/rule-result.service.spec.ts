import { TestBed, inject } from '@angular/core/testing';

import { RuleResultService } from './rule-result.service';

describe('RuleResultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RuleResultService]
    });
  });

  it('should be created', inject([RuleResultService], (service: RuleResultService) => {
    expect(service).toBeTruthy();
  }));
});
