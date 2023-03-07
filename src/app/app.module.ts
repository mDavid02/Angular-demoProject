import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './myComponents/index/index.component';
import { HomeComponent } from './myComponents/home/home.component';
import { ProsperComponent } from './myComponents/prosper/prosper.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ScheduleComponent } from './myComponents/schedule/schedule.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    ProsperComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,ReactiveFormsModule,FormsModule,MatInputModule,MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
