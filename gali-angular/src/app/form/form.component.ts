import { Component, NgModule } from '@angular/core';
// import the class
import { Cardex } from '../cardex';


// error message can't find module
//import { userInfo } from 'os';
import {  } from '@angular/core/src/render3';
import { NgModel } from '@angular/forms';
@Component({
  //change the output
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

@NgModule({
  declarations: [
    //clas
    
  ],
  imports:[
    

  ],
})

export class FormComponent  {
  user: Cardex = {
    firstname: 'dwdfnwd',
    lastname: 'SFqfhdfB',
    //is the format ok ?
    birthdate: '1870, 12, 05',
    gender: 'female',
  //type gender to change

    street:'lalee',
    postcode: '90000',
    city: 'ouii',
    country: 'fghj',

    iduser: 2,

    phone: '000000000',
  };
  
  
    

  
  

  constructor() { }

  ngOnInit() {
  }

}
