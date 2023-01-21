
import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiserviceService } from '../apiservice.service';
import * as alertify from 'alertifyjs';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
editdata:any
  constructor(private builder:FormBuilder,private dialog:MatDialog,
    private api:ApiserviceService,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    if (this.data.id != '' && this.data.id != null){
      this.api.Getcompanybycode(this.data.id).subscribe((res:any)=>{
      this.editdata=res
      this.companyform.setValue({id: this.editdata.id, name: this.editdata.name, empcount: this.editdata.empcount,
        revenue: this.editdata.revenue, address: this.editdata.address, isactive: this.editdata.isactive})
      })
    }
  }
companyform=this.builder.group({
  id:this.builder.control({value:'',disabled:true}),
  name:this.builder.control('',Validators.required),
  empcount:this.builder.control('',Validators.required),
  revenue:this.builder.control('',Validators.required),
  address:this.builder.control('',Validators.required),
  isactive:this.builder.control(true),

})
SaveCompany() {
  if (this.companyform.valid) {
    const Editid = this.companyform.getRawValue().id;
    if (Editid != '' && Editid != null) {
      this.api.updatecompany(Editid, this.companyform.getRawValue()).subscribe(response => {
        this.closepopup();
        alertify.success("Updated successfully.")
      });
    } else {
      this.api.CreateCompany(this.companyform.value).subscribe(response => {
        this.closepopup();
        alertify.success("saved successfully.")
      });
    }
  }
}
closepopup(){
  this.dialog.closeAll()
}
}
