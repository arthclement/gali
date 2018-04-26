import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
  ],
})

export class FormComponent implements OnInit {

  ngOnInit() {
  }

}
