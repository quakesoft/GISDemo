import { Component, OnInit } from '@angular/core';
import { RuleResultService } from '../rule-result.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notificationArea = 'notification-area';
  messageType = this.notificationArea;
  message = '';

  subscription: Subscription;

  constructor(private ruleResultService: RuleResultService) {

    this.subscription = ruleResultService.ruleChanged$.subscribe(
      isSuccess => {
        let css = isSuccess ? 'success' : 'fail';
        this.messageType = `${this.notificationArea} ${css}`;
        this.message = isSuccess ? 'RULE SUCCESSFUL!' : 'RULE FAILED!';
      });

  }

  ngOnInit() {

  }

}
