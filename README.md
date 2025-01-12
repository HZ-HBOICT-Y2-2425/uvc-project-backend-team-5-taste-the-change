# Backend Microservices Project

## Overview
This project, Taste the Change, consists of a backend built with a microservices architecture. The application provides APIs for managing articles, recipes, and goals. The `goals`, `users` and `leafs` services are connected to a SQL database for data persistence, and all services are containerized using Docker. An API Gateway is implemented to route and centralize communication among the microservices.

## Architecture
The project is structured as follows:
- **API Gateway**: Routes requests to the appropriate microservices at port `3010`.
- **Articles API**: Manages article data and is accessible at port `3011`.
- **Recipes API**: Manages recipe data and is accessible at port `3012`.
- **Goals API**: Manages user goals and interacts with a SQL database. Accessible at port `3013`.
- **Leafs API**: Manages leaves and interacts with a SQL database. Accessible at port `3014`..
- **Users API**: Manages users and interacts with a SQL database. Accessible at port `3015`..
- **MySQL Database**: Stores data for the Goals, Users and Leafs APIs.
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
GOALS_PORT=3013
GOALS_DB_HOST=mysql-server-goals
GOALS_DB_NAME=goals_app
GOALS_MYSQL_PORT=3308

USERS_PORT=3015
USERS_DB_HOST=mysql-server-users
USERS_DB_NAME=users_app
USERS_MYSQL_PORT=3310

LEAFS_PORT=3014
LEAFS_DB_HOST=mysql-server-leafAmount
LEAFS_DB_NAME=leafs_app
LEAFS_MYSQL_PORT=3309

MYSQL_PORT=3306
MYSQL_ROOT_PASSWORD=rootpassword
MYSQL_USER=root
MYSQL_PASSWORD=userpassword

NODE_ENV=development
FRONTEND_URL=http://localhost:5173
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
   - Leafs API: `http://localhost:3014`
   - Users API: `http://localhost:3015`
   - phpMyAdmin: `http://localhost:8080`

### Stopping the Services
To stop the running services:
```bash
docker-compose down -v
```
## License
This project is licensed under the MIT License.

## API specifications
Recipes 

Runs on port 3012 on localhost 

 

[GET] /   tests if API is running 

 

Code 200: 

"hi" 



 

[GET] /recipes provides list of all recipes 

 

Code 200: 

{ 

    "recipes": [ 

        { 

            "id": int, 

            "name": "string”, 

            "description": "string", 

            "ingredients": [ 

                "string” 

            ], 

            "emission_per_meal": int, 

            "servings": int, 

            "diet": "string", 

            "time": int 

            "image": "string", 

            "slug": "string", 

            "instructions": [ 

          “string” 

            ] 

        }, 

] 

} 

 

 

Code 404: 

{} 

 

 

[GET] /recipes/{id}  provides recipe with the specified id 

 

Parameter: 

id: integer 

 

Code 200: 

{ 

    "id": int, 

    "name": "string", 

    "description": "string", 

    "ingredients": [ 

“string” 

    ], 

    "emission_per_meal": int, 

    "servings": int, 

    "diet": "string", 

    "time": int, 

    "image": "string", 

    "slug": "string", 

    "instructions": [ 

        “string” 

    ] 

} 

 

Code 404: 

{} 

 

 

Articles 

Runs on port 3011 on localhost 

 

[GET] /    tests if API is running 

 

Code 200: 

"hi" 

 

 

[GET] /articles  provides list of all articles 

 

Code 200: 

{ 

    "articles": [ 

        { 

            "name": "string", 

            "imgUrl": "string", 

            "info": "string", 

            "Url": "string" 

        }, 

] 

} 

 

 

Code 404: 

{} 

 

Goals 

Runs on port 3013 on localhost 

 

[GET] /    tests if API is running 

 

Code 200: 

"hi" 

 

 

 

[GET] /random-goals provides an array of 3 random goals every call 

 

Code 200: 

[ 

    { 

        "id": int, 

        "goal": "string", 

        "description": "string", 

        “level”: “string”, 

        “status”: “string”, 

        “last_picked”: “datetime” 

    }, 

    { 

        "id": int, 

        "goal": "string", 

        "description": "string", 

        “level”: “string”, 

        “status”: “string”, 

        “last_picked”: “datetime” 

    }, 

    { 

        "id": int, 

        "goal": "string", 

        "description": "string", 

        “level”: “string”, 

        “status”: “string”, 

        “last_picked”: “datetime” 

    } 

] 

 

Code 404: 

{} 

 

 

[POST] /pick-goal/{id} runs a function on a goal with the specified id to select it in the frontend 

 

Parameter: 

id: integer 

 

Code 200: 

{ 

     "id": int, 

     "goal": "string", 

     "description": "string", 

     “level”: “string”, 

     “status”: “string”, 

     “last_picked”: “datetime” 

} 

 

Code 400: 

(if id is NaN) 

{ 

    "error": "Invalid goal ID." 

} 

 

(if id is a number outside the range of ids) 

{ 

    "error": "Goal not found, already picked, or another goal is 

     already picked" 

} 

 

[GET] /goals/{id}/picked gives details of the selected goal 

 

Parameter: 

id: integer 

 

Code 200: 

{ 

     "id": int, 

     "goal": "string", 

     "description": "string", 

     “status”: “string” 

} 

 

Code 400: 

(if id is NaN) 

{ 

    "error": "Invalid goal ID." 

} 

 

Code 404: 

(if id is a number outside the range of ids) 

{ 

    "error”: “No picked goal found for this ID.” 

} 

 

[GET] /goals/{id}/messages gives messages associated with the selected goal 

 

Parameter: 

id: integer 

 

Code 200: 

{ 

    "messages": [ 

       “string" 

    ] 

} 

 

Code 400: 

(if id is NaN) 

{ 

    "error": "Invalid goal ID." 

} 

 

Code 404: 

(if id is a number outside the range of ids) 

{ 

    "error”: “No messages found for this goal.” 

} 

 

[GET] /goals/history gives all previously picked goals 

 

Code 200: 

[ 

    { 

        "id": int, 

        "goal": "string", 

        "description": "string", 

        “last_picked”: “datetime” 

    }, 

] 

 

Code 404: 

{} 

 

[POST] /goals/{id}/collect confirms that the leaves from a goal have been collected once finished 

 

Parameter: 

id: integer 

 

Code 200: 

{ 

     "message”: “Goal collected successfully.”, 

     “goalId”: int 

} 

 

Code 400: 

(if id is NaN) 

{ 

    "error": "Invalid goal ID." 

} 

 

Code 404: 

(if id is a number outside the range of ids) 

{ 

    "error”: “Goal not found or already collected” 

} 

 

Leafs 

Runs on port 3014 on localhost 

 

[GET] /    tests if API is running 

 

Code 200: 

"hi" 

 

[GET] /getLeafAmount shows how many leaves you currently have 

 

Code 200: 

[ 

    { 

        “leafAmount”: int 

    } 

] 

 

Code 404: 

{} 

 

Users 

Runs on port 3015 on localhost 

 

[GET] /    tests if API is running 

 

Code 200: 

"hi" 

 

[GET] /all-users gives information of every user on the platform 

 

Code 200: 

[ 

    { 

        “id”: int, 

        “username”: “string”, 

        “totalemissions”: int, 

        “leafAmount”: int, 

        “dietgoal”: “string”, 

        “accountcreationday”: “date” 

    }, 

] 

 

Code 404: 

{} 
