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
   UserForgetBck(data: any){
     return this.http.get<any>(this.session.baseurl+ 'UserAuth?email='+data.email);
   }
    UserSetPinBck(userId: any, data: any){
      return this.http.patch(this.session.baseurl+'UserAuth/' + userId, data);
   }
    UserLogintBck(data: any){
     return this.http.get<any>(this.session.baseurl+ `UserAuth?email=${data.email}&password=${data.password}`);
   }
}
