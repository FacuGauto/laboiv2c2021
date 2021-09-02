import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primerClase';
  miUsuario:Usuario;
  /**
   *
   */

  public edadUno;
  public edadDos;
  public resultadoPromedio;
  public resultadoSuma;

  constructor() {
    this.miUsuario= new Usuario();
    this.edadUno = 0;
    this.edadDos = 0;
    this.resultadoPromedio = 0;
    this.resultadoSuma = 0;
    
  }

  promedio() {
    this.resultadoPromedio = (Number(this.edadUno) + Number(this.edadDos))/2;
  }

  suma() {
    this.resultadoSuma = (Number(this.edadUno) + Number(this.edadDos));
  }

  calcular() {
    this.suma();
    this.promedio();
  }

  limpiar() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.resultadoPromedio = 0;
    this.resultadoSuma = 0;
  }
  saludar(){console.log("Holaaaaa")};
}
