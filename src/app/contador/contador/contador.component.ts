//Para transformar la clase que hemos creado en un componente propio de Angular
import { Component } from '@angular/core';

//Usar el decorador Component
@Component({
    //Usar 'app' para indicar que es personalizado
    selector: 'app-contador',
    //Usar el código del fichero app.component.html
    template:`
        <h1>{{titulo}}</h1>
        <h3>La base es: <strong> {{base}} </strong></h3>

        <button (click)="acumular(base)"> + {{base}} </button>

        <span> {{numero}} </span>

        <button (click)="acumular(-base)"> - {{base}} </button>   
    `
})


//Crear una clase llamada ContadorComponent y usar "export" para utilizarla
//en otros lugares fuera de este archivo
export class ContadorComponent{
    public titulo: string = 'Contador App';
    numero: number =10;
    public base:number =5;
  
       //crear el método para sumar una cantidad concreta
      acumular(valor:number){
        //this.numero+=valor
        this.numero=this.numero+valor
      }
}
