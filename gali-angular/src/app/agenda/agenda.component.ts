//added module
import { Component, OnInit, NgModule } from '@angular/core';

//jquery import
import * as $ from 'jquery';

//slider component import
import { SliderComponent } from '../slider/slider.component';

//router for calendar path
import { Routes, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SliderComponent,
  ],

  //add Routes
  imports: [
    RouterModule.forRoot([
      {
        path: 'slider',
        component: SliderComponent
      },
    ])
  ]
})


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
