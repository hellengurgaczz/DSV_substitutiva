import { FarmaciaService } from '../../../services/folha.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
    selector: 'app-cadastrar-folha',
    templateUrl: './cadastrar-folha.component.html',
    styleUrls: ['./cadastrar-folha..component.css']

})


export class CadastrarFolhaComponent implements OnInit {

    nomeFarmacia!: string;
    enderecoFarmacia!:string;
    telefoneFarmacia!: number;
    
    constructor(private router: Router, private service: FarmaciaService){

    }
    ngOnInit(){} 


    cadastrarFarmacia(): void {
        let farmacia: Farmacia = {
            nomeFarmacia: this.nomeFarmacia,
            enderecoFarmacia: this.enderecoFarmacia,
            telefoneFarmacia: this.telefoneFarmacia
        }

        this.service.create(farmacia).subscribe(farmacia => {
            console.log('Deu certo o cadastro da farmacia!')
            this.router.navigate(["../../produto/listar"])
        }, (error) => {
            console.log(error)
        })
    }
}
  