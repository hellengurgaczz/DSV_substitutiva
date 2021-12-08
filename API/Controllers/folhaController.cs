using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/folha")]
    public class folhaController : ControllerBase
    {
        private readonly DataContext _context;
        public folhaController(DataContext context) => _context = context;


        //POST: api/folha/cadastrar
        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Create([FromBody] Folha folha)
        {
            folha.Funcionario = _context.Funcionarios.Find(folha.FuncionarioId);
            _context.Folhas.Add(folha);
            _context.SaveChanges();
            return Ok(folha);
        }

        //GET: api/folha/listar
        [HttpGet]
        [Route("listar")]
        public IActionResult List() => Ok(_context.Folhas
        .Include(folha => folha.Funcionario)
        .ToList());


        //DELETE: api/folha/deletar
        [HttpDelete]
        [Route("folha/{id}")]
        public IActionResult Delete([FromRoute] int id)
        {
            Folha folha = _context.Folhas.FirstOrDefault
            (
                folha => folha.Id == id
            );
            if (id == null)
            {
                return NotFound();
            }
            _context.Folhas.Remove(Folha);
            _context.SaveChanges();
            return Ok(_context.Folhas.ToList());
        }
    }
}