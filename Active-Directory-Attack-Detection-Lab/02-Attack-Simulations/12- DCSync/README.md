# DCSync Attack & Detection

## Overview

DCSync is a credential dumping technique that abuses Active Directory replication privileges to retrieve password hashes directly from the Domain Controller. Instead of accessing the `NTDS.dit` database locally, the attacker impersonates a legitimate Domain Controller and requests replication data using the Directory Replication Service (DRS) protocol.

This technique is considered one of the most critical Active Directory attacks because it allows attackers to obtain password hashes for all domain users, including highly privileged accounts such as **Administrator** and **KRBTGT**.

---

## Objective

The objective of this lab was to perform a DCSync attack against a Windows Server 2022 Domain Controller, retrieve Active Directory password hashes, and understand how defenders can detect and investigate replication abuse.

---

## Lab Environment

| Component | Details |
|-----------|---------|
| Attacker Machine | Kali Linux |
| Target | Windows Server 2022 Domain Controller |
| Domain | LAB.LOCAL |
| Monitoring | Sysmon + Wazuh Agent |
| SIEM | Wazuh |

---

## Tools Used

- Impacket
- secretsdump.py
- Windows Security Logs
- Sysmon
- Wazuh

---

## Attack Flow

### Step 1 – Initial Access

Authenticated to the Domain Controller using a privileged account.

---

### Step 2 – Execute DCSync

Executed the following command:

```bash
impacket-secretsdump lab.local/Administrator:<Password>@192.168.245.10
```

---

### Step 3 – Directory Replication

The Domain Controller processed the replication request and returned credential data from the Active Directory database.

---

### Step 4 – Credential Dump

Successfully extracted:

- Administrator NTLM Hash
- KRBTGT Hash
- Domain User Hashes
- Service Account Hashes
- Machine Account Hashes
- Kerberos AES Keys

---

## Results

The DCSync attack successfully replicated Active Directory credential data without directly accessing the NTDS.dit file.

The attack returned password hashes for multiple privileged and standard accounts, demonstrating the impact of compromised replication privileges.

---

## Important Accounts Retrieved

- Administrator
- KRBTGT
- Talha
- John
- helpdesk
- service_sql
- Domain Controller Machine Account
- Windows 10 Machine Account

---

## Detection

Blue Team analysts should monitor for:

- Directory Replication (DRSUAPI) activity
- Replication requests from non-Domain Controllers
- Credential dumping behavior
- Suspicious authentication using privileged accounts
- LSASS-related activity
- Wazuh alerts indicating abnormal replication operations

---

## Investigation

During the investigation, analysts should verify:

- Source IP Address
- User Account
- Replication Requests
- Timeline of Events
- Active Directory Replication Logs
- Wazuh Alerts
- Windows Security Events

---

## MITRE ATT&CK Mapping

| Technique | ID |
|-----------|----|
| OS Credential Dumping: DCSync | T1003.006 |

---

## Indicators of Compromise (IOCs)

- Unexpected Active Directory replication requests
- Credential dumping using DRSUAPI
- Retrieval of NTDS credential data
- Access to KRBTGT account hash
- Multiple domain account hashes extracted in a short period

---

## Blue Team Recommendations

- Limit replication privileges to Domain Controllers only.
- Monitor Active Directory replication traffic.
- Detect unauthorized DRSUAPI requests.
- Enable advanced Windows auditing.
- Monitor privileged account usage.
- Deploy Wazuh detection rules for credential dumping techniques.
- Regularly review Domain Admin and Replication permissions.

---

## Conclusion

The DCSync attack was successfully executed using Impacket's `secretsdump.py` tool. Password hashes for privileged users, service accounts, and machine accounts were extracted through Active Directory replication without directly accessing the NTDS database.

This lab demonstrated the severe impact of replication abuse and highlighted the importance of monitoring privileged replication activities using Windows Security Logs, Sysmon, and Wazuh SIEM.