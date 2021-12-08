import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarFolhasComponent } from './components/views/listar-folhas/listar-folha';
import { CadastrarFuncionarioComponent } from './components/views/cadastrar-funcionario/cadastrar-funcionario';
import { CadastrarFolhaComponent } from './components/views/cadastrar-folha/cadastrar-folha';


const routes: Routes = [
  {
    path: "",
    component: ListarFolhasComponent
  },
  {
    path: "funcionario/cadastrar",
    component: CadastrarFuncionarioComponent
  },
  {
    path: "folha/cadastrar",
    component: CadastrarFolhaComponent
  },
  {
    path: "folha/listar",
    component: ListarFolhasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
