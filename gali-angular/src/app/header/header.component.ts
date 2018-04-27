import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { User } from '../user';
import { Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ ApiService ]
})
export class HeaderComponent implements OnInit {

  // currentUser: any;
  btnSubmit = 'Log Out';

  constructor() { }

  ngOnInit() {
    // this.currentUser = this.apiService.getUsers();
    // this.currentUser = this.currentUser[0];
  }

}
