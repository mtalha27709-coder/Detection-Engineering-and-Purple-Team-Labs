# 04 - Sigma

## Overview

Sigma is an open and vendor-neutral rule format used to describe log-based detection logic. It enables Detection Engineers to write detection rules once and translate them into SIEM-specific formats such as Wazuh, Splunk, Elastic, and Microsoft Sentinel.

In this project, Sigma rules were analyzed to understand their detection logic, mapped to Windows Sysmon telemetry, and validated within the Wazuh SIEM environment.

---

# Objectives

- Understand the Sigma rule structure.
- Analyze real-world Sigma detection rules.
- Map Sigma detections to Sysmon telemetry.
- Validate Sigma detection logic in Wazuh.
- Verify MITRE ATT&CK mappings.

---

# Environment

| Component | Purpose |
|----------|---------|
| Ubuntu | Sigma CLI & Rule Analysis |
| Windows 10 | Endpoint generating Sysmon logs |
| Sysmon | Process Creation Telemetry |
| Wazuh Manager | Log Analysis & Detection |
| Wazuh Dashboard | Alert Visualization |

---

# Sigma Setup

The Sigma CLI and Sigma rule repository were successfully installed on the Detection Engineering workstation.

Repository:

```
SigmaHQ/sigma
```

The repository contains hundreds of community-maintained detection rules covering Windows, Linux, Cloud, Active Directory, Web Applications, and many other attack techniques.

---

# Sigma Rule Analysis

The following Sigma rule was selected for analysis:

**Rule Name**

```
Suspicious Encoded PowerShell Command Line
```

### Detection Purpose

This rule detects PowerShell processes launched with Base64-encoded command-line arguments. Attackers commonly use encoded PowerShell commands to hide malicious scripts, evade basic detections, and execute payloads in memory.

### Log Source

- Windows
- Process Creation
- Sysmon Event ID 1

### Detection Logic

The Sigma rule checks for:

- PowerShell process execution
- Encoded command-line arguments (`-enc` / `-EncodedCommand`)
- Base64-encoded command patterns

When these conditions are satisfied, the activity is classified as suspicious and mapped to the MITRE ATT&CK framework.

---

# MITRE ATT&CK Mapping

| Technique | Description |
|-----------|-------------|
| T1059.001 | PowerShell |

---

# Validation

The Sigma detection logic was validated by executing a Base64-encoded PowerShell command on the Windows endpoint.

Test Command:

```powershell
powershell.exe -EncodedCommand VwByAGkAdABlAC0ASABvAHMAdAAgACIASABlAGwAbABvACI=
```

Execution generated:

- Sysmon Event ID 1
- Windows Process Creation Event
- Wazuh Security Alert

The generated alert was successfully mapped to:

- MITRE ATT&CK T1059.001 – PowerShell

Wazuh successfully detected the activity using its built-in detection rule (Rule ID: 92057), confirming that the endpoint telemetry and detection pipeline were functioning correctly.

---

# Screenshots

The following evidence was collected:

- Sigma CLI Installation
- Sigma Repository
- Sigma Rule Analysis
- PowerShell Test Command
- Wazuh Detection Alert
- Rule ID 92057
- MITRE ATT&CK Mapping

---

# Key Learning

During this phase, the following Detection Engineering concepts were learned:

- Sigma rule structure
- Detection logic analysis
- Windows process creation telemetry
- Sysmon Event ID 1
- MITRE ATT&CK mapping
- Wazuh alert validation
- Sigma-to-SIEM detection workflow

---

# Conclusion

Sigma provides a standardized approach for writing portable detection rules across multiple SIEM platforms. By analyzing a real-world Sigma rule and validating its detection within Wazuh, the project demonstrated how Detection Engineers translate threat intelligence into actionable detections. The successful validation confirmed that the monitoring pipeline, Sysmon telemetry, and Wazuh detection capabilities are fully operational and ready for advanced detection engineering and rule tuning.