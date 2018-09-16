"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var NutriCliente_1 = require("../../Classes/NutriCliente");
var AppComponent = (function () {
    function AppComponent() {
        this.nutricliente = [];
    }
    // Se encarga de inicializar el componente
    // Integra 2 clientes por defecto (prueba)
    AppComponent.prototype.ngOnInit = function () {
        this.nutricliente.push(new NutriCliente_1.NutriCliente(1, "Daniel", "Rivera", "inferno", "agerock60@gmail.com", "1234", 26, 1.76, 68, 60));
        this.nutricliente.push(new NutriCliente_1.NutriCliente(2, "Marco", "Rivera", "sssss", "marco@gmail.com", "12345", 29, 1.74, 78, 40));
    };
    //funcion para guardar
    //agrega al array de clientes un cliente nuevo 
    AppComponent.prototype.guardar = function (model) {
        var v = Math.max.apply(Math, this.nutricliente.map(function (o) { return o.cliente_ID; }));
        model.cliente_ID = ++v;
        this.nutricliente.push(model);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'app.component.html',
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map