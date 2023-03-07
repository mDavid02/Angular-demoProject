import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IndexComponent } from '../myComponents/index/index.component';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private route:Router) { 
  }

  indexcomponent:IndexComponent=new IndexComponent();
   isEnable:boolean=true;

   setEnable(answer:boolean){
    this.isEnable=answer;
    console.log("this is service",this.isEnable);
    this.indexcomponent.isEnable=answer;
    this.indexcomponent.ngOnInit();
    this.route.navigate(['index/schedule']);
   }

}
