import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-flightlist',
  templateUrl: './flightlist.component.html',
  styleUrls: ['./flightlist.component.scss']
})
export class FlightlistComponent implements OnInit {

  constructor(public dialog:MatDialog) { }
  
  ngOnInit(): void {
  }
  

  }
