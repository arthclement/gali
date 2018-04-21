import { Component, OnInit } from '@angular/core';
//jquery import
import * as $ from 'jquery';

import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { BodyComponent } from '../body/body.component';

//import menu categories

const routes: Routes = [
  {
    path: '',
    component: BodyComponent
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  
 
})
export class SidebarComponent {


  constructor() { }


}
