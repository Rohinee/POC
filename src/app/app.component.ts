import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import myData from './util.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ShoppingSite';
 
  productData: { productName: string; desc: string; price: string; img: string; }[] = [];
  images: { title: string; short: string; src: string; }[] = [];
   
  constructor(config: NgbCarouselConfig,
    public dialog: MatDialog) {
    config.interval = 10000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  ngOnInit(): void {
    this.images = myData.data.sliderImage;
    this.productData = myData.data.productInfo;
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  openLoginForm() {
    let dialogRef = this.dialog.open(LoginComponent, {
      height: '400px',
      width: '400px',
    });
  }
}
