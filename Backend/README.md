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