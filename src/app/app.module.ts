import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './/Component/main/app.component';
import { formularioNutriCliente } from './Component/formulario-NutriCliente/formulario-nutriCliente.component';
import { ListadoClientesComponent } from './Component/listado-Clientes/listado-clientes.component';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent,formularioNutriCliente,ListadoClientesComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
