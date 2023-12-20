import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RosterComponent } from './roster/roster.component';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { PicturesComponent } from './pictures/pictures.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'roster', component: RosterComponent},
  { path: 'schedule', component: ScheduleComponent},
  { path: 'pictures', component: PicturesComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
