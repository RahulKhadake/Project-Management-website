import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { EMPLOYEE_CONSTANTS } from '../constant/empContants';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = environment.BASEAPI_URL;
  constructor(private http:HttpClient) { }

  getEmployee(): Observable<any> {
    return this.http.get(`${this.apiUrl}/${EMPLOYEE_CONSTANTS.GET_ALL_EMPLOYEE}`);
  }
  
}
