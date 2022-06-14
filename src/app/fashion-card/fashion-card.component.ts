import { Component, Input, OnInit } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-fashion-card',
  templateUrl: './fashion-card.component.html',
  styleUrls: ['./fashion-card.component.scss']
})
export class FashionCardComponent implements OnInit {

  @Input() productInfo: any;

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  view() {
    let dialogRef = this.dialog.open(ProductDetailsComponent, {
      data: {
        productData: this.productInfo
      }
    });
  }

}
