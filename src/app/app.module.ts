import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SqrtPipe } from '../app.sqrt';
import { NewCmpComponent } from '../newcmp/newcmp.component';
import { AnotherComponent } from '../anothercomponent/anothercomponent.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

import { RegisterComponent } from '../register/register.component';
import { MyServiceService } from '../services/myservice.service';
import { RestrictUserInput } from './directives/restrict.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule,
  RouterModule.forRoot([{path:'newcmp',component:NewCmpComponent},
         {path:'anothercomponent',component:AnotherComponent},
          {path:'register',component:RegisterComponent}]) ],
 providers:[MyServiceService],
  declarations: [ AppComponent,SqrtPipe,NewCmpComponent,AnotherComponent,RegisterComponent,NavbarComponent,FooterComponent,RestrictUserInput ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
