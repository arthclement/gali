import { Component, OnInit, NgModule } from '@angular/core';
//jquery import
import * as $ from 'jquery';

//Router for path
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from '../form/form.component';

import { AgendaComponent } from '../agenda/agenda.component';

//config for categories navigation

@NgModule({
  declarations: [
    AgendaComponent,
    FormComponent,

  ],
  imports:[
    RouterModule.forRoot([
      {
        path:'', component: AgendaComponent
      },
      {
        path:'form', component: FormComponent
      },
    ])

  ]
  
})

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  
 
})
export class SidebarComponent {


  constructor() { }


}
