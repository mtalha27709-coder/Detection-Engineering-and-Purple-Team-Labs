# MITRE ATT&CK Mapping

# Overview

This document maps all attack techniques performed during the **Active Directory Attack & Detection Lab** to the MITRE ATT&CK Framework. The objective is to demonstrate how offensive security activities can be correlated with defensive detections, helping Security Operations Center (SOC) analysts understand attacker behavior and improve detection engineering.

The mapping provides a clear relationship between each attack, its corresponding MITRE ATT&CK technique, and the defensive monitoring performed using Windows Security Logs, Sysmon, and Wazuh SIEM.

---

# MITRE ATT&CK Framework

The MITRE ATT&CK Framework is a globally recognized knowledge base that documents adversary tactics and techniques observed during real-world cyber attacks.

Rather than focusing only on malware, ATT&CK describes **how attackers achieve their objectives**, enabling defenders to detect, investigate, and respond more effectively.

---

# Attack Mapping

| Attack | MITRE Technique | Technique ID | Tactic |
|---------|-----------------|--------------|--------|
| BloodHound Enumeration | Account Discovery | T1087 | Discovery |
| BloodHound Enumeration | Permission Groups Discovery | T1069 | Discovery |
| BloodHound Enumeration | Domain Trust Discovery | T1482 | Discovery |
| Kerberoasting | Steal or Forge Kerberos Tickets (Kerberoasting) | T1558.003 | Credential Access |
| Pass-the-Hash | Use Alternate Authentication Material (Pass the Hash) | T1550.002 | Lateral Movement |
| DCSync | OS Credential Dumping (DCSync) | T1003.006 | Credential Access |

---

# MITRE Tactics Covered

During this project, multiple ATT&CK tactics were demonstrated.

| Tactic | Description |
|---------|-------------|
| Discovery | Enumerating Active Directory objects and permissions. |
| Credential Access | Extracting Kerberos tickets and domain password hashes. |
| Lateral Movement | Authenticating to remote systems using NTLM hashes. |

---

# Detection Mapping

| Attack | Windows Events | Detection Source |
|---------|---------------|------------------|
| BloodHound | LDAP Enumeration | Wazuh + Windows Logs |
| Kerberoasting | Event ID 4769 | Windows Security Logs + Wazuh |
| Pass-the-Hash | Event IDs 4624, 4672, 4688 | Windows Security Logs + Sysmon |
| DCSync | Replication Activity | Windows Security Logs + Wazuh |

---

# Blue Team Perspective

Each attack generated valuable telemetry that can be investigated by SOC analysts.

## BloodHound

- Active Directory Enumeration
- LDAP Queries
- Domain Information Collection

Detection Goal:

Identify abnormal reconnaissance activity against Active Directory.

---

## Kerberoasting

- Kerberos Service Ticket Requests
- Event ID 4769
- Service Account Activity

Detection Goal:

Identify unusual Kerberos ticket requests targeting Service Principal Name (SPN) accounts.

---

## Pass-the-Hash

- NTLM Authentication
- Remote Administrative Access
- Privileged Sessions
- Remote Execution

Detection Goal:

Detect lateral movement performed without the use of plaintext passwords.

---

## DCSync

- Directory Replication
- Credential Dumping
- Administrator Hash Retrieval
- KRBTGT Hash Retrieval

Detection Goal:

Detect unauthorized Active Directory replication requests originating from non-Domain Controllers.

---

# Detection Engineering

The following data sources were used throughout the project.

| Data Source | Purpose |
|-------------|---------|
| Windows Security Logs | Authentication and account activity |
| Sysmon | Process creation and system telemetry |
| Wazuh Agent | Log collection and forwarding |
| Wazuh SIEM | Alert generation and investigation |
| Active Directory | Authentication and replication events |

---

# Security Recommendations

To improve Active Directory security:

- Enable Advanced Windows Auditing.
- Deploy Sysmon on all critical servers.
- Monitor Kerberos ticket requests.
- Monitor NTLM authentication.
- Restrict replication permissions.
- Detect abnormal LDAP enumeration.
- Protect privileged accounts.
- Use Group Managed Service Accounts (gMSA).
- Continuously map detections to MITRE ATT&CK.
- Review Wazuh alerts regularly.

---

# Skills Demonstrated

This project demonstrates practical experience in:

- Active Directory Security
- MITRE ATT&CK Mapping
- Detection Engineering
- Blue Team Operations
- Threat Hunting
- Credential Access Detection
- Lateral Movement Detection
- Active Directory Investigation
- Wazuh SIEM
- Sysmon Monitoring
- Windows Security Event Analysis
- Incident Investigation

---

# Conclusion

The Active Directory Attack & Detection Lab successfully demonstrated multiple real-world attack techniques and their corresponding MITRE ATT&CK mappings. By correlating offensive activities with Windows Security Logs, Sysmon telemetry, and Wazuh SIEM alerts, the project highlights how security analysts can detect, investigate, and respond to Active Directory threats in an enterprise environment.

Understanding MITRE ATT&CK enables defenders to build stronger detections, improve threat hunting capabilities, and enhance incident response processes against modern adversary techniques.