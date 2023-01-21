import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private http:HttpClient) { }
adduser(obj:any){
  return this.http.post('http://localhost:3000/regis',obj)
}


getlogin(){
  return this.http.get('http://localhost:3000/users')
}

}
