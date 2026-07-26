# 06 - Detection Tuning

## Overview

Detection Tuning is the process of improving security detection rules to increase accuracy, reduce false positives, and ensure that alerts provide meaningful security insights. It is a fundamental responsibility of a Detection Engineer, as effective detections must distinguish between legitimate administrative activity and potentially malicious behavior.

In this phase, existing Wazuh detections were reviewed, their detection logic was analyzed, and improvements were identified to enhance detection quality while reducing unnecessary alerts.

---

# Objectives

- Understand the purpose of Detection Tuning.
- Analyze existing Wazuh detection rules.
- Identify potential false positives.
- Improve detection logic by adding contextual conditions.
- Validate detection effectiveness after tuning.

---

# Environment

| Component | Purpose |
|----------|---------|
| Windows 10 | Event Generation |
| Sysmon | Process & System Telemetry |
| Wazuh Manager | Detection Rules |
| Wazuh Dashboard | Alert Validation |

---

# Detection Review

The following detections were analyzed during this phase:

| Detection | MITRE ATT&CK |
|-----------|--------------|
| Encoded PowerShell Execution | T1059.001 |
| Registry Modification | T1112 |
| File Modification | T1565.001 |

Each detection was reviewed to understand how alerts were generated and how detection quality could be improved.

---

# Detection Tuning Process

The tuning workflow followed these steps:

1. Review generated alerts.
2. Analyze the event details.
3. Identify potential false positives.
4. Improve detection logic.
5. Validate the updated detection.
6. Confirm MITRE ATT&CK mapping.

---

# Example Detection Improvement

### Original Detection

Detect every PowerShell execution.

### Issue

Normal administrators frequently use PowerShell for legitimate system administration tasks. Detecting every PowerShell execution can generate excessive alerts and increase analyst workload.

### Improved Detection

Generate alerts only when PowerShell is executed with suspicious parameters such as:

- `-enc`
- `-EncodedCommand`
- Suspicious parent process
- Obfuscated command-line arguments

This approach improves detection accuracy while reducing false positives.

---

# Detection Validation

Detection improvements were validated by executing PowerShell commands on the Windows endpoint.

Validation confirmed:

- Sysmon successfully generated telemetry.
- Wazuh received the logs.
- Detection rules triggered correctly.
- MITRE ATT&CK mappings were preserved.

---

# Detection Workflow

Attack Simulation

?

Sysmon Event

?

Wazuh Detection

?

Alert Review

?

Detection Tuning

?

Validation

---

# Screenshots

The following evidence was collected:

- Wazuh Alert
- Alert Details
- Rule Information
- MITRE ATT&CK Mapping

---

# Key Learning

During this phase, the following Detection Engineering concepts were practiced:

- Detection Rule Analysis
- False Positive Identification
- Alert Validation
- Detection Improvement
- MITRE ATT&CK Mapping
- Detection Lifecycle

---

# Conclusion

Detection tuning is an essential part of Detection Engineering. Well-tuned detection rules reduce alert fatigue, improve investigation efficiency, and provide more accurate visibility into malicious activity. By reviewing existing detections, analyzing alert behavior, and identifying opportunities for improvement, this phase demonstrated the practical workflow used by Detection Engineers to maintain effective and reliable security monitoring.