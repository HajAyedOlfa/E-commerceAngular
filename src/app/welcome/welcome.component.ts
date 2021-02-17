import { Component, OnInit } from '@angular/core';

export interface Tile { //exporté l'interface Tile
  cols: number;
  rows: number;
  text: string;
  class: string;
}


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  tiles: Tile[] = [
    {
      text:'One',
      cols: 2,
      rows: 2,
      class: 'one-tile'
    },
    {
      text:'Two',
      cols: 1,
      rows: 1,
      class: 'two-tile'
    },
    {
      text:'Three',
      cols: 1,
      rows: 2,
      class: 'three-tile'
    },
    {
      text:'Four',
      cols: 1,
      rows: 2,
      class: 'four-tile'
    },
    {
      text:'Five',
      cols: 2,
      rows: 1,
      class: 'five-tile'
    },
    {
      text:'Six',
      cols: 1,
      rows: 1,
      class: 'six-tile'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
