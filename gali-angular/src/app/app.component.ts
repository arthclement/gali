import { Component } from '@angular/core';
//jquery import
import * as $ from 'jquery';

//http request import

// properties = components structure
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//logic here
export class AppComponent {
  title = 'app';

  //need a constructor to inject inside the http import
  
}
