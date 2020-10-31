import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data: any = [
    { nombre: 'Kt', apellido: 'LOPEZ' },
    { nombre: 'ML', apellido: 'POLO' },
    { nombre: 'MATIAS', apellido: 'CAMARGO' },
    { nombre: 'Luis Fran', apellido: 'FT' },
  ];


}
