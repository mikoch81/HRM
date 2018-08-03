import { Component, OnInit } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-value',
    templateUrl: './value.component.html',
    styleUrls: ['./value.component.scss']
})
/** value component*/
export class ValueComponent {
    /** value ctor */
  values: any;

  constructor(private http:HttpClient) {
  }

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http.get('https://localhost:44380/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }

}
