import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { User } from '../user';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ ApiService ]
})
export class HeaderComponent implements OnInit {

  currentUser: any;
  btnSubmit: string = 'Log Out';

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.currentUser = this.apiService.getUsers();
  }

}
