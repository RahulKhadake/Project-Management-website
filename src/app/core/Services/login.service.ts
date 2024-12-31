import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { IUserLogin } from '../model/login.model';
import { EMPLOYEE_CONSTANTS } from '../constant/empContants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }
  private apiUrl = environment.BASEAPI_URL;
  login(userLogin: IUserLogin): Observable<any> {
    return this._http.post(`${this.apiUrl}/${EMPLOYEE_CONSTANTS.LOGIN}`, userLogin);
  }
}
