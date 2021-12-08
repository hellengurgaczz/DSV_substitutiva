import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Funcionario } from 'src/app/Models/funcionario';
import { FuncionarioService } from "../../../services/funcionario.service"

@Component({
    selector: 'app-cadastrar-funcionario',
    templateUrl: './cadastrar-funcionario.component.html',
    styleUrls: ['./cadastrar-funcionario.component.css']

})


export class CadastrarFuncionarioComponent implements OnInit {

    nome!: string;
    cargo!:string;
    salario!: number;
    
    constructor(private router: Router, private funcionarioService: FuncionarioService){

    }
    ngOnInit(){} 


    cadastrarFuncionario(): void {
        let funcionario: Funcionario = {
            nome: this.nome,
            cargo: this.cargo,
            salario: this.salario
        }

        this.funcionarioService.create(funcionario).subscribe(funcionario => {
            console.log(funcionario)
            this.router.navigate(["../../folhas/listar"])
        })
    }
}
  