# Active Directory Red Team Attack Simulation Lab

## Project Overview

This project demonstrates a practical Active Directory Red Team attack simulation in a controlled lab environment.

The objective of this lab was to build an enterprise-style Active Directory environment, perform reconnaissance, identify attack paths, simulate credential attacks, and demonstrate lateral movement techniques commonly used during real-world Red Team engagements.

---

#  Objectives

- Build a Windows Active Directory environment
- Configure Domain Controller and Domain Services
- Create and manage domain users
- Join client machines to the domain
- Perform Active Directory enumeration
- Identify attack paths using BloodHound
- Perform Kerberos-based attacks
- Extract credential hashes
- Simulate Pass-the-Hash attack
- Understand attacker methodology in AD environments

---

#  Lab Environment

## Machines Used

### Windows Server (Domain Controller)

Role:
- Active Directory Domain Services
- DNS
- Domain Controller

- Hostname:
  DC01

- Domain:
lab.local

---

### Windows 10 Client

Role:
- Domain Joined Workstation

Purpose:
- Simulate normal enterprise user activity

---

### Kali Linux

Role:
- Red Team Attack Machine

Tools Used:
- BloodHound
- SharpHound
- Impacket Toolkit
- secretsdump
- psexec
- Kerberos attack tools

---

#  Lab Setup Process

## 01 - Windows Server Installation

Installed Windows Server and prepared the environment for Active Directory deployment.

---

## 02 - Static IP Configuration

Configured a static IP address to ensure stable communication between domain components.

---

## 03 - Active Directory Domain Services Installation

Installed AD DS role and configured the server for enterprise identity management.

---

## 04 - Domain Controller Promotion

Promoted Windows Server to Domain Controller.

Created:
Domain:
lab.local

---

## 05 - User Creation

Created multiple domain accounts to simulate enterprise users and service accounts.

Example:
Administrator
Talha
John
helpdesk
service_sql

---

## 06 - Windows 10 Domain Join

Joined Windows 10 workstation to:
lab.local

Validated domain authentication.

---

#  Red Team Activities

---

# 07 - Active Directory Enumeration (BloodHound)

## Objective

Identify relationships, privileges, and possible attack paths inside the Active Directory environment.

Tool:
- BloodHound

Process:

- Collected AD information using SharpHound
- Imported data into BloodHound
- Analyzed users, groups, and permissions

Findings:

- Domain structure mapping
- User privilege relationships
- Potential attack paths

---

# 08 - Kerberoasting Attack

## Objective

Identify service accounts with Service Principal Names (SPNs) and request Kerberos service tickets for offline password analysis.

Tool:
Impacket GetUserSPNs

Attack Flow:
- Domain User
 |
 |
- Request Service Ticket
 |
 |
- Extract Kerberos Hash
 |
 |
- Offline Password Analysis

Target Account:
- service_sql

---

# 09 - Credential Extraction

## Objective

Demonstrate extraction of Windows credential hashes from the Domain Controller.

Tool:
- Impacket secretsdump

Extracted:

- Local SAM hashes
- Domain NTLM hashes
- Kerberos keys
- Domain account information

---

# 10 - Pass-the-Hash Attack

## Objective

Demonstrate authentication using an NTLM hash instead of the original password.

Concept:
- NTLM Hash
 |
 |
- Authentication Request
 |
 |
- Remote Access


Tool:
- Impacket psexec

Result:

Successful authentication achieved using the extracted hash.

---

# Security Learnings

During this lab, the following security concepts were explored:

- Active Directory attack surface
- Identity and access management risks
- Weak service account security
- Credential exposure risks
- NTLM hash security issues
- Lateral movement techniques
- Importance of least privilege

---

#  Attack Chain Summary
- Active Directory Setup
 |
 ?
- Domain Enumeration
 | 
 ?
- BloodHound Analysis
 |
 ?
- Kerberoasting
 |
 ?
- Credential Extraction
 |
 ?
- Pass-the-Hash
 |
 ?
- Domain Compromise Simulation


---

#  Tools Used

| Tool | Purpose |
|---|---|
| Windows Server | Domain Controller |
| Windows 10 | Domain Client |
| Kali Linux | Attack Platform |
| BloodHound | AD Enumeration |
| SharpHound | Data Collection |
| Impacket | AD Attack Toolkit |
| secretsdump | Hash Extraction |
| psexec | Pass-the-Hash Simulation |

---

# Project Status

Completed Successfully

Covered Topics:

- Active Directory Deployment  
- Domain Administration  
- AD Enumeration  
- BloodHound Analysis  
- Kerberoasting  
- Credential Dumping  
- Pass-the-Hash  
- Red Team Attack Simulation  

---

#  Author

Muhammad Talha

Cyber Security Student | Red Team | Blue Team | SOC Operations