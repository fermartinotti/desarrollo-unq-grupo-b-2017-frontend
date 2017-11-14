import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent }   from './main-view/main-view.component';
import { MenuComponent }   from './menu/menu.component';
import { MenuListComponent }   from './menu/menu-list.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '',  component: MainViewComponent },
  { path: 'menu',  component: MenuComponent },
  { path: 'menu-list',  component: MenuListComponent },
  { path: 'menu/:id',  component: MenuComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
