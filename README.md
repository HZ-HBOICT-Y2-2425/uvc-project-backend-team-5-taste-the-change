# Backend Microservices Project

## Overview
This project, Taste the Change, consists of a backend built with a microservices architecture. The application provides APIs for managing articles, recipes, and goals. The `goals` service is connected to a SQL database for data persistence, and all services are containerized using Docker. An API Gateway is implemented to route and centralize communication among the microservices.

## Architecture
The project is structured as follows:
- **API Gateway**: Routes requests to the appropriate microservices at port `3010`.
- **Articles API**: Manages article data and is accessible at port `3011`.
- **Recipes API**: Manages recipe data and is accessible at port `3012`.
- **Goals API**: Manages user goals and interacts with a SQL database. Accessible at port `3013`.
- **MySQL Database**: Stores data for the Goals API.
- **phpMyAdmin**: Provides a UI for interacting with the MySQL database. Accessible at port `8080`.

## Features
1. **Microservices**:
   - Each service has its own Docker container and is independently deployable.
2. **API Gateway**:
   - Centralizes requests to different microservices.
3. **SQL Database**:
   - Goals API is backed by a MySQL database for persistent storage.
4. **Dockerized Deployment**:
   - Each service includes a `Dockerfile`.
   - Docker Compose orchestrates the services.
5. **phpMyAdmin Integration**:
   - Simple management of the MySQL database.

## Technologies Used
- **Node.js** with Express.js for APIs
- **MySQL** for database management
- **Docker** and **Docker Compose** for containerization
- **phpMyAdmin** for database administration

## Getting Started
### Prerequisites
- Docker and Docker Compose installed on your machine.
- Node.js and npm (for local development).

### Environment Variables
Create a `.env` file in the project root with the following variables:
```env
GOALS_DB_NAME=<your-database-name>
MYSQL_USER=<your-mysql-username>
MYSQL_PASSWORD=<your-mysql-password>
MYSQL_ROOT_PASSWORD=<your-root-password>
GOALS_PORT=3013
```

### Running the Project
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Set up the environment variables by creating a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Configure the values in the `.env` file as needed.
3. Build and start the services with Docker Compose:
   ```bash
   docker-compose up --build
   ```
4. (Optional) If the services fail to start due to missing dependencies, install them manually for each API service:
   ```bash
   cd <service-folder>  # e.g., apigateway, articles, recipes, and/or goals
   npm install
   npm audit fix
   ```
5. Access the services at the following ports:
   - API Gateway: `http://localhost:3010`
   - Recipes API: `http://localhost:3012`
   - Articles API: `http://localhost:3011`
   - Goals API: `http://localhost:3013`
   - phpMyAdmin: `http://localhost:8080`

### Stopping the Services
To stop the running services:
```bash
docker-compose down -v
```

## Project Structure
```
.
├── apigateway
│   ├── Dockerfile
│   └── code
├── articles
│   ├── Dockerfile
│   └── code
├── recipes
│   ├── Dockerfile
│   └── code
├── goals
│   ├── Dockerfile
│   ├── mysql
│   │   └── initdb
│   └── code
├── docker-compose.yml
└── .env.example
```

## License
This project is licensed under the MIT License.