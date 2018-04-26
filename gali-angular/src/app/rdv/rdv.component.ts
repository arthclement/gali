import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rdv } from './rdv';
import { Coiffeur } from './coiffeur';

import { $ } from 'protractor';
@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.scss']
})
export class RdvComponent implements OnInit {

  coiffeurs: Coiffeur[];
  jsonResponse;
  rdvs: Rdv[];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('http://localhost:80/api/professionals')
    .subscribe(data => this.jsonResponse = data);

    for (let coiffeur of this.jsonResponse) {
      let coiffeurToAppend = new Coiffeur(
        coiffeur['id'],
        coiffeur['username'],
        coiffeur['firstname'],
        coiffeur['lastname'],
        coiffeur['gender'],
        coiffeur['phone']
      );
      this.coiffeurs.push(coiffeurToAppend);
    }

    this.httpClient.get('http://localhost:80/api/appointment')
    .subscribe(data => this.jsonResponse);

    for (let rdv of this.jsonResponse) {
      let rdvToAppend = new Rdv(
        rdv['id'],
        rdv['hairdresser'],
        rdv['firstname'],
        rdv['lastname'],
        rdv['date'],
        rdv['hour'],
        rdv['description']
      );
      this.rdvs.push(rdvToAppend);
  }

  ngOnInit() { }
}
