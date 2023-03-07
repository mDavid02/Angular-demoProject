import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder}from '@angular/forms'
import { Router } from '@angular/router';
import { Service1Service } from 'src/app/MyService/service1.service';


@Component({
  selector: 'app-prosper',
  templateUrl: './prosper.component.html',
  styleUrls: ['./prosper.component.css']
})
export class ProsperComponent implements OnInit {

  constructor(private route:Router,private service:Service1Service) { }

  insuredName:string="abc";
  identificationNumber:number=10;

  ngOnInit(): void {}
    reactiveForm :FormGroup = new FormGroup(
      {
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(25),
      ]),
      id: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ])
    })

  get f(){
    return this.reactiveForm.controls;
  }
 enable:boolean=false;
 @Output() isEnable=new EventEmitter<boolean>();
  validate()
  {
    console.log(this.reactiveForm.value);
    if(this.reactiveForm.valid){
      //this.isEnable.emit(this.enable);
      this.service.setEnable(false);
      // this.route.navigate(['index/schedule']);
    }
  }

}
