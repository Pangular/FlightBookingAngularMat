import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiserviceService } from '../apiservice.service';
import { companyModel } from '../Model/companyModel';
import { PopupComponent } from '../popup/popup.component';
import * as alertify from 'alertifyjs';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

constructor(private dialog:MatDialog,private api:ApiserviceService) { }
@ViewChild(MatPaginator) _paginator!:MatPaginator;
@ViewChild(MatSort)_sort!:MatSort;
finaldata:any
companydata!:companyModel[];
  ngOnInit(): void {
    this.LoadCompany();
  }
  displayColums:string[]=["id","name","empcount","revenue","address","isactive","action"]

Openpopup(id:any){
const _popup=this.dialog.open(PopupComponent,{
  width:'500px',
  exitAnimationDuration:'1000ms',
  enterAnimationDuration:'1000ms',
  data:{
    id:id
  }
})
_popup.afterClosed().subscribe(r=>{
  this.LoadCompany();
})
}
LoadCompany() {
  this.api.Getallcompany().subscribe(response => {
    this.companydata = response;
    // console.log(this.companydata)
    this.finaldata=new MatTableDataSource<companyModel>(this.companydata);
    this.finaldata.paginator=this._paginator;
    this.finaldata.sort=this._sort;
  });
}

EditCompany(id:any){
this.Openpopup(id)
}

RemoveCompany(id: any) {
  alertify.confirm("Remove Company", "do you want remove this company?", () => {
    this.api.Removecompanybycode(id).subscribe(r => {
      this.LoadCompany();
    });
  }, function () {

  })


}
}
