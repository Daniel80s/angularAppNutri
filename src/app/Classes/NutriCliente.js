"use strict";
var NutriCliente = (function () {
    function NutriCliente(cliente_ID, nombre, apellidos, nombre_Usuario, correo_Electronico, contrasena, edad, estatura, peso, geb) {
        this.cliente_ID = cliente_ID;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nombre_Usuario = nombre_Usuario;
        this.correo_Electronico = correo_Electronico;
        this.contrasena = contrasena;
        this.edad = edad;
        this.estatura = estatura;
        this.peso = peso;
        this.geb = geb;
    }
    return NutriCliente;
}());
exports.NutriCliente = NutriCliente;
//# sourceMappingURL=NutriCliente.js.map