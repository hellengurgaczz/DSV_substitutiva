import { FuncionarioService } from './../../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Folha } from 'src/app/Models/folha';
import { FolhaService } from '../../../services/folha.service'


@Component({
    selector: 'app-cadastrar-folha',
    templateUrl: './cadastrar-folha.component.html',
    styleUrls: ['./cadastrar-folha..component.css']

})

export class CadastrarFolhaComponent implements OnInit {

    mes!: number;
    ano!:number;
    horas!: number;
    valorHora!: number;
    funcionarioId!: number;
    
    constructor(private router: Router, private folhaService: FolhaService, private funcionarioService: FuncionarioService){}

    ngOnInit(){} 

    cadastrarFolha(): void {
        let folha: Folha = {
            mes: this.mes,
            ano: this.ano,
            horas: this.horas,
            valorHora: this.valorHora,
            funcionarioId: this.funcionarioId
        }

        this.folhaService.create(folha).subscribe(folha => {
            console.log(folha)
            this.router.navigate(["../../folha/listar"])
        })
    }
}
  