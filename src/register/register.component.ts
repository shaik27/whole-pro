import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { MyServiceService } from '../services/myservice.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  userDetails:Register;
  proName="shaik details";
  todayDate;
  countries:Array<any>;
  months:Array<any>;
  cars:Array<any>;
  numberRegex: any;
  alphabetsAndSpaceRegex: any;
  constructor(private service:MyServiceService) {
    this.userDetails=new Register;
    this.todayDate=this.service.showTodayDate();
    this.countries=this.service.getCountries();
    this.months=this.service.getMonths();
    this.cars=this.service.getCars();
    this.numberRegex = /^\d+$/;
    this.alphabetsAndSpaceRegex = /^[a-zA-Z\s]*$/;
    
  }
  registerUser(){
    console.log(this.userDetails);
  }
}
