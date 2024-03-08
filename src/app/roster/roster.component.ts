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
  {number:"2", position: 'FW', name: 'Isaiah Fox'},
  {number:"3", position: 'CB', name: 'Jon Richards'},
  {number:"4", position: 'CB', name: 'Noah Kwortnik'},
  {number:"5", position: 'CB', name: 'Andrew McLaughlin'},
  {number:"6", position: 'CM', name: 'Zach Yazdani'},
  {number:"7", position: 'FW', name: 'Jimmy Perrin'},
  {number:"8", position: 'CDM', name: 'Zach Hartzog'},
  {number:"9", position: 'ST', name: 'Matt Murphy'},
  {number:"10", position: 'CM', name: 'Felipe Garces'},
  {number:"11", position: 'CAM', name: 'Joshua Deets'},
  {number:"12", position: 'CB', name: 'Kevin Murphy'},
  {number:"13", position: 'GK', name: 'Jo Kehinde'},
  {number:"15", position: 'CB', name: 'Brian Canfield'},
  {number:"18", position: 'RB', name: 'Jake Hill'},
  {number:"19", position: 'CAM', name: 'Mike Gajian'},
  {number:"22", position: 'RB', name: 'Brendan McLaughlin'},
  {number:"23", position: 'CM', name: 'Jake Guevara'},
  {number:"24", position: 'ST', name: 'Enrico Romano'},
  {number:"25", position: 'LM/LB', name: 'Moussa Donzo'},
  {number:"27", position: 'FW', name: 'Matt Farrell'},
  {number:"30", position: 'FW', name: 'Brandon Ortiz'},
  {number:"31", position: 'FB', name: 'Jose Ortiz'},
  {number:"32", position: 'GK', name: 'Ben Krongard'},
  {number:"33", position: 'LB', name: 'Tommaso Girelli'},
  {number:"44", position: 'Left Bench', name: 'Brendan Gallagher'},
  {number:"52", position: 'ST', name: 'Vincent Carosella'},
  {number:"66", position: 'CDM', name: 'Joel Mbock'},
  {number:"75", position: 'Right Bench', name: 'Brian Durkin Jr.'},
  {number:"99", position: 'CM', name: 'Temi Olaoluniyi'}
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
