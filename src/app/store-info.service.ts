import { Injectable } from '@angular/core';
import { Tile} from './models/tile';


@Injectable({
  providedIn: 'root'
})
export class StoreInfoService {
  tiles: Tile[] = [
    {
      text:'Shoes',
      cols: 2,
      rows: 2,
      class: 'one-tile',
      id: 1
    },
    {
      text:'Dress',
      cols: 1,
      rows: 1,
      class: 'two-tile',
      id: 2
    },
    {
      text:'T-shirt',
      cols: 1,
      rows: 2,
      class: 'three-tile',
      id: 3
    },
    {
      text:'Shirt',
      cols: 1,
      rows: 2,
      class: 'four-tile',
      id: 4
    },
    {
      text:'Suit',
      cols: 2,
      rows: 1,
      class: 'five-tile',
      id: 5
    },
    {
      text:'Pants',
      cols: 1,
      rows: 1,
      class: 'six-tile',
      id: 6
    },
  ]
  constructor() { }
}
