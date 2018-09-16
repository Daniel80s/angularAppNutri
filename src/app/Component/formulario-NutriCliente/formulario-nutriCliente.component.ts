//Component
//	  - Output (Permite definir eventos de salida)
//	  - EventEmiter (Permite relatar eventos para que el resultado de esos eventos sean capturados en otros c

import {Component,Output,EventEmitter} from '@angular/core';
import {NutriCliente} from '../../Classes/NutriCliente';

//define cual sera la raiz del componente (aspecto del componente)
@Component({
    moduleId : module.id,
    selector: 'formulario-nutriCliente',
    templateUrl : 'formulario-nutricliente.html'
})

export class formularioNutriCliente{

    //define objeto para el modelo e instanciarlo con valores por defecto
    //define evento de tipo Output
    // Envia un evento al que lo invoque y puede recibir cualquier tipo de objeto <any>
    model : NutriCliente = new NutriCliente(0,"","","","","",0,0,0,0);
    @Output() onsubmit = new EventEmitter<any>();

    //define codigo para evento onsubmit(Que se hara cuando se envie el resultado del formulario)
    //Se crea funcion submit
    //Cada que se lanze submit va a llamar a evento onsubmit y enviara el resultado del formulario
    public submit(){
        this.onsubmit.emit(this.model);
        //Comprobar el contenido que se esta enviando del modelo(Comprbacion del DataBinding)
        console.log(this.model);
        //Instancia reset del objeto para que se emita de nuevo
        this.model= new NutriCliente(0,"","","","","",0,0,0,0);
    }


}