import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, shareReplay, take, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { DASHBOARD_CONSTANTS } from '../constant/dashBoard';
import { IProject } from '../model/project.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiurl=environment.BASEAPI_URL;
  constructor(private _http:HttpClient) { }


  // getDashboardData():Observable <IProject[]> {
  //   return this._http.get<IProject[]>(`${this.apiurl}/${DASHBOARD_CONSTANTS.DASHBOARD_DATA}`);
  // }

  getDashboardData(): Observable<IProject[]> {
    return this._http.get<IProject[]>(`${this.apiurl}/${DASHBOARD_CONSTANTS.DASHBOARD_DATA}`)
      .pipe(
        retry(2), // Retry the request up to 2 times in case of failure
        catchError(this.handleError), // Centralized error handling
        shareReplay(1),  // Cache the response to optimize performance
      );
  }
  
  // Centralized error handling
  private handleError(error: HttpErrorResponse) {
    console.error('Error fetching dashboard data:', error);
    return throwError(() => new Error('Failed to load dashboard data, please try again later.'));
  }
  
}
