import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import { MenuComponent }   from './menu/menu.component';
import { ProveedorLoginComponent }   from './proveedor/proveedor-login.component';
import { MenuListComponent }   from './menu/menu-list.component';
import { MainViewComponent }   from './main-view/main-view.component';
import { SaldoComponent }   from './saldo/cargar-saldo.component';
import { PedidoComponent }   from './pedido/pedido.component';
import { PedidoService }   from './pedido/pedido-service';
import { RetirarSaldoComponent }   from './saldo/retirar-saldo.component';
import { CallbackComponent }   from './callback/callback.component';
import { ClienteLoginComponent }  from './cliente/cliente-login.component';
import { HttpModule } from '@angular/http';
import { ClienteService }  from './cliente/cliente.service';
import { MenuService }  from './menu/menu.service';
import { ProveedorService }  from './proveedor/proveedor-service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AuthService } from './auth0/auth0.service';
import { ApiService } from './api/api.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {SetHeaderInterceptor} from './header-config';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    MainViewComponent,
    MenuListComponent,
    ClienteLoginComponent,
    ProveedorLoginComponent,
    SaldoComponent,
    RetirarSaldoComponent,
    PedidoComponent,
    CallbackComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
    useClass: SetHeaderInterceptor,
    multi: true},
    ClienteService,
    MenuService,
    ProveedorService,
    PedidoService,
    AuthService,
    ApiService
  ]
})


export class AppModule {

}
