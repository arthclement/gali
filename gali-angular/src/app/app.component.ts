import { Component } from '@angular/core';
//jquery import
import * as $ from 'jquery';

// properties = components structure
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//logic here
export class AppComponent {
  title = 'app';
}
