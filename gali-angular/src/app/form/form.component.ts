<<<<<<< HEAD
import { Component, NgModule } from '@angular/core';
// import the class
import { CardexIndividual } from '../cardexIndividual';

=======
import { Component, NgModule, OnInit } from '@angular/core';
// import the class
import { CardexIndividual } from '../cardexIndividual';

//import Http get request module
//import { HttpClientModule } from '@angular/common/http';

 





>>>>>>> Layout

// error message can't find module
//import { userInfo } from 'os';
import {  } from '@angular/core/src/render3';
//NgModel Here
import { NgModel, FormsModule } from '@angular/forms';
<<<<<<< HEAD
=======






>>>>>>> Layout
@Component({
  //change the output
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

@NgModule({
  declarations: [
<<<<<<< HEAD
    //clas
    
  ],
  imports:[
    //ngModule import here
    FormsModule
=======
    
    
    
  ],
  imports:[
    
    FormsModule,
    //HttpClientModule,
    
>>>>>>> Layout
    

  ],
})

<<<<<<< HEAD
export class FormComponent  {

  // User Profile
  user: CardexIndividual = {
=======
export class FormComponent implements OnInit {

  

  //CardexIndividual: {};
  // Individual User Profile as an object
  user: CardexIndividual = {
    role:'dwf',
>>>>>>> Layout
    firstname: 'dwdfnwd',
    lastname: 'SFqfhdfB',
    //is the format ok ?
    birthdate: '1870, 12, 05',
<<<<<<< HEAD
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
=======
    gender: true,
    adress : 'djdgjfgjfkjdfjsjg',
    iduser: 2,
    phone: '000000000',
    //to do add role in the template
    
  };
   

 /**
  //test with fake json request
  readonly ROOT_URL = '';
  //need an http get request for just one JSON object

  posts: '<Object>';
  constructor(private http: HttpClient) { }

  //the get request
  getPosts(){
    this.CardexIndividual = this.http.get(this.ROOT_URL + '/cardexIndividual')

  }
  */
  
  ngOnInit() {
    
>>>>>>> Layout
  }

}
