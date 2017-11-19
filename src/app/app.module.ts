import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import { MenuComponent }   from './menu/menu.component';
import { ProveedorLoginComponent }   from './proveedor/proveedor-login.component';
import { MenuListComponent }   from './menu/menu-list.component';
import { MainViewComponent }   from './main-view/main-view.component';
import { HttpModule } from '@angular/http';
import { ClienteService }  from './cliente/cliente.service';
import { ClienteLoginComponent }  from './cliente/cliente-login.component';
import { MenuService }  from './menu/menu.service';
import { ProveedorService }  from './proveedor/proveedor-service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


@NgModule({
  imports: [BrowserModule, HttpModule,AppRoutingModule, FormsModule],
  declarations: [ AppComponent, MenuComponent, MainViewComponent, MenuListComponent, ClienteLoginComponent, ProveedorLoginComponent],
  bootstrap: [ AppComponent ],
  providers: [ ClienteService, MenuService, ProveedorService,]
})


export class AppModule {

}
