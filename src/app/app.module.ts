import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { HowtoComponent } from './howto/howto.component';
import { DataSourceSelectorComponent } from './data-source-selector/data-source-selector.component';
import { DataViewerComponent } from './data-viewer/data-viewer.component';
import { RuleSelectorComponent } from './rule-selector/rule-selector.component';
import { MapViewerComponent } from './map-viewer/map-viewer.component';
import { NotificationComponent } from './notification/notification.component';
import { ActionSelectorComponent } from './action-selector/action-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    HowtoComponent,
    DataSourceSelectorComponent,
    DataViewerComponent,
    RuleSelectorComponent,
    MapViewerComponent,
    NotificationComponent,
    ActionSelectorComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
