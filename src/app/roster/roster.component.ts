import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface SpicyBoisRoster {
  number: string;
  name: string;
  position: string;
}

const SPICYBOIS_DATA: SpicyBoisRoster[] = [
  {number:"6", position: 'ST', name: 'Matt Murphy'},
  {number:"5", position: 'CB', name: 'Andrew McLaughlin'},
  {number:"69", position: 'CB', name: 'Brendan Gallagher'},
  {number:"75", position: 'Bench', name: 'Brian Durkin Jr.'},
  {number:"10", position: 'CM', name: 'Felipe Garces'},
  {number:"11", position: 'CAM', name: 'Joshua Deets'},
  {number:"12", position: 'CB', name: 'Kevin Murphy'},
  {number:"13", position: 'GK', name: 'Jo Kehinde'},
  {number:"", position: 'CM', name: 'Zach Yazdani'},
  {number:"21", position: 'CAM', name: 'Mike Gaijan'},
  {number:"22", position: 'RB', name: 'Brendan McLaughlin'},
  {number:"23", position: 'CM', name: 'Jake Guevara'},
  {number:"", position: 'CDM', name: 'Zach Hartzog'},
  {number:"27", position: 'FW', name: 'Matt Farrell'},
  {number:"32", position: 'GK', name: 'Ben Krongard'},
  {number:"33", position: 'LB', name: 'Tommaso Girelli'},
  {number:"52", position: 'ST', name: 'Vincent Carosella'},
  {number:"65", position: 'FW', name: 'Jimmy Perrin'},
  {number:"99", position: 'CM', name: 'Temi Olaoluniyu'}
];

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})

export class RosterComponent {
  displayedColumns: string[] = ['number','position', 'name'];
  dataSource = SPICYBOIS_DATA;
}
