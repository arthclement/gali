import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rdv } from './rdv';

import { $ } from 'protractor';
@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.scss']
})
export class RdvComponent implements OnInit {

    rdv: Rdv = {
      id: 1,
      hairedresser: 'Ivan',
      firstname: 'Arthur',
      lastname: 'Clement',
      date: '08/08/2018',
      hour: '03:30 PM',
      description: 'I love peanuts',
    };
  constructor() { }
    ngOnInit() { }
  }
