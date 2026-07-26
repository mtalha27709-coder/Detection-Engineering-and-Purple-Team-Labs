# 07 - Attack Simulations

## Overview

This phase focused on validating the monitoring pipeline by executing attack simulations against the Windows endpoint and observing how Wazuh collected, analyzed, and detected security events. The objective was to verify telemetry collection, evaluate existing detection coverage, and understand where additional detection tuning would be required.

---

# Objectives

- Simulate common attack techniques.
- Generate Windows and Sysmon telemetry.
- Verify log collection in Wazuh.
- Validate available detections.
- Identify detection gaps for future tuning.

---

# Lab Environment

| Component | Purpose |
|----------|---------|
| Kali Linux | Attack Machine |
| Windows 10 | Target Endpoint |
| Sysmon | Endpoint Telemetry |
| Wazuh Agent | Log Collection |
| Wazuh Manager | Detection & Analysis |

---

# Attack Simulations

## 1. PowerShell Encoded Command

Technique: **T1059.001 – PowerShell**

Result:

- Sysmon Event Generated ?
- Wazuh Alert Generated ?
- MITRE Mapping Available ?

---

## 2. Registry Modification

Technique: **T1112 – Modify Registry**

Result:

- Registry Event Generated ?
- Wazuh Detection Available ?

---

## 3. File Modification

Technique: **T1565.001 – Stored Data Manipulation**

Result:

- File Activity Logged ?
- Wazuh Detection Available ?

---

## 4. Additional Attack Simulations

Additional Atomic Red Team tests and Kali Linux attack simulations were executed to generate endpoint telemetry.

During testing:

- Windows events were successfully generated.
- Sysmon successfully captured endpoint activity.
- Wazuh successfully ingested the generated logs.

However, not every simulated technique produced a dedicated Wazuh security alert or automatic MITRE ATT&CK mapping. This behavior reflects the current detection coverage of the deployed Wazuh ruleset rather than a failure of telemetry collection.

These scenarios represent opportunities for future Detection Engineering work, including custom rule development and detection tuning.

---

# Detection Workflow

Attack Simulation

?

Windows Event

?

Sysmon Telemetry

?

Wazuh Agent

?

Wazuh Manager

?

Alert (When Detection Rule Exists)

OR

Log Collected (Detection Rule Not Available)

---

# Key Findings

- Endpoint telemetry collection was successful.
- Sysmon generated detailed security events.
- Wazuh successfully received endpoint logs.
- Built-in detections identified multiple attack techniques.
- Some attack simulations produced logs without corresponding detection rules.
- These detection gaps can be addressed through custom Wazuh rules and Detection Tuning.

---

# Screenshots

Evidence collected during this phase includes:

- Atomic Red Team Execution
- Kali Linux Attack Execution
- Sysmon Events
- Wazuh Alerts
- Wazuh Event Logs
- MITRE ATT&CK Mapping
- Detection Validation

---

# Conclusion

The attack simulations successfully validated the end-to-end logging pipeline from attack execution to event collection within Wazuh. While several techniques were automatically detected and mapped to MITRE ATT&CK, other simulations generated telemetry without dedicated alerts. This demonstrates that effective Detection Engineering extends beyond log collection and requires continuous rule development, validation, and tuning to improve detection coverage.