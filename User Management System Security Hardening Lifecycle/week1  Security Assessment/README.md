# Week 1 – Security Assessment Report

## Intern Name
Muhammad Talha

---

## Project Overview

This week focused on setting up a Node.js User Management System and performing basic security testing. The goal was to understand the application and identify common vulnerabilities.

---

## Environment Setup

- Node.js
- Express.js
- MongoDB Atlas
- Postman

Server running at:
http://localhost:3000

---

## APIs Tested

- POST /api/v1/users/register
- POST /api/v1/users/login
- GET /api/v1/users/account

---

## Security Testing

### XSS Test

Input:
<script>alert('XSS')</script>

Result:
Stored in database but not executed.

---

### SQL Injection Test

Input:
admin' OR '1'='1

Result:
Login failed (Wrong credentials)

---

### Authentication Test

- JWT token generated successfully
- Protected routes working correctly

---

## Findings

- Input sanitization missing
- No rate limiting
- Security headers not implemented
- Passwords are hashed (bcrypt used)

---

## Recommendations

- Add input validation
- Use Helmet.js
- Implement rate limiting
- Improve password policies
- Add logging system

---

## Conclusion

Week 1 security assessment completed successfully. The system works correctly but needs improvements in input validation and security hardening.