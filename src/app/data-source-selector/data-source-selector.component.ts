import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { office, trainStation } from './sample-data'
import { DataUpdateService } from '../data-update.service';

@Component({
  selector: 'app-data-source-selector',
  templateUrl: './data-source-selector.component.html',
  styleUrls: ['./data-source-selector.component.css']
})
export class DataSourceSelectorComponent implements OnInit {

  selected;

  @Output() dataSourceChanged = new EventEmitter();

  dataSourceChangedInternal(evt) {
    this.dataSourceChanged.emit(evt);
    this.dataUpdateService.notifyNewData(this.selected.data);
  }

  geodata = [
    office,
    trainStation/*,
    {
      name: 'GeoJSON',
      description: 'Please provide GeoJSON data'
    }*/
  ];

  constructor(private dataUpdateService: DataUpdateService) {

  }

  ngOnInit() {
  }

}
