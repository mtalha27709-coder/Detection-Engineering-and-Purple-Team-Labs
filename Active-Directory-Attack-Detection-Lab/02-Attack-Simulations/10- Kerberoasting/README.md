# Kerberoasting Attack & Detection

## Overview

Kerberoasting is a post-exploitation Active Directory attack that targets Service Principal Name (SPN) accounts. An attacker requests Kerberos service tickets (TGS) and extracts encrypted ticket hashes for offline password cracking.

---

## Objective

The objective of this lab was to perform a Kerberoasting attack, observe Windows security events, and validate detection using Wazuh SIEM.

---

## Lab Environment

| Component | Details |
|-----------|---------|
| Attacker | Kali Linux |
| Target | Windows Server 2022 Domain Controller |
| Domain | LAB.LOCAL |
| SIEM | Wazuh |
| Monitoring | Sysmon + Windows Event Logs |

---

## Tools Used

- Impacket
- GetUserSPNs.py
- Wazuh
- Sysmon

---

## Attack Steps

### 1. Enumerated SPN Accounts

Discovered service accounts configured with Service Principal Names.

---

### 2. Requested Kerberos Service Ticket

Executed Kerberoasting attack.

Example:

```
GetUserSPNs.py lab.local/talha:Password123 -dc-ip 192.168.245.10 -request
```

---

### 3. Captured Kerberos Hash

Successfully obtained the Kerberos TGS hash for offline password cracking.

---

### 4. Detection

Windows generated:

- Security Event ID 4769
- Kerberos Service Ticket Request

Wazuh also generated authentication-related alerts.

---

## Investigation

Analysts reviewed:

- Requested service account
- Source IP address
- Client username
- Timestamp
- Kerberos ticket request activity

---

## Detection Indicators

- Event ID 4769
- Multiple TGS requests
- Requests targeting SPN accounts
- Offline password cracking attempts

---

## MITRE ATT&CK

| Technique | ID |
|-----------|----|
| Kerberoasting | T1558.003 |

---

## Blue Team Detection

The attack generated Windows Security logs, including Event ID 4769. Wazuh successfully ingested authentication events and mapped the activity to MITRE ATT&CK techniques based on its default ruleset.

---

## Recommendations

- Use strong passwords for service accounts.
- Prefer Group Managed Service Accounts (gMSA).
- Monitor Event ID 4769.
- Detect abnormal Kerberos ticket requests.
- Rotate service account credentials regularly.

---

## Conclusion

The Kerberoasting attack was successfully executed in the lab. Kerberos service ticket requests were captured, Windows generated Event ID 4769, and Wazuh successfully monitored the authentication activity, demonstrating both offensive and defensive aspects of Active Directory security.