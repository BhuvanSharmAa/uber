# User Registration API Documentation

## Register User
Endpoint for creating a new user account in the system.

### Endpoint
`POST /users/register`

### Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response Body
```json
{
  "token": "jwt_token_here",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "_id": "user_id"
  }
}
```

### Error Response
```json
{
  "error": "Email already in use"
}
```

### Validation Error Response
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email"
    },
    {
      "msg": "First name must be of atleast 3 character",
      "param": "fullname.firstname"
    }
  ]
}
```

## Login User
Endpoint for authenticating existing users.

### Endpoint
`POST /users/login`

### Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Validation Rules
- Email: valid email format (required)
- Password: minimum 5 characters (required)

### Success Response
- **Status Code**: 200 (OK)
```json
{
  "token": "jwt_token_here",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "_id": "user_id"
  }
}
```

### Error Responses
- **Status Code**: 400 (Bad Request)
  - When credentials are invalid:
    ```json
    {
      "error": "Invalid credentials"
    }
    ```
  - When validation fails:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email"
        },
        {
          "msg": "Password must be of atleast 5 character",
          "param": "password"
        }
      ]
    }
    ```

### Security Features
- Passwords are compared using bcrypt
- JWT token is generated upon successful authentication