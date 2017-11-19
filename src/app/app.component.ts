import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Bienvenido</h1>
    <h1>Hello {{name}}</h1>
  
  `,
})
export class AppComponent  { name = 'Angular'; }
