import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services/myservice.service';
@Component({
  selector: 'app-newcmp',
  templateUrl: './newcmp.component.html',
  styleUrls: ['./newcmp.component.css']
})

export class NewCmpComponent {
  name = 'shaik';
  newComponent = "Entered in  firstcomponent created";
  todayDate;
  isAvailable=true;
  countries: Array<any>;
  months:Array<any>;
  constructor(private service: MyServiceService) {
    this.countries = this.service.getCountries();
    this.todayDate = this.service.showTodayDate();
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
  myClickFunction(event) {
    alert("Hello shaik");
    console.log(event);
  }
}