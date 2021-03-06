import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule, 
        MatToolbarModule,
        MatListModule,
        MatRadioModule,
        MatSliderModule,
        MatTabsModule,
        MatInputModule,
        MatFormFieldModule,
        MatGridListModule,
        MatButtonModule,
        MatTableModule,
        MatSlideToggleModule
        } from '@angular/material';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { SetValuesComponent } from './set-values/set-values.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { Http, HttpModule } from '@angular/http';
import { AuthService } from './auth.service';
import { WrapperComponent } from './wrapper/wrapper.component';

import { NgxGaugeModule } from 'ngx-gauge';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    SetValuesComponent,
    DashboardComponent,
    LoginComponent,
    WrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AsyncLocalStorageModule,
    /* Material Imports Start */
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatRadioModule,
    MatSliderModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    /* Material Imports End */
    NgxGaugeModule,
    ChartsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
