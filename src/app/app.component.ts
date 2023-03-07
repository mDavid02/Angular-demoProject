import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoProject';
  isEnable=true;
  isEnableFunc(enable:any)
  {
    console.log("isenacblefunction is working");
    this.isEnable=enable;
  }
}
