# BloodHound Enumeration

## Overview

BloodHound is an Active Directory enumeration and attack path analysis tool used by Red Teamers and Penetration Testers. It collects information about users, groups, computers, sessions, Group Policy Objects (GPOs), and permissions inside an Active Directory environment. The collected data is stored in Neo4j and visualized through the BloodHound interface.

---

## Objective

The objective of this lab was to enumerate the Active Directory environment and visualize trust relationships that could be abused by an attacker.

---

## Lab Environment

| Component | Details |
|-----------|---------|
| Attacker | Kali Linux |
| Domain Controller | Windows Server 2022 |
| Domain | LAB.LOCAL |
| Tool | BloodHound CE |
| Database | Neo4j |

---

## Tools Used

- BloodHound CE
- bloodhound-python
- Neo4j
- LDAP
- DNS

---

## Steps Performed

### 1. Installed Neo4j

Started Neo4j database service.

```
sudo neo4j start
```

---

### 2. Installed BloodHound

Installed BloodHound CE on Kali Linux.

```
sudo apt install bloodhound
```

---

### 3. Connected to Neo4j

Logged into the Neo4j web interface and verified database connectivity.

---

### 4. Collected Active Directory Data

Executed BloodHound Python collector.

```
bloodhound-python -u talha -p 'Password123' -d lab.local -ns 192.168.245.10 -c All --zip
```

---

### 5. Generated ZIP File

BloodHound successfully collected:

- Users
- Computers
- Groups
- Sessions
- Organizational Units
- GPOs

A ZIP archive containing the collected data was created.

---

### 6. Imported Data

Uploaded the ZIP file into BloodHound for graph visualization and attack path analysis.

---

## Results

BloodHound successfully enumerated the Active Directory environment and generated relationship graphs between users, computers, groups, and privileged accounts.

---

## Blue Team Perspective

BloodHound itself is not malicious software; however, extensive LDAP enumeration can indicate reconnaissance activity. Security teams should monitor:

- Large LDAP queries
- Unusual AD enumeration
- PowerShell reconnaissance
- BloodHound collection activity

---

## MITRE ATT&CK

| Technique | ID |
|-----------|----|
| Account Discovery | T1087 |
| Domain Trust Discovery | T1482 |
| Permission Groups Discovery | T1069 |
| System Owner/User Discovery | T1033 |

---

## Conclusion

BloodHound provides a complete visualization of Active Directory relationships and helps identify privilege escalation paths. It is widely used during Active Directory security assessments and Purple Team exercises.