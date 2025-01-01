import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { PARANT_CHILD_CONSTANT } from '../constant/parentChild';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentandchildService {

  private apiurl=environment.BASEAPI_URL;
  constructor(private _Http:HttpClient) { }

  getParentdeperantData():Observable<any>
  {
    return this._Http.get(`${this.apiurl}/${PARANT_CHILD_CONSTANT.GETPARANENT_DEPERANENT_DATA}`);
  }

  getChildDeperentdata(id:number):Observable<any>
  {
    return this._Http.get(`${this.apiurl}/${PARANT_CHILD_CONSTANT.GET_CHID_DEPERANENT_DATA}/${id}`);
  }
}
