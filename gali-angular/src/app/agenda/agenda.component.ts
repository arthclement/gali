//added module
import { Component, OnInit, NgModule } from '@angular/core';
//router for calendar path
import { Routes, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
  ],

  //add Routes
  imports: [
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
