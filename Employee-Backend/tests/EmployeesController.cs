using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Testing;
using Newtonsoft.Json;
using Xunit;

namespace EmployeeManagement.Tests
{
    public class EmployeesControllerTests : IClassFixture<WebApplicationFactory<EmployeeManagement.Program>>
    {
        private readonly WebApplicationFactory<EmployeeManagement.Program> _factory;

        public EmployeesControllerTests(WebApplicationFactory<EmployeeManagement.Program> factory)
        {
            _factory = factory;
        }

        [Fact]
        public async Task GetEmployees_ReturnsSuccessStatusCode()
        {
            // Arrange
            var client = _factory.CreateClient();

            // Act
            var response = await client.GetAsync("/api/employees");

            // Assert
            response.EnsureSuccessStatusCode();
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        }

        [Fact]
        public async Task GetEmployeeById_ReturnsSuccessStatusCode()
        {
            // Arrange
            var client = _factory.CreateClient();
            var employeeId = 1; // Replace with an existing employee ID in your dataset

            // Act
            var response = await client.GetAsync($"/api/employees/{employeeId}");

            // Assert
            response.EnsureSuccessStatusCode();
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        }

        [Fact]
        public async Task CreateEmployee_ReturnsSuccessStatusCode()
        {
            // Arrange
            var client = _factory.CreateClient();
            var newEmployee = new
            {
                FirstName = "New",
                LastName = "Employee",
                Email = "new@example.com",
                DateOfBirth = "1990-01-01", // Replace with a valid date
                Skills = new[] { "Skill1", "Skill2" } // Replace with skills
            };

            var jsonContent = new StringContent(JsonConvert.SerializeObject(newEmployee), Encoding.UTF8, "application/json");

            // Act
            var response = await client.PostAsync("/api/employees", jsonContent);

            // Assert
            response.EnsureSuccessStatusCode();
            Assert.Equal(HttpStatusCode.Created, response.StatusCode);
        }

        [Fact]
        public async Task UpdateEmployee_ReturnsSuccessStatusCode()
        {
            // Arrange
            var client = _factory.CreateClient();
            var employeeIdToUpdate = 1; // Replace with an existing employee ID in your dataset
            var updatedEmployee = new
            {
                FirstName = "Updated",
                LastName = "Employee",
                Email = "updated@example.com",
                DateOfBirth = "1990-01-01", // Replace with a valid date
                Skills = new[] { "UpdatedSkill1", "UpdatedSkill2" } // Replace with updated skills
            };

            var jsonContent = new StringContent(JsonConvert.SerializeObject(updatedEmployee), Encoding.UTF8, "application/json");

            // Act
            var response = await client.PutAsync($"/api/employees/{employeeIdToUpdate}", jsonContent);

            // Assert
            response.EnsureSuccessStatusCode();
            Assert.Equal(HttpStatusCode.NoContent, response.StatusCode);
        }

        [Fact]
        public async Task DeleteEmployee_ReturnsSuccessStatusCode()
        {
            // Arrange
            var client = _factory.CreateClient();
            var employeeIdToDelete = 1; // Replace with an existing employee ID in your dataset

            // Act
            var response = await client.DeleteAsync($"/api/employees/{employeeIdToDelete}");

            // Assert
            response.EnsureSuccessStatusCode();
            Assert.Equal(HttpStatusCode.NoContent, response.StatusCode);
        }

        // Add test methods for other endpoints...
    }
}

