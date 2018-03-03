import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SetValuesComponent } from './set-values/set-values.component';
import { ChartComponent } from './chart/chart.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'app', 
    component: WrapperComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'statistics', component: ChartComponent },
      { path: 'edit', component: SetValuesComponent }
    ]
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: [],
})
export class AppRoutingModule { }
