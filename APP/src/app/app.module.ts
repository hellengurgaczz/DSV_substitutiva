import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http"
import { CadastrarFuncionarioComponent } from './components/views/cadastrar-funcionario/cadastrar-funcionario';
import { CadastrarFolhaComponent } from './components/views/cadastrar-folha/cadastrar-folha';
import { ListarFolhasComponent } from './components/views/listar-folhas/listar-folha';


@NgModule({
  declarations: [
    AppComponent, CadastrarFuncionarioComponent, CadastrarFolhaComponent,ListarFolhasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
