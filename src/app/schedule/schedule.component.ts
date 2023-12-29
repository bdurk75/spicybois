import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface SpicyBoisRoster {
  date: string;
  time: string;
  opponent: string;
  location: string;
}

const SPICYBOIS_DATA: SpicyBoisRoster[] = [
  {date: '1/1', time: '9:00 a.m.', opponent: "Real Madrid CF", location: "Anders Road"},
  {date: '1/8', time: '1:00 p.m.', opponent: "Manchester United FC", location: "Anders Road"},
  {date: '1/15', time: '10:30 a.m.', opponent: "FC Barcelona", location: "Camp Nou"},
  {date: '1/22', time: '4:00 p.m.', opponent: "Liverpool FC", location: "Anders Road"},
  {date: '1/45', time: '11:00 a.m.', opponent: "FC Bayern Munich", location: "Anders Road"}
];

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  displayedColumns: string[] = ['date', 'time', 'opponent', 'location'];
  dataSource = SPICYBOIS_DATA;
}
