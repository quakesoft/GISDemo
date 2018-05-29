import { Component } from '@angular/core';
import { RuleResultService } from './rule-result.service';
import { DataUpdateService } from './data-update.service';
import { ActionUpdateService } from './action-update.service';
import { Subscription } from 'rxjs';
import actions from './action-selector/actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RuleResultService, DataUpdateService, ActionUpdateService]
})
export class AppComponent {
  title = 'GIS Demo';

  selectedData;
  selectedJson;

  action: any = actions[0];
  subscription: Subscription;

  notificationArea = 'notification-area';
  messageType = this.notificationArea;
  message = '';

  constructor(private actionUpdateService: ActionUpdateService, private dataUpdateService: DataUpdateService) {

    this.subscription = actionUpdateService.actionUpdated$.subscribe(
      action => {
        this.action = action;
      });
  }

  onDataSourceChange(evt) {
    this.selectedData = evt.value;
    this.selectedJson = evt.value.data ? JSON.stringify(evt.value.data, undefined, 4) : "";
  }

  execute() {
    let newData = this.action.action(this.selectedData);
    this.selectedData = newData;
    this.selectedJson = JSON.stringify(newData.data, undefined, 4);
    this.dataUpdateService.notifyNewData(newData.data);

    this.messageType = `${this.notificationArea} info`;
    this.message = 'ACTION APPLIED. CHECK RESULTS.';
  }
}
