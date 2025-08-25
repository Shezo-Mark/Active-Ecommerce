import { Injectable } from '@angular/core';
import { SessionService } from '../core/session.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    constructor(public http: HttpClient, public session:SessionService) { }
      productsAdd(data: any){
        debugger
     return this.http.post<any>(this.session.baseurl+'Products', data);
  }
}
