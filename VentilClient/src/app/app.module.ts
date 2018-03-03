import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule, 
        MatToolbarModule,
        MatListModule,
        } from '@angular/material';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { SetValuesComponent } from './set-values/set-values.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { Http, HttpModule } from '@angular/http';
import { AuthService } from './auth.service';
import { WrapperComponent } from './wrapper/wrapper.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    TemperatureComponent,
    SetValuesComponent,
    DashboardComponent,
    LoginComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    /* Material Imports Start */
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
