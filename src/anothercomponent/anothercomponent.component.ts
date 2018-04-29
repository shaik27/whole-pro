import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services/myservice.service';

@Component({
  selector: 'app-anothercomponent',
  templateUrl: './anothercomponent.component.html',
  styleUrls: ['./anothercomponent.component.css']
})

export class AnotherComponent{
  name = 'meharaj';
  anotherComponent = "Entered in pipescomponent created";
  todayDate;
  jsonval = {
    name: 'shaik', age: '25',
    address: { a1: 'hyd', a2: 'knl' }
  };
  countries:Array<any>;
  months:Array<any>;
  constructor(private service:MyServiceService) { 
    this.todayDate = this.service.showTodayDate();
    this.countries=this.service.getCountries();
    this.months=this.service.getMonths();
  }
  changeMonths(event) {
    alert("changed month");
    console.log(event);
  }
  changeCountry(event) {
    alert("changed country");
    console.log(event);
  }
  
}