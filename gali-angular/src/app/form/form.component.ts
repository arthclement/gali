import { Component, NgModule } from '@angular/core';
// import the class
import { CardexIndividual } from '../cardexIndividual';
import { CARDEXGLOBAL } from '../cardexGlobal';


// error message can't find module
//import { userInfo } from 'os';
import {  } from '@angular/core/src/render3';
//NgModel Here
import { NgModel, FormsModule } from '@angular/forms';
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
    //ngModule import here
    FormsModule
    

  ],
})

export class FormComponent  {

  // Individual User Profile as an object
  user: CardexIndividual = {
    firstname: 'dwdfnwd',
    lastname: 'SFqfhdfB',
    //is the format ok ?
    birthdate: '1870, 12, 05',
    gender: true,
    adress :'djsjg',
  

    

    iduser: 2,

    phone: '000000000',

    //to do add role in the template
    role:'dwf',

  };
  


  //need an http get request for just one JSON object

  
  



  
  
  
    

  
  

  constructor() { }

  ngOnInit() {
  }

}
