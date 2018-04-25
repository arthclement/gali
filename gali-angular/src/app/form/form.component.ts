import { Component, NgModule, OnInit } from '@angular/core';
// import the class
import { CardexIndividual } from '../cardexIndividual';
import { CARDEXGLOBAL } from '../cardexGlobal';
//import Http get request module
import { HttpClientModule, HttpClient } from '@angular/common/http';


// error message can't find module
//import { userInfo } from 'os';
import {  } from '@angular/core/src/render3';
//NgModel Here
import { NgModel, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';



@Component({
  //change the output
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

@NgModule({
  declarations: [
    HttpClientModule
    //clas
    
  ],
  imports:[
    //ngModule import here
    FormsModule
    

  ],
})

export class FormComponent implements OnInit {

  

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


  //test with fake json request
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com/';
  //need an http get request for just one JSON object

  posts: any;
  constructor(private http: HttpClient) { }

  //the get request
  getPosts(){
    this.posts = this.http.get(this.ROOT_URL + '/posts')

  }
  ngOnInit() {
    
  }

}
