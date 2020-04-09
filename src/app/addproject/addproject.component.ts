import { Component, OnInit, NgZone } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators,FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { TimesheetService } from '../timesheet.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
  addprojectname:FormGroup;
  addproarry:any=[];
  day;
x;
datestr;
days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    constructor(private fbuilder:FormBuilder,private ngZone: NgZone,private router: Router,public servicetimeshet:TimesheetService) 
    {  this.x=new Date();
this.datestr = this.days[this.x.getDay()] + "," + this.months[this.x.getMonth()]+ "," + this.x.getDate();
    }
AddProjectDetails(){
  this.addprojectname=this.fbuilder.group({
    Projectname:[''],
    resourcedate:[''],
    resoucehrs:['']
    
  })
}

  ngOnInit() {
this.AddProjectDetails();
this.datestr;
  }
  onSubmit(){
    this.servicetimeshet.CreateTimesheet(this.addprojectname.value).subscribe(res=>{
      console.log("details added");
      //this.ngZone.run(() => this.router.navigateByUrl('/dashboard'))
      this.router.navigate(['/dashboard'])
    });
  }  
  

}
