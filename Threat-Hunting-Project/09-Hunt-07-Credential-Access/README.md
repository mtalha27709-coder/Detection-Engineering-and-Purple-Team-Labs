# Hunt 07 – Credential Access

## Objective

The objective of this hunt was to monitor and investigate activities that may indicate attempts to access or steal credentials from a Windows endpoint. Credential Access is a critical stage of the attack lifecycle, where adversaries attempt to obtain user or system credentials for privilege escalation and lateral movement.

---

## Hunt Hypothesis

An attacker may attempt to access credentials by launching tools or processes commonly associated with credential collection. These activities generate process creation events that can be monitored using Sysmon and investigated through Wazuh.

---

## Environment

- SIEM: Wazuh
- Endpoint: Windows 10
- Logging: Sysmon
- Event Source: Sysmon Event ID 1 (Process Creation)
- Detection Platform: Wazuh Dashboard

---

## Detection Activity

The hunt focused on monitoring processes commonly associated with credential access.

Observed processes included:

- PowerShell
- LSASS-related activity (monitoring)
- Windows authentication processes
- Administrative tools

No real credential dumping was performed. The objective was to validate the detection and investigation workflow in a controlled lab environment.

---

## Wazuh Hunt Queries

```text
data.win.eventdata.image:*powershell.exe
```

```text
data.win.eventdata.commandLine:*powershell*
```

```text
data.win.eventdata.image:*lsass.exe
```

```text
rule.mitre.id:T1003
```

Fallback query:

```text
data.win.system.eventID:1
```

---

## Investigation Process

The generated Sysmon logs were reviewed in Wazuh.

The investigation focused on:

- Process Name
- Command Line
- Parent Process
- User Account
- Process ID
- Execution Time
- Sysmon Event ID
- MITRE Mapping

---

## Evidence Collected

The following artifacts were analyzed during the investigation.

- Process creation events
- PowerShell execution
- User account information
- Parent-child process relationship
- Execution timestamp
- Process metadata

---

## Detection Analysis

Sysmon successfully generated process creation events that were forwarded to Wazuh for investigation.

Key observations:

- Process execution events were successfully captured.
- Full command-line arguments were available.
- Parent process information was visible.
- Execution timelines could be reconstructed.
- Detection logic aligned with credential access monitoring use cases.

---

## MITRE ATT&CK Mapping

| Tactic | Technique | ID |
|---------|-----------|----|
| Credential Access | OS Credential Dumping | T1003 |

---

## Detection Outcome

| Item | Status |
|------|--------|
| Detection Activity Performed | ? Yes |
| Sysmon Logged Activity | ? Yes |
| Wazuh Received Logs | ? Yes |
| Investigation Completed | ? Yes |
| MITRE Technique Mapped | ? T1003 |

---

## Conclusion

This hunt focused on detecting and investigating activities related to the **Credential Access** phase of the MITRE ATT&CK framework. Using Sysmon process creation events and Wazuh, potentially sensitive process executions were monitored and analyzed. Although no real credential dumping was performed, the hunt successfully demonstrated the detection engineering workflow, including log collection, event analysis, process investigation, and MITRE ATT&CK mapping. This approach reflects how SOC analysts can proactively identify suspicious credential access behavior in enterprise environments.