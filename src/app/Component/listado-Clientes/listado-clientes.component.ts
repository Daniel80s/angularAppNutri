
import {Component,Input} from '@angular/core';
import {NutriCliente} from '../../Classes/NutriCliente';

//define cual sera la raiz del componente (aspecto del componente)
@Component({
    moduleId : module.id,
    selector: 'listado-clientes',
    templateUrl : 'listado-clientes.html'
})
export class ListadoClientesComponent{
    @Input() clientes : Array<NutriCliente>;

    displayCliente(cliente:NutriCliente){

        console.log(cliente);
    }
}