import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rdv } from './rdv';
// import { RDVS } from './mock-rdv';

// import { $ } from 'protractor';
@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.scss']
})
export class RdvComponent implements OnInit {
  rdvs: Rdv[] = [
  {
    id: 1,
    hairdresser: 'Louis',
    firstname: 'Arthur',
    lastname: 'Clement',
    date: '08/08/2018',
    hour: '3:30PM',
    description: 'Color'
  },
  {
    id: 2,
    hairdresser: 'Marie',
    firstname: 'Gabriel',
    lastname: 'Abreu Damaso',
    date: '08/09/2018',
    hour: '11:30AM',
    description: 'Cut'
  },
  {
    id: 3,
    hairdresser: 'Julie',
    firstname: 'Leslie',
    lastname: 'Gayard',
    date: '10/09/2018',
    hour: '05:00PM',
    description: 'Head Massage and Shampoo'
  }
];

    // selectRdv: Rdv;
    /*public rdv: Rdv = {
      id: 1,
      hairedresser: 'Ivan',
      firstname: 'Arthur',
      lastname: 'Clement',
      date: '08/08/2018',
      hour: '03:30 PM',
      description: 'I love peanuts',
    };*/
    // onSelect(rdv: Rdv): void {
    // this.selectRdv = rdv;
   // }
  constructor() {}
  ngOnInit() { }
  }
