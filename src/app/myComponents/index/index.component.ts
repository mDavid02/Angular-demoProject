import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'src/app/MyService/service1.service';
import { ProsperComponent } from '../prosper/prosper.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  //constructor(private service:Service1Service) { };
  constructor( ){}
  isEnable:boolean=true;
  isEnableFunc(enable:any)
  {
    console.log("isenacblefunction is working");
    this.isEnable=enable;
  }

  ngOnInit(): void {
    console.log("isEnable",this.isEnable);
  }
  

}
