import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/service file/main-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform = new FormGroup({
    emailid: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  userlist: any
  constructor(private _service: MainServiceService,private route:Router) { }
  ngOnInit(): void {
    this._service.getlogin().subscribe((res) => {
      //  console.log(res)
      this.userlist = res
    })
  }
  login() {
    this.loginform.markAllAsTouched()
    if(this.loginform.valid){
      for(let user of this.userlist){
if(this.loginform.value.emailid===user.email && this.loginform.value.password===user.password){
          alert('successfully login done')
          console.log(this.loginform)
          this.loginform.reset()
          //  this.route.navigate(['/fbook1'])
        }
        
    
    }
    

  }

}

}