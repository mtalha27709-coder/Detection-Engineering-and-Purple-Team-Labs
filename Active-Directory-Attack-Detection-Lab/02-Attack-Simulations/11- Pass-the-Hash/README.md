# Pass-the-Hash Attack & Detection

## Overview

Pass-the-Hash (PtH) is a credential access and lateral movement technique that allows an attacker to authenticate using an NTLM password hash instead of the user's plaintext password. This technique is commonly used after credential dumping and enables attackers to move laterally across systems within an Active Directory environment.

---

## Objective

The objective of this lab was to simulate a Pass-the-Hash attack against a Windows Domain Controller, observe the authentication process, and validate detection using Windows Security Logs, Sysmon, and Wazuh SIEM.

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
- psexec.py
- Wazuh
- Sysmon
- Windows Security Logs

---

## Attack Flow

### Step 1 – Credential Enumeration

Verified that administrative credentials were available for the target system.

---

### Step 2 – NTLM Hash Extraction

Used Impacket to obtain NTLM password hashes from the Domain Controller.

Example:

```bash
impacket-secretsdump Administrator:Password123@192.168.245.10
```

---

### Step 3 – Pass-the-Hash Authentication

Authenticated to the target using the NTLM hash instead of the plaintext password.

Example:

```bash
impacket-psexec -hashes <LMHASH>:<NTHASH> Administrator@192.168.245.10
```

---

### Step 4 – Remote Access

Successfully obtained a remote command shell on the target machine using Pass-the-Hash authentication.

---

## Results

The Pass-the-Hash attack successfully authenticated to the Domain Controller using the NTLM hash without requiring the user's password.

The attacker gained remote administrative access, demonstrating how stolen hashes can be abused for lateral movement inside an Active Directory environment.

---

## Detection

Blue Team monitoring focused on:

- Successful NTLM authentication
- Remote administrative logons
- New remote service creation
- Administrative process execution
- Suspicious lateral movement

Windows Security Logs and Sysmon events were forwarded to Wazuh for monitoring and investigation.

---

## Investigation

The following artifacts were reviewed:

- Source IP Address
- Target Host
- User Account
- Authentication Method
- Event Timeline
- Remote Process Creation
- Wazuh Alerts

---

## MITRE ATT&CK Mapping

| Technique | ID |
|-----------|----|
| Pass the Hash | T1550.002 |
| Lateral Tool Transfer | T1570 |
| Remote Services | T1021 |

---

## Indicators of Compromise (IOCs)

- NTLM authentication from unusual hosts
- Remote administrative access
- Service creation via PsExec
- Administrative shell execution
- Authentication without password usage

---

## Blue Team Recommendations

- Enable Credential Guard
- Disable NTLM where possible
- Restrict administrative privileges
- Use Windows LAPS
- Monitor Event IDs 4624, 4672, 4688, 7045
- Monitor PsExec and Impacket activity
- Detect abnormal lateral movement using Wazuh

---

## Conclusion

The Pass-the-Hash attack was successfully executed using Impacket tools. Administrative access was obtained by authenticating with an NTLM hash instead of a plaintext password. Windows logs, Sysmon telemetry, and Wazuh monitoring demonstrated how defenders can detect and investigate this technique in an enterprise Active Directory environment.