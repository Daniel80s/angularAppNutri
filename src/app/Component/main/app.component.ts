import { Component,OnInit } from '@angular/core';
import { NutriCliente } from '../../Classes/NutriCliente';

@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
//Se implemeta la interfaz OnInit
export class AppComponent implements OnInit {
   
   nutricliente: Array<NutriCliente>=[];

   // Se encarga de inicializar el componente
   // Integra 2 clientes por defecto (prueba)
   ngOnInit(){

    this.nutricliente.push(new NutriCliente(1,"Daniel","Rivera","inferno","agerock60@gmail.com","1234",26,1.76,68,60));
    this.nutricliente.push(new NutriCliente(2,"Marco","Rivera","sssss","marco@gmail.com","12345",29,1.74,78,40));
   
   }

   //funcion para guardar
   //agrega al array de clientes un cliente nuevo 
   guardar(model:NutriCliente){
     let v=Math.max.apply(Math,this.nutricliente.map(function(o){return o.cliente_ID;}));
     model.cliente_ID=++v;
     this.nutricliente.push(model);
   }

}
