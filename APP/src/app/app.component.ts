import { FuncionarioService } from './services/funcionario.service'
import { FolhaService } from './services/folha.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Funcionario } from 'src/app/Models/funcionario';
import { Folha } from 'src/app/Models/folha';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: []

})


export class AppComponent implements OnInit {

    folhas: Folha[] = [];
    funcionarios: Funcionario[] = [];

    constructor(private router: Router,private folhaService: FolhaService, private funcionarioService: FuncionarioService) {}
    
    ngOnInit(): void {

        this.folhaService.list().subscribe((folhas) => {
            this.folhas = folhas;
        });

        this.funcionarioService.list().subscribe((funcionarios) => {
            this.funcionarios = funcionarios;
        });

    }
}
  