import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddprojectComponent } from './addproject/addproject.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {MatInputModule } from '@angular/material/input';
import{MatDatepicker,MatDatepickerModule, } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import{MatFormField,MatFormFieldModule} from '@angular/material/form-field';
import{MatCard,MatCardModule,MatCardTitle,MatCardContent} from '@angular/material/card';
import { TimesheetService } from './timesheet.service';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
@NgModule({
  declarations: [
    AppComponent,
    AddprojectComponent,
    DashboardComponent,
    EmployeedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,MatCardModule

  ],
  providers: [TimesheetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
