import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './myComponents/home/home.component';
import { IndexComponent } from './myComponents/index/index.component';
import { ProsperComponent } from './myComponents/prosper/prosper.component';
import { ScheduleComponent } from './myComponents/schedule/schedule.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
   },
   {
    path:'index',
    component:IndexComponent,
    children: [
      { 
        path: 'prosper', component: ProsperComponent
     },
     {
      path:'schedule',
      component:ScheduleComponent
     }
  ]
   }
  // {
  //   path:'prosper',
  //   component:ProsperComponent,
  // },
  // {
  //   path:'schedule',
  //   component:ScheduleComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
