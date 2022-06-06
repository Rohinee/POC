import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fashion-card',
  templateUrl: './fashion-card.component.html',
  styleUrls: ['./fashion-card.component.scss']
})
export class FashionCardComponent implements OnInit {

  @Input() productInfo: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.productInfo);
  }

}
