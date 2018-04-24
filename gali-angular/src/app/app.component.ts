import { Component } from '@angular/core';
//jquery import
import * as $ from 'jquery';

//http request import
import { HttpClientModule, HttpClient } from '@angular/common/http';

// properties = components structure
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//logic here
export class AppComponent {
  title = 'app';

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  //need a constructor to inject inside the http import
  constructor (private http : HttpClient) {}
  
}
