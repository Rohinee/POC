import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productInfo: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    productData: any
  }) { }

  ngOnInit(): void {
    this.productInfo = this.data.productData;
  }

}
