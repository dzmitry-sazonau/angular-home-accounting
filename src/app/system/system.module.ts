import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SystemRoutingModule } from './system-routing.module';

import { SharedModule } from 'app/shared/shared.module';
import { HistoryPageComponent } from './history-page/history-page.component';
import { BillPageComponent } from './bill-page/bill-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import { PlanningPageComponent } from './planning-page/planning-page.component';
import { SystemComponent } from './system.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ],
  declarations: [
    HistoryPageComponent,
    BillPageComponent,
    RecordsPageComponent,
    PlanningPageComponent,
    SystemComponent,
    SidebarComponent,
    HeaderComponent,
    DropdownDirective
  ]
})

export class SystemModule { }
