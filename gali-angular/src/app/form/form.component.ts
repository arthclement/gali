import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';
import { User } from './../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
  ],
})

export class FormComponent implements OnInit {

  currentUser = new User(
    1,
    'ROLE_USER',
    'marie57',
    'Marie',
    'Marion',
    false
  );


  ngOnInit() {
    // this.currentUser.email = 'arthclems@gmail.com';
  }

}
