using System;

namespace API.Models
{
    public class Folha
    {

        public Folha () => {CriadoEm = DateTime.Now;}
    
        public int Id { get; set; }
        public int Mes { get; set; }
        public int Ano { get; set; }
        public int Horas { get; set; }
        public int ValorHora { get; set; }
        public Funcionario Funcionario { get; set; }
        public int FuncionarioId { get; set; }
    }
}