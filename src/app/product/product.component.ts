import { ifStmt, importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreInfoService } from '../store-info.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  index: number; //on declare une variable index 
  produceInfo: any; // déclarer une variable produceInfo de type any

  constructor(private route: ActivatedRoute, private storeInfo : StoreInfoService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.index = params['id'];
      this.produceInfo = this.storeInfo.tiles.reduce((obj, itm) => {
        return +this.index == itm.id ? itm : obj;
      }, {})

    })
  }

}
