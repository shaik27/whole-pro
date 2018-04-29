import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services/myservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent{
topnavLinks:Array<any>;
constructor(private service:MyServiceService){
this.topnavLinks=this.service.getLinks();
}


}