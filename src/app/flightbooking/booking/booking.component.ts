import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FserviceService } from 'src/app/service file/fservice.service';
import { MatDialog } from '@angular/material/dialog';
import { FlightlistComponent } from '../flightlist/flightlist.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor(private dialog:MatDialog,private fb:FormBuilder,private http:HttpClient,private _service: FserviceService) { }
  book:any
  result:any
   flight= this.fb.group({
   from:['',Validators.required],
   to:['',Validators.required],
   date:['']
  })
  ngOnInit(): void {
    this._service.getfservice().subscribe((val)=>{
      this.book=val
      console.log(this.book)
    })
  }
  search()
  { 
    // this.flight.markAllAsTouched()
    // if(this.flight.valid){

      this.result=
this.book.filter((obj:any)=>this.flight.value.from==obj.from &&  this.flight.value.to==obj.to)
      console.log(this.result)
   }
  //  fbook(){

  //  }

   fbook(obj1:any){
this._service.getdata(obj1)
this.dialog.open(FlightlistComponent ,{
  width:'500ox',
  height:'400px'
})

   }



    }


