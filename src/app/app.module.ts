import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import { RosterComponent } from './roster/roster.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PicturesComponent } from './pictures/pictures.component';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RosterComponent,
    ScheduleComponent,
    PicturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    MatButtonModule,
    MatTableModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
