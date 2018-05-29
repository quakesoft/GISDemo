import { Component, OnInit } from '@angular/core';
import rules from './rules';
import { RuleResultService } from '../rule-result.service';
import { DataUpdateService } from '../data-update.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rule-selector',
  templateUrl: './rule-selector.component.html',
  styleUrls: ['./rule-selector.component.css']
})
export class RuleSelectorComponent implements OnInit {

  subscription: Subscription;

  data;

  constructor(private ruleResultService: RuleResultService, private dataUpdateService: DataUpdateService) {

    this.subscription = dataUpdateService.dataUpdated$.subscribe(
      data => {
        this.data = data;

        if (this.selected) {
          this.notifyRuleOutcome();
        }
      });

  }

  ngOnInit() {
  }

  ruleChanged(e) {
    this.notifyRuleOutcome();
  }

  notifyRuleOutcome() {
    let point = this.data.features.find(f => f.geometry.type === 'Point');
    let polygon = this.data.features.find(f => f.geometry.type === 'Polygon');
    let isSuccess = this.selected.rule(point, polygon);
    this.ruleResultService.notifyRuleOutcome(isSuccess);
  }

  selected;

  rules = rules;

}
