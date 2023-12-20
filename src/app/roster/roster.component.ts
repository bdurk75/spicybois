import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface SpicyBoisRoster {
  name: string;
  position: string;
  height: string;
  weight: number;
}

const SPICYBOIS_DATA: SpicyBoisRoster[] = [
  {position: 'ST', name: 'Matt Murphy', height: "6'11\"", weight: 4},
  {position: 'CB', name: 'Andrew McLaughlin', height: "5'5\"", weight: 400},
  {position: 'CB', name: 'Brendan Gallagher', height: "5'6\"", weight: 400},
  {position: 'Bench', name: 'Brian Durkin Jr.', height: "7'0\"", weight: 120}
];

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})

export class RosterComponent {
  displayedColumns: string[] = ['position', 'name', 'height', 'weight'];
  dataSource = SPICYBOIS_DATA;
}
