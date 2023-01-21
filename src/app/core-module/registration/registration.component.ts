import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/service file/main-service.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb:FormBuilder,private _ser: MainServiceService,private route:Router) { }
registerform= this.fb.group({
  fname:[''],
  lname:[''],
  email:[''],
  password:['']
})

  ngOnInit(): void {
  }
  
  regist(){
  console.log(this.registerform)
  this.registerform.markAllAsTouched()

  if(this.registerform.valid){
  this._ser.adduser(this.registerform.value).subscribe(()=>{ })
 this.registerform.reset()
 alert('Register Successfully')
 this.route.navigate(['/login'])
  }else{
    alert('Enter valid Details')
  }
  }


}
