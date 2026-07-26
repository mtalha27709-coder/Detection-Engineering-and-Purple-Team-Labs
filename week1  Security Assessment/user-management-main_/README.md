# User Management System

## Introduction

User Management system is a REST node application, made with express.js, mongoDB and more, that allows user to make an account with their email or phone number(required one of these), name and password(required), also upload their profile image.

## Installation

Install all the dependencies with npm.

```
git clone https://github.com/Brassalsa/user-management/
npm i
```

You can also use other package managers.

## Env Variables

```
PORT=8000
MONGODB_URI=your-mongo-db-uri
ACCESS_TOKEN_SECRET=any-long-string-for-strong-token
ACCESS_TOKEN_EXPIRY=1d
```

You can set these Variables to your liking.

## Technolgies used

### Express.js

Express.js is used to make a server.
Read docs [here](https://expressjs.com/)

### Mongo DB and Mongoose

[Mongo DB](https://www.mongodb.com/) for storing data.

[Mongoose](https://mongoosejs.com/) is used for db schema and more.

### Authentication JWT

[JWT](https://jwt.io/) for token generation.

## About

### User

Users can change their name, password and profile image, enter their email or phone number (if not provided) when regestering but once email and phone number is provided it cannot be changed.

### Admin

Admin users can view, modify and delete users. They can also change their and other user's email and phone number also they can promote normal users to admin. Admin users cannot change other admin user's details.

## API's

### User: /api/v1/users

- Register user (post): /register
- Login (post): /login
- Account Details (get): /account
- Account update (put): /account
- Change Password (post): /account/change-password
- Delete Account (delete): /account

### Admin: /api/v1/admin

- Create admin account (post): /createAdmin
- Get Users per page (get): /users?page=1&limit=10 (queries value can be any number)
- Get user by id (get): /user?userId=abc123 (queries value can be any id)
- Modify user details (put): /user?userId=abc123 (queries value can be any id)
- Delete user (delete): /user?userId=abc123 (queries value can be any id)
