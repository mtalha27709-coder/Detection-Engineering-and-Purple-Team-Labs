# Active Directory Attack & Detection Lab

> A complete Purple Team project demonstrating Active Directory attack simulation, detection engineering, threat hunting, and incident investigation using Wazuh SIEM, Sysmon, BloodHound, and Impacket.

![Status](https://img.shields.io/badge/Project-Completed-brightgreen)
![Platform](https://img.shields.io/badge/Platform-Windows%20Server%202022-blue)
![SIEM](https://img.shields.io/badge/SIEM-Wazuh-red)
![Language](https://img.shields.io/badge/Language-Python-yellow)
![MITRE](https://img.shields.io/badge/MITRE-ATT%26CK-orange)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

#  Project Overview

This project demonstrates a complete Active Directory attack lifecycle from both offensive and defensive perspectives.

The objective was to simulate common enterprise Active Directory attacks, monitor them using Wazuh SIEM and Sysmon, investigate Windows Security Events, and map all activities to the MITRE ATT&CK Framework.

Unlike traditional penetration testing labs, this project combines Red Team techniques with Blue Team detection and investigation, providing practical Purple Team experience similar to real-world Security Operations Centers (SOC).

---

# Objectives

- Build an enterprise Active Directory lab.
- Simulate common Active Directory attacks.
- Detect malicious activities using Wazuh SIEM.
- Monitor Windows Security Logs and Sysmon events.
- Investigate attacker behavior.
- Map attacks to MITRE ATT&CK.
- Produce professional security documentation.

---

#  Lab Architecture

```

                    Internet
                        ?
                        ?
                ???????????????
                ? Kali Linux  ?
                ?  Attacker   ?
                ???????????????
                       ?
                       ?
          ???????????????????????????
          ? Windows Server 2022 DC  ?
          ? Active Directory        ?
          ? Sysmon                  ?
          ? Wazuh Agent             ?
          ???????????????????????????
                       ?
                       ?
                ???????????????
                ? Wazuh SIEM  ?
                ? Manager     ?
                ? Dashboard   ?
                ???????????????

```

---

#  Lab Environment

| Component | Details |
|-----------|---------|
| Hypervisor | VMware Workstation |
| Attacker Machine | Kali Linux |
| Domain Controller | Windows Server 2022 |
| Active Directory | LAB.LOCAL |
| Monitoring | Sysmon |
| SIEM | Wazuh |
| Database | Neo4j |
| Enumeration | BloodHound |
| Attack Toolkit | Impacket |

---

#  Technologies Used

- Active Directory
- Windows Server 2022
- Kali Linux
- BloodHound
- Neo4j
- Impacket
- Wazuh SIEM
- Sysmon
- Windows Event Logs
- MITRE ATT&CK Framework

---

# Attack Scenarios

## 1BloodHound Enumeration

Collected Active Directory information including:

- Users
- Groups
- Computers
- Sessions
- Organizational Units
- Group Policy Objects
- Trust Relationships

---

## 2 Kerberoasting

Performed Kerberoasting attack against Service Principal Name (SPN) accounts.

Activities included:

- SPN Enumeration
- Kerberos Ticket Requests
- TGS Hash Extraction
- Windows Event ID 4769 Investigation

MITRE

- T1558.003

---

## 3 Pass-the-Hash

Simulated lateral movement using NTLM password hashes instead of plaintext credentials.

Activities included:

- Credential Dumping
- NTLM Authentication
- Remote Administrative Access
- Privileged Session Analysis

MITRE

- T1550.002

---

## 4 DCSync

Performed Active Directory replication abuse using Impacket.

Activities included:

- Directory Replication
- Administrator Hash Extraction
- KRBTGT Hash Extraction
- Domain User Credential Dumping

MITRE

- T1003.006

---

#  Blue Team Detection

The following defensive technologies were used throughout the project.

- Windows Security Logs
- Sysmon
- Wazuh Agent
- Wazuh Dashboard
- MITRE ATT&CK Mapping

Investigations included:

- Authentication Events
- Kerberos Activity
- NTLM Authentication
- Credential Dumping
- Directory Replication
- Lateral Movement

---

#  Windows Event IDs

| Event ID | Description |
|----------|-------------|
| 4624 | Successful Logon |
| 4625 | Failed Logon |
| 4672 | Special Privileges Assigned |
| 4688 | Process Creation |
| 4768 | Kerberos Authentication |
| 4769 | Kerberos Service Ticket |
| 4776 | NTLM Authentication |
| 7045 | Service Installation |

---

#  MITRE ATT&CK Mapping

| Attack | Technique | ID |
|----------|-----------|----|
| BloodHound | Account Discovery | T1087 |
| BloodHound | Permission Groups Discovery | T1069 |
| BloodHound | Domain Trust Discovery | T1482 |
| Kerberoasting | Kerberoasting | T1558.003 |
| Pass-the-Hash | Pass the Hash | T1550.002 |
| DCSync | DCSync | T1003.006 |

---

#  Project Structure

```

Active-Directory-Attack-Detection-Lab/

 README.md
 01-BloodHound/
 BloodHound-Enumeration.md

 02-Kerberoasting/
 Kerberoasting.md

 03-Pass-the-Hash/
 Pass-the-Hash.md

 04-DCSync/
 DCSync.md

 05-Blue-Team-Detection/
 Blue-Team-Detection.md

 06-MITRE-Mapping/
 MITRE-Mapping.md

 07-Conclusion/
 Conclusion.md

```

---

#  Skills Demonstrated

- Active Directory Administration
- Detection Engineering
- Purple Team Operations
- Threat Hunting
- Incident Investigation
- Windows Event Analysis
- Wazuh SIEM
- Sysmon Monitoring
- Credential Access Detection
- Lateral Movement Detection
- MITRE ATT&CK Mapping

---

#  Learning Outcomes

Through this project, I gained hands-on experience in:

- Active Directory Security
- Enterprise Attack Simulation
- SIEM Monitoring
- Windows Security Logs
- Detection Engineering
- Threat Hunting
- Blue Team Investigation
- Incident Response
- Purple Team Methodology

---

#  Future Improvements

Future enhancements may include:

- Golden Ticket Attack
- Silver Ticket Attack
- AS-REP Roasting
- NTLM Relay
- Pass-the-Ticket
- LDAP Signing Detection
- Sigma Rule Development
- YARA Integration
- Microsoft Defender for Identity
- Splunk Detection Rules

---

#  License

This project was created for educational, defensive, and authorized security research purposes only.

---

#  Acknowledgements

Special thanks to the cybersecurity community, MITRE ATT&CK, Wazuh, Sysmon, Impacket, BloodHound, and Microsoft documentation for providing valuable resources used throughout this project.