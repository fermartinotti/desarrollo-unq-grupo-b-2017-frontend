import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';



// const appRoutes: Routes = [
//   { path: 'crisis-center', component: CrisisListComponent },
//   { path: 'hero/:id',      component: HeroDetailComponent },
//   {
//     path: 'heroes',
//     component: HeroListComponent,
//     data: { title: 'Heroes List' }
//   },
//   { path: '',
//     redirectTo: '/heroes',
//     pathMatch: 'full'
//   },
//   { path: '**', component: PageNotFoundComponent }
// ];



@NgModule({
  imports:      [
  [
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // )
    // other imports here
  ], BrowserModule, HttpModule ],


  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],

})
export class AppModule {

}
