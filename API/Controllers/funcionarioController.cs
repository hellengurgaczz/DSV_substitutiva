using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/funcionario")]

    public class funcionarioController : ControllerBase
    {
        private readonly DataContext _context;
        public funcionarioController(DataContext context) => _context = context;


        //POST: api/funcionario/cadastrar
        [HttpPost]
        [Route("cadastrar")]

        public IActionResult Create([FromBody] Funcionario funcionario)
        {
            _context.Funcionarios.Add(funcionario);
            _context.SaveChanges();
            return Created("", funcionario);
        }

        //GET: api/funcionario/listar
        [HttpGet]
        [Route("listar")]
        public IActionResult List() => Ok(_context.Funcionarios.ToList());

        //GET: api/produto/buscarFuncionario/{id}
        [HttpGet]
        [Route("buscarFuncionario/{id}")]
        public IActionResult getByName([FromRoute] id id)
        {
           Funcionario funcionario = _context.Funcionarios.Find(id);
            if (funcionario == null)
            {
                return NotFound();
            }
            return Ok(funcionario);
        }

        //DELETE: api/funcionario/deletar/id
        [HttpDelete]
        [Route("deletar/{id}")]
        public IActionResult Delete([FromRoute] int id)
        {
            Funcionario funcionario = _context.Funcionarios.Find(id);

            if (funcionario == null)
            {
                return NotFound();
            }
            _context.Funcionarios.Remove(funcionario);
            _context.SaveChanges();
            return Ok(_context.Funcionarios.ToList());
        }
    }
}