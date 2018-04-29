import { Injectable } from '@angular/core';
@Injectable()
export class MyServiceService{
  constructor(){}
  showTodayDate(){
    let ndate=new Date();
    return ndate;
  }
  getCountries(){
    return [{text:"India",value:"IN"},{text:"United States",value:"US"}]
  }
  getMonths(){
    return ["jan", "feb", "mar", "apr"];
  }
  getCars(){
    return ["audi","ford","bmw"];
  }
  getLinks(){
     return [{route:"newcmp", name:"FirstComponent"},
            {route: "anothercomponent",name: "Pipes"}, 
            {route: "register",name: "Register"}]
  }
 
}