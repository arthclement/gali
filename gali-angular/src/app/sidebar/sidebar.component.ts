import { Component, OnInit, NgModule } from '@angular/core';
// Router for path
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from '../form/form.component';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot([])
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
