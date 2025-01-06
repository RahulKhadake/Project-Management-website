import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { EMPLOYEE_CONSTANTS } from '../constant/empContants';
import { CREATEEMPPROJECT } from '../model/createEmpProject.model';

@Injectable({
  providedIn: 'root'
})
export class GetprojectEmployeeService {

  private apiurl=environment.BASEAPI_URL;
  constructor(private _http:HttpClient) { }

  getProjectEmployeeByDI(){
      return this._http.get(`${this.apiurl}/${EMPLOYEE_CONSTANTS.GET_PEOJECT_EMPLOYEE_ID}`);
  }
  addNewProjectEmployee(obj:CREATEEMPPROJECT){
    return this._http.post(`${this.apiurl}/${EMPLOYEE_CONSTANTS.CREATE_NEW_PROJECT_EMPLOYEE}`,obj);
  }
}
