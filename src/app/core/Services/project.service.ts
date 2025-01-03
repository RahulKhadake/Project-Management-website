import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { EMPLOYEE_CONSTANTS } from '../constant/empContants';
import { PROJECT_CONSTANTS } from '../constant/projectconstant';
import { IProject } from '../model/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

   private apiurl=environment.BASEAPI_URL;
  constructor(private http:HttpClient) { }


  getAllEmployee():Observable<any>{
   
    return  this.http.get(`${this.apiurl}/${EMPLOYEE_CONSTANTS.GET_ALL_EMPLOYEE}`);

  }
  createProject(data:IProject):Observable<any>{
    return this.http.post(`${this.apiurl}/${PROJECT_CONSTANTS.CREATE_PROJECT}`,data);
  }

  getAllProject():Observable<any>{
    return this.http.get(`${this.apiurl}/${PROJECT_CONSTANTS.GET_ALL_PROJECT}`);
  }

  upDateProject(id:number,data:IProject):Observable<any>{
    return this.http.put(`${this.apiurl}/${PROJECT_CONSTANTS.UPDATE_PROJECT}/${id}`,data);
  }
    deleteProject(id:number):Observable<any>{
      return this.http.delete(`${this.apiurl}/${PROJECT_CONSTANTS.DELETE_PROJECT}/${id}`);
    }
}
