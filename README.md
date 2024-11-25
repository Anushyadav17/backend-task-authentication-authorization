# Authentication API with Role-based Access Control (Admin, User, Moderator)

This is an Express.js-based backend application that implements authentication with **Role-based Access Control (RBAC)**. Users can log in with different roles (Admin, User, Moderator), and access to certain routes is restricted based on their role.

### Deployment Link 
- [Backend Authentication API](https://backend-task-authentication-authorization.onrender.com)

## Features

- Login functionality for Admin, User, and Moderator roles.
- Role-based protected routes (Admin, User, Moderator).
- JWT token-based authentication with cookies.
- Middleware to verify JWT and check user roles.

## API Endpoints

### 1. Login

- **Endpoint**: `POST /login`
- **Description**: Logs in the user based on email, password, and account type (User, Admin, or Moderator). On successful login, a JWT token will be returned and set as a cookie.

#### Request Body:

```json
{
  "email": "user@gmail.com",
  "password": "password",
  "accountType": "User"
}
```
```json
{
  "email": "admin@gmail.com",
  "password": "adminpassword",
  "accountType": "Admin"
}
```

```json
{
  "email": "moderator@gmail.com",
  "password": "moderatorpassword",
  "accountType": "Moderator"
}
```

### 2. Admin Route

- **Endpoint**:  `POST /login`
- **Description**: This route is only accessible to users with the "Admin" account type. It returns a welcome message for Admins.
Testing:
Pre-requisite: Log in as an Admin and get the JWT token.

Header:
```
Authorization: Bearer <your_jwt_token_here>
```

### 3.User Route
- **Endpoint**: `GET /user`
- **Description**: This route is only accessible to users with the "User" account type. It returns a welcome message for Users.
Testing:
Pre-requisite: Log in as a User and get the JWT token.

Header:
```
Authorization: Bearer <your_jwt_token_here>
```


### 4. Moderator Route
- **Endpoint**: ` GET /Moderator`
- **Description** This route is only accessible to users with the "Moderator" account type. It returns a welcome message for Moderators.
Testing:
Pre-requisite: Log in as a Moderator and get the JWT token.

Header:
```
Authorization: Bearer <your_jwt_token_here>
```