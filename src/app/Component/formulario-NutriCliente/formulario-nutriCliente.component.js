//Component
//	  - Output (Permite definir eventos de salida)
//	  - EventEmiter (Permite relatar eventos para que el resultado de esos eventos sean capturados en otros c
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var NutriCliente_1 = require("../../Classes/NutriCliente");
//define cual sera la raiz del componente (aspecto del componente)
var formularioNutriCliente = (function () {
    function formularioNutriCliente() {
        //define objeto para el modelo e instanciarlo con valores por defecto
        //define evento de tipo Output
        // Envia un evento al que lo invoque y puede recibir cualquier tipo de objeto <any>
        this.model = new NutriCliente_1.NutriCliente(0, "", "", "", "", "", 0, 0, 0, 0);
        this.onsubmit = new core_1.EventEmitter();
    }
    //define codigo para evento onsubmit(Que se hara cuando se envie el resultado del formulario)
    //Se crea funcion submit
    //Cada que se lanze submit va a llamar a evento onsubmit y enviara el resultado del formulario
    formularioNutriCliente.prototype.submit = function () {
        this.onsubmit.emit(this.model);
        //Comprobar el contenido que se esta enviando del modelo(Comprbacion del DataBinding)
        console.log(this.model);
        //Instancia reset del objeto para que se emita de nuevo
        this.model = new NutriCliente_1.NutriCliente(0, "", "", "", "", "", 0, 0, 0, 0);
    };
    return formularioNutriCliente;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], formularioNutriCliente.prototype, "onsubmit", void 0);
formularioNutriCliente = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'formulario-nutriCliente',
        templateUrl: 'formulario-nutricliente.html'
    })
], formularioNutriCliente);
exports.formularioNutriCliente = formularioNutriCliente;
//# sourceMappingURL=formulario-nutriCliente.component.js.map