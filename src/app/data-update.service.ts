import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DataUpdateService {

  constructor() { }

  private dataUpdatedSource = new Subject();

  dataUpdated$ = this.dataUpdatedSource.asObservable();

  notifyNewData(data) {
    this.dataUpdatedSource.next(data);
  }
}
 