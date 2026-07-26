# 08 - MITRE ATT&CK Mapping

## Overview

The MITRE ATT&CK Framework is a globally recognized knowledge base of adversary tactics and techniques used to classify and understand cyber threats. Mapping security detections to MITRE ATT&CK helps Security Operations Center (SOC) teams and Detection Engineers identify attack behaviors, improve detection coverage, and standardize incident analysis.

During this project, multiple attack simulations were mapped to their corresponding MITRE ATT&CK techniques using Wazuh alerts, Sysmon telemetry, and detection logic.

---

# Objectives

- Understand the MITRE ATT&CK Framework.
- Map simulated attacks to ATT&CK techniques.
- Validate MITRE mappings in Wazuh.
- Improve detection visibility and documentation.

---

# MITRE ATT&CK Mappings

| Technique ID | Technique | Status |
|--------------|-----------|--------|
| **T1059.001** | PowerShell | ? Validated |
| **T1112** | Modify Registry | ? Validated |
| **T1565.001** | Stored Data Manipulation | ? Validated |
| **T1110** | Brute Force | ?? Logs Generated (Detection Depends on Rule Coverage) |
| **T1046** | Network Service Discovery (Nmap Scan) | ?? Logs Generated (Detection Depends on Rule Coverage) |

---

# Mapping Workflow

Attack Execution

?

Windows Event

?

Sysmon Telemetry

?

Wazuh Log Collection

?

Detection Rule

?

MITRE ATT&CK Mapping

?

Alert Validation

---

# Validation Results

The lab successfully validated several ATT&CK techniques through Wazuh's built-in detection rules.

Validated detections included:

- PowerShell execution (T1059.001)
- Registry modification (T1112)
- File modification (T1565.001)

Additional attack simulations generated endpoint telemetry successfully. Although some techniques did not produce automatic MITRE mappings, the events were collected by Wazuh and remain suitable for future custom rule development and detection tuning.

---

# Importance of MITRE Mapping

Mapping detections to the MITRE ATT&CK Framework provides several benefits:

- Standardizes detection coverage.
- Improves threat visibility.
- Simplifies incident investigations.
- Identifies detection gaps.
- Supports Detection Engineering and Purple Team validation.

---

# Screenshots

The following screenshots were collected:

- MITRE ATT&CK Mapping in Wazuh Dashboard
- PowerShell Detection (T1059.001)
- Registry Modification (T1112)
- File Modification (T1565.001)
- Wazuh Alert Details

---

# Key Learning

During this phase, the following concepts were reinforced:

- MITRE ATT&CK Framework
- ATT&CK Techniques
- Detection Mapping
- Wazuh MITRE Integration
- Detection Coverage Analysis
- Detection Gap Identification

---

# Conclusion

MITRE ATT&CK mapping provides a structured approach for understanding attacker behavior and measuring detection effectiveness. Throughout this project, multiple attack simulations were successfully mapped to ATT&CK techniques where detection rules were available. Scenarios that generated telemetry without automatic mappings highlighted opportunities for future Detection Engineering work, including custom rule development and continuous detection tuning to improve overall security visibility.