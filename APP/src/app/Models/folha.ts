import { Funcionario } from './funcionario';
export interface Folha {

    id?: number;
    mes: number;
    ano: number;
    horas: number;
    valorHora: number;
    funcionario?: Funcionario;
    funcionarioId: number;
    
}