import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddprojectComponent } from './addproject/addproject.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
path:'addproject', component:AddprojectComponent
  },
  {
    path:'dashboard', component:DashboardComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
