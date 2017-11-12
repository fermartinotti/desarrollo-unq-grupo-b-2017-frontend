import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import { MenuComponent }   from './menu/menu.component';
import { HttpModule } from '@angular/http';
import { ClienteService }  from './cliente/cliente.service';
import { MenuService }  from './menu/menu.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


@NgModule({
  imports: [BrowserModule, HttpModule,AppRoutingModule, FormsModule],
  declarations: [ AppComponent, MenuComponent ],
  bootstrap: [ AppComponent ],
  providers: [ ClienteService, MenuService ]
})


export class AppModule {

}
