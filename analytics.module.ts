import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from './analytics.component';
import { Statement3Component } from './statement3/statement3.component';
import { HeaderComponent } from './header/header.component';
import {MatSelectModule} from '@angular/material/select';
import { StudentComponent } from './student/student.component'; 

@NgModule({
  declarations: [AnalyticsComponent, Statement3Component, HeaderComponent, StudentComponent],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
     MatSelectModule
  ]
})
export class AnalyticsModule { }
