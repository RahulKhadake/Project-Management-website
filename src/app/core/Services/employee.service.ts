import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { EMPLOYEE_CONSTANTS } from '../constant/empContants';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = environment.BASEAPI_URL;
  constructor(private http:HttpClient) { }

  getEmployee(): Observable<any> {
    return this.http.get(`${this.apiUrl}/${EMPLOYEE_CONSTANTS.GET_ALL_EMPLOYEE}`);
  }
  CreateEmployee(data:Employee):Observable<any>{
    return this.http.post(`${this.apiUrl}/${EMPLOYEE_CONSTANTS.CREATE_EMPLOYEE}`,data);
  }

  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${EMPLOYEE_CONSTANTS.DELETE_EMPLOYEE}/${id}`);
  }

  UpdateEmployee(id: number, data: Employee): Observable<any> {
    return this.http.put(`${this.apiUrl}/${EMPLOYEE_CONSTANTS.UPDATE_EMPLOYEE}/${id}`, data);
  }
  
  
}
