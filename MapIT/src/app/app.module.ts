import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { NavMenuComponent } from '../navmenu/navmenu.component';
import { HomeComponent } from '../home/home.component';
import { FetchDataComponent } from '../fetchdata/fetchdata.component';
import { CounterComponent } from '../counter/counter.component';

import { AppComponent } from './app.component';

import { MarkersComponent } from './components/markers/markers.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkersComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
  })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
