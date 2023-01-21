import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FserviceService {

  sub=new BehaviorSubject<any>('')
  constructor(private http:HttpClient) { }
  getfservice(){
    return this.http.get('http://localhost:3000/flightlist')
  }

  getdata(obj:any){
    return this.sub.next(obj)
  }
}
