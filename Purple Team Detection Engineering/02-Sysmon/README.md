# 02 - Sysmon

## Overview

Sysmon (System Monitor) is a Microsoft Sysinternals tool that provides enhanced visibility into Windows endpoint activity. Unlike the default Windows Event Logs, Sysmon records detailed security events such as process creation, network connections, file creation, registry modifications, and DNS queries.

In this Detection Engineering Lab, Sysmon acts as the primary telemetry source. The generated events are collected by the Wazuh Agent and forwarded to the Wazuh Manager, where custom detection rules analyze the activity and generate security alerts.

---

# Objectives

- Verify Sysmon is operational.
- Generate common Windows security events.
- Confirm Sysmon events are forwarded to Wazuh.
- Validate MITRE ATT&CK mapped detections.
- Prepare the environment for custom Detection Engineering rules.

---

# Environment

| Component | Purpose |
|-----------|---------|
| Windows 10 | Endpoint monitored by Sysmon |
| Sysmon | Generate detailed security telemetry |
| Wazuh Agent | Forward logs to Wazuh Manager |
| Ubuntu Wazuh Server | Analyze events and generate alerts |
| Wazuh Dashboard | Visualize detections |

---

# Verification

The following checks were performed to verify the Sysmon installation.

### Verify Sysmon Service

```powershell
Get-Service Sysmon
```

### Display Current Configuration

```powershell
sysmon64.exe -c
```

### Display Sysmon Version

```powershell
sysmon64.exe -s
```

---

# Event Generation

Several Windows activities were executed to generate Sysmon events for validation.

## Process Creation

```cmd
notepad.exe
```

Expected Event ID:

- Event ID 1 – Process Creation

---

## Network Activity

```cmd
ping google.com
```

Expected Event ID:

- Event ID 3 – Network Connection
- Event ID 22 – DNS Query

---

## File Creation

```cmd
echo test > C:\Users\Public\test.txt
```

Expected Event ID:

- Event ID 11 – File Create

---

## Registry Modification

```cmd
reg add "HKCU\Software\TestKey" /v TestValue /t REG_SZ /d Hello /f
```

Expected Event ID:

- Event ID 13 – Registry Value Set

---

# Important Sysmon Event IDs

| Event ID | Description | Detection Use Case |
|-----------|-------------|--------------------|
| 1 | Process Creation | Detect suspicious process execution |
| 3 | Network Connection | Detect outbound network activity |
| 11 | File Create | Detect dropped or modified files |
| 13 | Registry Value Set | Detect persistence and registry changes |
| 22 | DNS Query | Detect suspicious DNS activity |

---

# Wazuh Validation

After executing the test commands, Sysmon events were successfully forwarded to the Wazuh Manager.

The generated activities triggered security alerts that were mapped to the MITRE ATT&CK framework.

Observed examples included:

- T1112 – Modify Registry
- T1565.001 – Stored Data Manipulation

This confirms that the endpoint telemetry, log forwarding, and Wazuh detection pipeline are functioning correctly.

---

# Screenshots

The following screenshots were collected as evidence:

- Sysmon service status
- Sysmon configuration
- Sysmon Operational Event Log
- Event ID 1 – Process Creation
- Event ID 3 – Network Connection
- Event ID 11 – File Create
- Event ID 13 – Registry Value Set
- Event ID 22 – DNS Query
- Wazuh Dashboard showing generated alerts
- MITRE ATT&CK mapped detections

---

# Conclusion

Sysmon was successfully validated as the primary endpoint telemetry source for the Detection Engineering Lab. Test activities generated the expected Windows events, which were forwarded to the Wazuh Manager and processed into security alerts. The successful MITRE ATT&CK mapping demonstrates that the logging and detection pipeline is operational and ready for custom Wazuh rule development, Sigma integration, YARA-based detection, and future attack simulations.