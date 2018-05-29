import { Component, OnInit } from '@angular/core';
import actions from './actions'
import { ActionUpdateService } from '../action-update.service';

@Component({
  selector: 'app-action-selector',
  templateUrl: './action-selector.component.html',
  styleUrls: ['./action-selector.component.css']
})
export class ActionSelectorComponent implements OnInit {

  constructor(private actionUpdateService: ActionUpdateService) { }

  ngOnInit() {
    this.selected = actions[0];
  }

  selected;

  actions = actions;

  actionChanged(event){
    this.actionUpdateService.notifyNewAction(this.selected);
  }
}
