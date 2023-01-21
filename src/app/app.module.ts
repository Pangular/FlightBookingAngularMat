import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModuleModule } from './core-module/core-module.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlightbookingModule } from './flightbooking/flightbooking.module';
import { CompanyComponent } from './company/company.component';
import { PopupComponent } from './popup/popup.component';
// import {MatTableModule} from '@angular/material/table';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatCheckboxModule} from '@angular/material/checkbox';
import { MaterialModule } from 'src/MaterialModule';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CoreModuleModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlightbookingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
