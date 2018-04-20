import { Component } from '@angular/core';
// binding
import { Cardex } from '../cardex';
// error message can't find module
//import { userInfo } from 'os';
import { c } from '@angular/core/src/render3';
@Component({
  //change the output
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
//contains component class
export class FormComponent  {

  // create new object
 // Cardex = new Cardex();

  constructor() { }

  ngOnInit() {
  }

}
