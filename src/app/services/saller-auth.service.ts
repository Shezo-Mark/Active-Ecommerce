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
}
