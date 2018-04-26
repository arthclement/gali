import { Component, NgModule, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NgModel, FormsModule } from '@angular/forms';

=======
// import the class
import { CardexIndividual } from '../cardexIndividual';

//import Http get request module
//import { HttpClientModule } from '@angular/common/http';

 






// error message can't find module
//import { userInfo } from 'os';
import {  } from '@angular/core/src/render3';
//NgModel Here
import { NgModel, FormsModule } from '@angular/forms';






>>>>>>> f7f0e6f50fc300efadd55cac05af67ae271b6452
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

@NgModule({
  declarations: [
<<<<<<< HEAD
=======
    
    
    
>>>>>>> f7f0e6f50fc300efadd55cac05af67ae271b6452
  ],
  imports: [
    FormsModule,
<<<<<<< HEAD
=======
    //HttpClientModule,
    
    

>>>>>>> f7f0e6f50fc300efadd55cac05af67ae271b6452
  ],
})

export class FormComponent implements OnInit {

<<<<<<< HEAD
  ngOnInit() {
=======
  

  //CardexIndividual: {};
  // Individual User Profile as an object
  user: CardexIndividual = {
    role:'dwf',
    firstname: 'dwdfnwd',
    lastname: 'SFqfhdfB',
    //is the format ok ?
    birthdate: '1870, 12, 05',
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
    
>>>>>>> f7f0e6f50fc300efadd55cac05af67ae271b6452
  }

}
