import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ActionUpdateService {

  constructor() { }

  private actionUpdatedSource = new Subject();

  actionUpdated$ = this.actionUpdatedSource.asObservable();

  notifyNewAction(action) {
    this.actionUpdatedSource.next(action);
  }

}
