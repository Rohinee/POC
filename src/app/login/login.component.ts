import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  public  email:  any;
  public  password:  any;


  constructor(private  dialog:  MatDialog) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  login(){
      if(this.email  ===  "email@email.com"  &&  this.password  === "p@ssw0rd")
      {
          //this.router.navigate(['success']);
      }
      else
      {
          // this.dialog.open(MessageComponent,{ data: {
          // message:  "Error!!!"
          // }});
      }
  }

}
