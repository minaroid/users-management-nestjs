# Users Management NestJS

This repository contains a Users Management application built with NestJS and TypeORM.

## Features

- User CRUD operations
- Authentication and authorization

## Requirements

- Node.js and npm/yarn installed
- PostgreSQL (or any other supported database) installed and running

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/minaroid/users-management-nestjs.git

2. Create `.env` file using `.env.example`

3. Install dependencies:

   ```bash
   npm install

4. Run database container:

   ```bash
   npm run db:dev:up

5. Start the server:

   ```bash
   npm run start:dev

6. Access the application at http://localhost:3000.  


 ### Endpoints

- POST    api/v1/auth/register
- POST    api/v1/auth/login
- POST    api/v1/auth/logout
- POST    api/v1/auth/refresh

- GET     api/v1/users/profile
- GET     api/v1/users/list
- PATCH   api/v1/users/profile
- DELETE  api/v1/users/:id
