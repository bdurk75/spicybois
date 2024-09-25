import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface SpicyBoisRoster {
  number: string;
  name: string;
  position: string;
}

const SPICYBOIS_DATA: SpicyBoisRoster[] = [
  {number:"00", position: 'RM', name: 'Cephas Toninga'},
  {number:"1", position: 'FW', name: 'Nicholas Roback'},
  {number:"3", position: 'CB', name: 'Jon Richards'},
  {number:"4", position: 'CB', name: 'Noah Kwortnik'},
  {number:"5", position: 'CB', name: 'Andrew McLaughlin'},
  {number:"7", position: 'FW', name: 'Jimmy Perrin'},
  {number:"8", position: 'CDM', name: 'Zach Hartzog'},
  {number:"9", position: 'ST', name: 'Matt Murphy'},
  {number:"11", position: 'CAM', name: 'Joshua Deets'},
  {number:"12", position: 'CB', name: 'Kevin Murphy'},
  {number:"13", position: 'GK', name: 'Jo Kehinde'},
  {number:"15", position: 'CB', name: 'Brian Canfield'},
  {number:"18", position: 'RB', name: 'Jake Hill'},
  {number:"19", position: 'CAM', name: 'Mike Gajian'},
  {number:"22", position: 'RB', name: 'Brendan McLaughlin'},
  {number:"23", position: 'CM', name: 'Jake Guevara'},
  {number:"25", position: 'LB/RB', name: 'Billy Wang'},
  {number:"27", position: 'FW', name: 'Matt Farrell'},
  {number:"31", position: 'FB', name: 'Jose Ortiz'},
  {number:"32", position: 'GK', name: 'Ben Krongard'},
  {number:"33", position: 'LB', name: 'Tommaso Girelli'},
  {number:"44", position: 'Left Bench', name: 'Brendan Gallagher'},
  {number:"52", position: 'ST', name: 'Vincent Carosella'},
  {number:"66", position: 'CDM', name: 'Joel Mbock'},
  {number:"75", position: 'Right Bench', name: 'Brian Durkin Jr.'},
  {number:"99", position: 'CM', name: 'Temi Olaoluniyi'},
  {number:"", position: 'ST', name: 'Mike Chaffee'},
  {number:"", position: 'CAM', name: 'Aidan Jerome'},
  {number:"", position: 'CM', name: 'Brendan MacKay'}
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
