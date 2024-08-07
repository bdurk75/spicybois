import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface SpicyBoisRoster {
  date: string;
  time: string;
  opponent: string;
  location: string;
  result: string;
}

const SPICYBOIS_DATA: SpicyBoisRoster[] = [
  {date: '3/9', time: '10:00 a.m.', opponent: "Inter Phila", location: "Germantown Supersite", result:"2-0 W"},
  {date: '3/16', time: '1:30 p.m.', opponent: "@Berber United", location: "Germantown Supersite", result:"1-0 W"},
  {date: '3/30', time: '10 a.m.', opponent: "Fishtown FC", location: "Bonner High School", result:"1-1 T"},
  {date: '4/6', time: '8:15 a.m.', opponent: "@Statesmen FC", location: "Bonner High School", result:"4-0 W"},
  {date: '4/14', time: '12:00 p.m.', opponent: "@Penn Chinese", location: "Lincoln High School Turf", result:"7-0 W"},
  {date: '4/20', time: '8:15 a.m.', opponent: "@OU Pride", location: "Bonner High School", result:"3-1 W"},
  {date: '4/27', time: '11:15 a.m.', opponent: "@FC Cornos", location: "Ramp Field", result:"1-1 T"},
  {date: '5/4', time: '10:45 a.m.', opponent: "@Philly Saint-Germain", location: "Academy of New Church", result:"1-0 W"},
  {date: '5/11', time: '10:00 a.m.', opponent: "Barenjager SC", location: "Bristol Township Park", result:"5-4 W"},
  {date: '5/18', time: '10:00 a.m.', opponent: "Inter Phila", location: "Germantown Supersite", result: ""},
  {date: '6/1', time: '11:45 a.m.', opponent: "@Berber United", location: "Bonner High School", result:""}
];

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  displayedColumns: string[] = ['date', 'time', 'opponent', 'location', 'result'];
  dataSource = SPICYBOIS_DATA;
}
