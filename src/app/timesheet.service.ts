import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Timesheet } from './timesheet';
@Injectable({
  providedIn: 'root'
})
export class TimesheetService {
baseurl="http://localhost:3000";
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  CreateTimesheet(data): Observable<Timesheet> {
    return this.http.post<Timesheet>(this.baseurl + '/employees/', JSON.stringify(data), this.httpOptions)
  }  
  GetTimesheet(): Observable<Timesheet> {
    return this.http.get<Timesheet>(this.baseurl + '/employees/')

  }

}
