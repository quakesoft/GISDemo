import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class RuleResultService {

  constructor() { }

  private ruleChangedSource = new Subject<boolean>();

  ruleChanged$ = this.ruleChangedSource.asObservable();

  notifyRuleOutcome(isSuccess: boolean) {
    this.ruleChangedSource.next(isSuccess);
  }
}
