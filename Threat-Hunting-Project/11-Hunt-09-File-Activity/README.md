# Hunt 09 – File Activity

## Objective

The objective of this hunt was to identify suspicious file creation, modification, copying, renaming, and deletion activities on a Windows endpoint. Attackers frequently interact with files during reconnaissance, staging, payload deployment, and data collection phases. Monitoring file activity provides valuable visibility into adversary behavior.

---

## Hunt Hypothesis

An attacker may create, modify, copy, rename, or delete files during an intrusion. These actions generate file system events that can be captured by Sysmon and investigated through Wazuh.

---

## Environment

- SIEM: Wazuh
- Endpoint: Windows 10
- Logging: Sysmon
- Event Source: Sysmon Event ID 11 (File Create)
- Detection Platform: Wazuh Dashboard

---

# Attack Simulation

## Create Folder

```cmd
mkdir C:\ThreatHunt
```

---

## Create File

```cmd
echo Threat Hunting Lab > C:\ThreatHunt\test.txt
```

---

## Copy File

```cmd
copy C:\ThreatHunt\test.txt C:\ThreatHunt\test-copy.txt
```

---

## Rename File

```cmd
rename C:\ThreatHunt\test-copy.txt evidence.txt
```

---

## Delete File

```cmd
del C:\ThreatHunt\evidence.txt
```

---

## Remove Folder

```cmd
rmdir C:\ThreatHunt
```

---

# Wazuh Hunt Queries

## File Creation Events

```text
data.win.system.eventID:11
```

---

## Hunt by Folder

```text
data.win.eventdata.targetFilename:*ThreatHunt*
```

---

## Hunt by File Name

```text
test.txt
```

```text
evidence.txt
```

---

## Generic Search

```text
ThreatHunt
```

---

## Fallback Query

```text
data.win.system.eventID:1
```

---

# Investigation Process

The generated Sysmon events were analyzed in Wazuh.

The investigation focused on:

- Target Filename
- Process Name
- Command Line
- User Account
- Parent Process
- File Creation Time
- Event ID

---

# Evidence Collected

The following artifacts were successfully identified during the investigation.

- Folder creation
- File creation
- File copy activity
- File rename activity
- File deletion
- Process responsible for file operations
- User account
- Execution timestamp

---

# Detection Analysis

Sysmon successfully generated file creation events that were forwarded to Wazuh.

Key observations:

- File creation events were captured.
- Target file paths were recorded.
- Parent-child process relationships were available.
- User activity could be correlated with file operations.
- File activity timeline was reconstructed using Wazuh.

---

# MITRE ATT&CK Mapping

| Tactic | Technique | ID |
|---------|-----------|----|
| Discovery | File and Directory Discovery | T1083 |

---

# Detection Outcome

| Item | Status |
|------|--------|
| File Activity Executed | ? Yes |
| Sysmon Logged Activity | ? Yes |
| Wazuh Received Logs | ? Yes |
| Investigation Completed | ? Yes |
| MITRE Technique Mapped | ? T1083 |

---

# Conclusion

This hunt demonstrated how file system activity can be monitored using Sysmon and investigated through Wazuh. File creation, copying, renaming, and deletion events provide valuable forensic evidence during threat hunting and incident response. Monitoring these behaviors enables SOC analysts to detect suspicious file operations, reconstruct attacker activity, and improve visibility into endpoint behavior within enterprise environments.