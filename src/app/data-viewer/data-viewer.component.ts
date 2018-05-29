import { Component, OnInit, Input } from '@angular/core';
import { DataUpdateService } from '../data-update.service';

@Component({
  selector: 'app-data-viewer',
  templateUrl: './data-viewer.component.html',
  styleUrls: ['./data-viewer.component.css']
})
export class DataViewerComponent implements OnInit {

  @Input() data;

  constructor(private dataUpdateService: DataUpdateService) { }

  ngOnInit() {
  }

  notifyChange(event) {
    let j = JSON.parse(this.data);
    this.dataUpdateService.notifyNewData(j);
  }
}
