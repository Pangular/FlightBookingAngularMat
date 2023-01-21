import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightbookingRoutingModule } from './flightbooking-routing.module';
import { BookingComponent } from './booking/booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlightlistComponent } from './flightlist/flightlist.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    BookingComponent,
    FlightlistComponent
  ],
  imports: [
    CommonModule,
    FlightbookingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule 
  ],
  exports:[
    BookingComponent,
    FlightlistComponent
  ]
})
export class FlightbookingModule { }
