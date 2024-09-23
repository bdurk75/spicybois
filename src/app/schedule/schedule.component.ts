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
  {date: '9/7', time: '8 a.m.', opponent: "@FC Skoge", location: "Bristol Township Park", result:"W"},
  {date: '9/14', time: '8 p.m.', opponent: "Mighty Ducks", location: "Bonner High School", result:"W"},
  {date: '9/21', time: '8 a.m.', opponent: "@FC Cornos", location: "Northeast High School", result:"L"},
  {date: '9/28', time: '8:15 a.m.', opponent: "@Statesmen FC", location: "bristol", result:""},
  {date: '10/5', time: '2:30 p.m.', opponent: "FC Delta", location: "Ramp Field", result:""},
  {date: '10/12', time: '1:30 p.m.', opponent: "Cunningham Squires", location: "Harry Truman High School", result:""},
  {date: '10/19', time: '1:30 p.m.', opponent: "@Yerba Crew - BotG", location: "Bonner High School", result:""},
  {date: '10/26', time: '10:45 a.m.', opponent: "Sunday Georgie", location: "Bryn Athyn College", result:""},
  {date: '11/2', time: '10:45 a.m.', opponent: "Laurel FC", location: "Harry Truman High School", result:""},
  {date: '11/9', time: '10:45 a.m.', opponent: "Mighty Ducks", location: "Harry Truman High School", result: ""},
  {date: '11/16', time: '10:15 a.m.', opponent: "@Statesmen FC", location: "Holy Family University", result:""}
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
