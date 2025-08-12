import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionService } from '../core/session.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SallerAuthService {
  constructor(public http: HttpClient, public session:SessionService) { }

  SallerRagisterBck(data: any){
     return this.http.post<any>(this.session.baseurl+'SallerAuth', data);
  }
    SallerLoginBck(data: any){
    return this.http.get<any>(this.session.baseurl+'SallerAuth?email='+data.email+'&password='+data.password);
  }
    SallerForgetBck(data: any){
    return this.http.get<any>(this.session.baseurl+'SallerAuth?email='+data.email);
  }
SallerSetPinBck(userId: string, data: any) {
  debugger
  return this.http.patch(this.session.baseurl+'SallerAuth/' + userId, data);
}
}
