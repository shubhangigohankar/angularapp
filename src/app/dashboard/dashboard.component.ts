import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators,FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { TimesheetService } from '../timesheet.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
todaydate=new Date();
beforedate;
afterdate;
day;
x;
dateStr;
days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
Projectlist:any=[];
  constructor(private router: Router,public servicetimeshet:TimesheetService) {
  this.x=new Date();
this.dateStr = this.days[this.x.getDay()] + "," + this.months[this.x.getMonth()]+ "," + this.x.getDate();
  }

loadEmployee(){
  return this.servicetimeshet.GetTimesheet().subscribe((data:{})=>{
    this.Projectlist=data;
  })
}
   showdate(){
     
   }
  
  ngOnInit(){
    this.loadEmployee();
  }
  
}
