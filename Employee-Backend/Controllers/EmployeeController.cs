using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using EmployeeManagement.Model;

namespace EmployeeManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly List<Employee> _employees = new List<Employee>
        {
            new Employee { Id = 1, FirstName = "John", LastName = "Doe", Email = "john@example.com", DateOfBirth = new DateTime(1990, 1, 15), Skills = new List<string> { "C#", "ASP.NET Core" } },
            new Employee { Id = 2, FirstName = "Jane", LastName = "Smith", Email = "jane@example.com", DateOfBirth = new DateTime(1985, 5, 8), Skills = new List<string> { "JavaScript", "React" } },
            // Add more employees here
        };

        [HttpGet]
        public ActionResult<IEnumerable<Employee>> Get()
        {
            return Ok(_employees);
        }

        [HttpGet("{id}")]
        public ActionResult<Employee> Get(int id)
        {
            var employee = _employees.FirstOrDefault(e => e.Id == id);
            if (employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }

        [HttpPost]
        public ActionResult<Employee> Post([FromBody] Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            employee.Id = _employees.Max(e => e.Id) + 1;
            _employees.Add(employee);
            return CreatedAtAction(nameof(Get), new { id = employee.Id }, employee);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Employee updatedEmployee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var employee = _employees.FirstOrDefault(e => e.Id == id);
            if (employee == null)
            {
                return NotFound();
            }

            employee.FirstName = updatedEmployee.FirstName;
            employee.LastName = updatedEmployee.LastName;
            employee.Email = updatedEmployee.Email;
            employee.DateOfBirth = updatedEmployee.DateOfBirth;
            employee.Skills = updatedEmployee.Skills;

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var employee = _employees.FirstOrDefault(e => e.Id == id);
            if (employee == null)
            {
                return NotFound();
            }

            _employees.Remove(employee);
            return NoContent();
        }

        [HttpGet("search")]
        public ActionResult<IEnumerable<Employee>> SearchEmployees([FromQuery] string firstName, [FromQuery] string lastName, [FromQuery] string email)
        {
            var query = _employees.AsQueryable();

            if (!string.IsNullOrWhiteSpace(firstName))
            {
                query = query.Where(e => e.FirstName.Contains(firstName, StringComparison.OrdinalIgnoreCase));
            }

            if (!string.IsNullOrWhiteSpace(lastName))
            {
                query = query.Where(e => e.LastName.Contains(lastName, StringComparison.OrdinalIgnoreCase));
            }

            if (!string.IsNullOrWhiteSpace(email))
            {
                query = query.Where(e => e.Email.Contains(email, StringComparison.OrdinalIgnoreCase));
            }

            var searchResults = query.ToList();

            if (searchResults.Count == 0)
            {
                return NotFound("No matching employees found.");
            }

            return Ok(searchResults);
        }


    [HttpGet("filter-by-year")]
    public ActionResult<IEnumerable<Employee>> FilterByYearOfBirth([FromQuery] int birthYear)
    {
        var filteredEmployees = _employees.Where(e => e.DateOfBirth.Year == birthYear).ToList();

        if (filteredEmployees.Count == 0)
        {
            return NotFound("No employees found for the specified birth year.");
        }

        return Ok(filteredEmployees);
    }
    [HttpGet("filter-by-skills")]
    public ActionResult<IEnumerable<Employee>> FilterBySkills([FromQuery] string skills)
    {
        if (string.IsNullOrWhiteSpace(skills))
        {
            return BadRequest("Skills parameter is required.");
        }

        var skillList = skills.Split(',').Select(skill => skill.Trim()).ToList();

        var filteredEmployees = _employees.Where(e => e.Skills.Any(s => skillList.Contains(s, StringComparer.OrdinalIgnoreCase))).ToList();

        if (filteredEmployees.Count == 0)
        {
            return NotFound("No employees found with the specified skills.");
        }

        return Ok(filteredEmployees);
    }
    }
}
