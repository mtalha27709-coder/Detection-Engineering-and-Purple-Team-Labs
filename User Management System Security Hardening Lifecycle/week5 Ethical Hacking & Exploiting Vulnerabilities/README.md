# Week 5: Ethical Hacking & Exploiting Vulnerabilities

## ?? Overview
Week 5 focused on thinking like an attacker to identify, exploit, and fix critical vulnerabilities in a controlled environment. All testing was performed on DVWA (Damn Vulnerable Web Application) using industry-standard penetration testing tools.

---

## ? Tasks Completed

### 1. Reconnaissance
- **Nmap Scan:** Discovered open ports (80, 443, 3306) and services (Apache, MySQL)
- **WhatWeb Scan:** Identified technology stack (Apache 2.4.58, PHP 8.2.12)
- **Nikto Scan:** Found 6 vulnerabilities including exposed headers and outdated software

### 2. Configuration Hardening
| File | Change | Purpose |
|------|--------|---------|
| `php.ini` | `expose_php = Off` | Hide PHP version |
| `php.ini` | `session.cookie_httponly = 1` | Prevent XSS cookie theft |
| `php.ini` | `session.cookie_samesite = Strict` | CSRF protection |
| `httpd.conf` | `TraceEnable Off` | Disable TRACE method |
| `httpd.conf` | `ServerTokens Prod` | Hide Apache version |

### 3. SQL Injection Testing
- **Found:** UNION-based SQL injection in `id` parameter
- **Exploited:** Extracted 6 databases, 2 tables, 5 users
- **Cracked Passwords:** admin/password, gordonb/abc123, 1337/charley, pablo/letmein, smithy/password
- **Fix:** Implemented Prepared Statements in PHP

### 4. CSRF Testing
- **Found:** No token validation in password change request
- **Exploited:** Changed admin password without token
- **Fix:** Added CSRF token generation & validation
- **Frontend:** Added hidden `user_token` field

---

## ?? Vulnerabilities Fixed

| Vulnerability | Severity | Status |
|---------------|----------|--------|
| SQL Injection | ?? Critical | ? Fixed |
| CSRF | ?? High | ? Fixed |
| TRACE Method Enabled | ?? Medium | ? Fixed |
| PHP Version Exposed | ?? Low | ? Fixed |
| Cookie Without HttpOnly | ?? Medium | ? Fixed |
| Missing Permissions-Policy | ?? Medium | ? Fixed |

---

## ??? Tools Used

| Tool | Purpose |
|------|---------|
| **Nmap** | Port scanning, service detection |
| **WhatWeb** | Technology stack detection |
| **Nikto** | Web vulnerability scanning |
| **SQLMap** | SQL injection exploitation |
| **Burp Suite** | CSRF testing, request manipulation |
| **XAMPP** | Local web server |

---

## ?? Screenshots
[22 screenshots available in `screenshots/` folder]

---

## ?? Folder StructureWeek-5/
??? README.md
??? screenshots/ # All test screenshots
??? code-changes/ # Fixed PHP files
??? scans/ # Nmap, Nikto, SQLMap outputs
??? reports/ # Full detailed report

---

## ?? Progress

| Task | Status |
|------|--------|
| Reconnaissance | ? Complete |
| Configuration Hardening | ? Complete |
| SQL Injection Testing & Fix | ? Complete |
| CSRF Testing & Fix | ? Complete |
| Report Documentation | ? Complete |

---

## ?? Key Learnings
- SQL Injection remains a critical threat if not properly handled
- CSRF attacks can be devastating without proper token validation
- Configuration hardening (php.ini, httpd.conf) is as important as code fixes
- Ethical hacking requires a systematic methodology
- Security headers are essential for modern web applications

---

## ?? References
- OWASP Top 10 (2021)
- OWASP SQL Injection Prevention Cheat Sheet
- OWASP CSRF Prevention Cheat Sheet
- PortSwigger Burp Suite Documentation
- SQLMap User Guide

---

## ?? Intern Information
**Name:** [Apna Naam]  
**Week:** 5  
**Date:** 06 July 2026  
**Deadline:** 14 July 2026  

---

## ? Status: COMPLETED

---