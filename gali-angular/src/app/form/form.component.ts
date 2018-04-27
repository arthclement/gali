import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';
import { User } from './../user';
import { ApiService } from './../api.service';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [ ApiService ]
})

@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
  ],
})

export class FormComponent implements OnInit {

  constructor(public apiService: ApiService) { }

  ngOnInit() {
  }

}
