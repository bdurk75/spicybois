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
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list'; 



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
    RouterModule,
    MatSidenavModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
