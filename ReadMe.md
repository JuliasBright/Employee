# Full-Stack Employee Management Application

This is a full-stack employee management application that combines a backend API developed with ASP.NET Core and a frontend client built with Angular. The application allows you to perform CRUD (Create, Read, Update, Delete) operations on employee data.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Backend (ASP.NET Core)](#backend-aspnet-core)
  - [Project Structure](#project-structure)
  - [API Endpoints](#api-endpoints)
  - [Configuration](#configuration)
  - [Running the Backend](#running-the-backend)
- [Frontend (Angular)](#frontend-angular)
  - [Project Structure](#project-structure-1)
  - [Development Server](#development-server)
  - [Build](#build)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed (for the frontend).
- .NET 7.0 SDK or later installed (for the backend).
- Visual Studio Code or any code editor of your choice.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/employee-management-app.git
   ```

2. Navigate to the project root directory:

   ```bash
   cd employee-management-app
   ```

## Backend (ASP.NET Core)

### Project Structure

The backend is implemented using ASP.NET Core and follows a typical project structure:

- **Controllers**: Contains API controllers for handling HTTP requests.
- **Models**: Defines data models for employees.
- **Services**: Business logic and data access services.
- **appsettings.json**: Configuration settings.

### API Endpoints

The following API endpoints are available:

- `GET /api/employees`: Get a list of all employees.
- `GET /api/employees/{id}`: Get a specific employee by ID.
- `POST /api/employees`: Create a new employee.
- `PUT /api/employees/{id}`: Update an existing employee by ID.
- `DELETE /api/employees/{id}`: Delete an employee by ID.
- `FILTER /api/employees/filter`: filters employee by required fields
- `SEARCH /api/employees/search`: search employee

### Running the Backend

1. Open the `EmployeeManagement.sln` solution file in Visual Studio or your preferred IDE.
2. Build and run the ASP.NET Core backend. The API will be available at `http://localhost:5277`.

## Frontend (Angular)

### Project Structure

The frontend is built using Angular and follows the standard project structure:

- **src/app/components**: Contains Angular components.
- **src/app/services**: Angular services for interacting with the backend API.
- **src/environments**: Environment configuration files.
- **angular.json**: Angular project configuration.

### Development Server

To run the Angular development server, execute the following commands:

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
ng serve
```

The frontend will be available at `http://localhost:4200`.

### Build

To build the Angular project for production, run:

```bash
ng build --prod
```

The production-ready files will be generated in the `dist/` directory.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Create a pull request to the main repository.

## License

This project is licensed under the [MIT License](LICENSE).