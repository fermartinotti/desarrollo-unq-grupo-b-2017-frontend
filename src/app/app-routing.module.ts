import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent }   from './main-view/main-view.component';
import { MenuComponent }   from './menu/menu.component';
import { MenuListComponent }   from './menu/menu-list.component';
import { ClienteLoginComponent }   from './cliente/cliente-login.component';
import { ProveedorLoginComponent }   from './proveedor/proveedor-login.component';
import { SaldoComponent }   from './saldo/cargar-saldo.component';
import { RetirarSaldoComponent }   from './saldo/retirar-saldo.component';
import { PedidoComponent }   from './pedido/pedido.component';
import { CallbackComponent } from './callback/callback.component';


const routes: Routes = [
  { path: '',  component: MainViewComponent },
  { path: 'menu',  component: MenuComponent },
  { path: 'menu/:id',  component: MenuComponent },
  { path: 'menu-list',  component: MenuListComponent },
  { path: 'cliente-login',  component: ClienteLoginComponent },
  { path: 'cliente-login/:id',  component: ClienteLoginComponent },
  { path: 'proveedor-login',  component: ProveedorLoginComponent },
  { path: 'proveedor-login/:id',  component: ProveedorLoginComponent },
  { path: 'cargar-saldo',  component: SaldoComponent },
  { path: 'retirar-saldo',  component: RetirarSaldoComponent },
  { path: 'pedido',  component: PedidoComponent },
  { path: 'callback',  component: CallbackComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
