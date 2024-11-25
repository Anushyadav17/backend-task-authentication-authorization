Authentication API with Role-based Access Control (Admin, User, Moderator)

This is an Express.js-based backend application that implements authentication with role-based access control (RBAC). Users can log in with different roles (Admin, User, Moderator), and access to certain routes is restricted based on their role.

Features

- Login functionality for Admin, User, and Moderator roles.
- Role-based protected routes (Admin, User, Moderator).
- JWT token-based authentication with cookies.
- Middleware to verify JWT and check user roles.

API Endpoints
1. Login
Endpoint: POST /login
Description: Logs in the user based on email, password, and account type (User, Admin, or Moderator). On successful login, a JWT token will be returned and set as a cookie.

Request body:

{
  "email": "user@example.com",
  "password": "password",
  "accountType": "User"
}

Response:
Success (200):

{
  "success": true,
  "message": "User login successful.",
  "token": "your_jwt_token_here"
}

Failure (400):

{
  "success": false,
  "message": "All fields are required."
}

2. Admin Route
Endpoint: GET /admin
Description: This route is only accessible to users with the "Admin" account type. It returns a welcome message for Admins.
Testing:
Pre-requisite: Log in as an Admin and get the JWT token.

Header:
Authorization: Bearer <your_jwt_token_here>

Expected Response (200):
{
  "message": "Welcome to Admin Route"
}

Failure (403 - Forbidden): If the user is not an Admin, the response will indicate access is denied.

{
  "success": false,
  "message": "This is a protected route for Admins only."
}

3. User Route
Endpoint: GET /user
Description: This route is only accessible to users with the "User" account type. It returns a welcome message for Users.
Testing:
Pre-requisite: Log in as a User and get the JWT token.

Postman Request: Send a GET request to http://localhost:3000/user with the Authorization header set to Bearer <your_jwt_token_here>.

Header:

Authorization: Bearer <your_jwt_token_here>

Expected Response (200):

{
  "message": "Welcome to User Route"
}

Failure (403 - Forbidden): If the user is not a User, the response will indicate access is denied.

{
  "success": false,
  "message": "This is a protected route for Users only."
}

4. Moderator Route
Endpoint: GET /Moderator
Description: This route is only accessible to users with the "Moderator" account type. It returns a welcome message for Moderators.
Testing:
Pre-requisite: Log in as a Moderator and get the JWT token.

Postman Request: Send a GET request to http://localhost:3000/Moderator with the Authorization header set to Bearer <your_jwt_token_here>.

Header:

Authorization: Bearer <your_jwt_token_here>
Expected Response (200):

{
  "message": "Welcome to Moderator Route"
}

Failure (403 - Forbidden): If the user is not a Moderator, the response will indicate access is denied.

{
  "success": false,
  "message": "This is a protected route for Moderator only."
}


