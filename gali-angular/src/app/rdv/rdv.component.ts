import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.scss']
})
export class RdvComponent implements OnInit {
  name = '';
  mark: number;
  found: boolean;

  constructor(private httpClient: HttpClient) { }
  onNameKeyUp(event: any) {
    console.log(event.target.value);
    this.name = event.target.value;
    this.found = false;
  }
  /* ici http GET*/
  getUsers() {
    this.httpClient.get('http://ajax.i-marty.eu/jsonCall')
    .subscribe(
      (data: any[]) => {
      if (data) {
        this.mark = data['Users'][0].name;
        this.found = true;
        console.log(this.mark);
      }
      }
    );
  }
  ngOnInit() {
  }

}
