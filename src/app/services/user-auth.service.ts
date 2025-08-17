import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionService } from '../core/session.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(public http:HttpClient, public session:SessionService) { }
    UserRagisterBck(data: any){
     return this.http.post<any>(this.session.baseurl+'UserAuth', data);
  }
}
