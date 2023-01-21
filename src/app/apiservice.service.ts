import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { companyModel } from './Model/companyModel';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
  apiurl=" http://localhost:3000/company"

  Getallcompany():Observable<companyModel[]>{
    return this.http.get<companyModel[]>(this.apiurl)
  }
  Getcompanybycode(id:any):Observable<companyModel>{
    return this.http.get<companyModel>(this.apiurl+'/'+id)
  }
  Removecompanybycode(id:any):Observable<companyModel>{
    return this.http.delete<companyModel>(this.apiurl+'/'+id)
  }
  CreateCompany(companydata:any){
    return this.http.post(this.apiurl,companydata)
  }
  updatecompany(id:any,companydata:any){
    return this.http.put(this.apiurl+'/'+id,companydata)
  }
}
