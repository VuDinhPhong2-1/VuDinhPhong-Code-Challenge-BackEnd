```markdown
# 99Tech Code Challenge #5

## Getting Started

To run the project, follow these steps:

1. Clone the repository:
```

git clone git@github.com:VuDinhPhong2-1/VuDinhPhong-Code-Challenge-BackEnd.git

```

2. Install dependencies:
```

cd code-challenge
npm install

```

3. Create a `.env` file in the root directory of the project and add your MongoDB connection string:
path: CODE-CHALLENGE
```

MONGODB_URI=mongodb+srv://vudinhphong261001:AloAloPhong@brianvu.ovw3hu7.mongodb.net/phong

```

4. Start the server:
```

npm run start:problem5

```

The server will be running on `http://localhost:3000`.

## Problem Description

For this challenge, you are required to implement a RESTful API using Node.js, Express, and MongoDB. The API should have the following endpoints:

- `GET /api/users`: Retrieve a list of all users.
- `POST /api/users`: Create a new user.
- `GET /api/users/:id`: Retrieve a single user by ID.
- `PUT /api/users/:id`: Update a user by ID.
- `DELETE /api/users/:id`: Delete a user by ID.

The `User` model should have the following fields: `name`, `email`, and `age`.

## Solution

The solution is implemented in the `src/problem5` directory. The `server.ts` file contains the server setup and the `User` model is defined in the `models/User.ts` file. The `routes/users.ts` file contains the routes for the API endpoints.

To run the solution, navigate to the `src/problem5` directory and start the server using:

```

npm start:problem5

```

The server will be running on `http://localhost:3000`. You can use tools like Postman or curl to test the API endpoints.
```
