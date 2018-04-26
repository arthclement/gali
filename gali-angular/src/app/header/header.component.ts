import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username: string = "User Example";

  // control the log out button
  btnSubmit : string = 'Log Out';

  constructor() { }

  ngOnInit() {
  }

}
