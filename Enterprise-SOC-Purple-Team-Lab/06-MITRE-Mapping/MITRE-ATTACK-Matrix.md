# MITRE ATT&CK Coverage Matrix

## Overview

The following table summarizes the MITRE ATT&CK techniques that were simulated, detected, and investigated during this Purple Team project.

| Technique ID | Technique Name | MITRE Tactic | Detection Source | Status |
|--------------|-------------------------------|----------------------|-------------------------|---------|
| T1059 | Command and Scripting Interpreter | Execution | Sysmon + Wazuh | ? Detected |
| T1087 | Account Discovery | Discovery | Sysmon + Wazuh | ? Detected |
| T1105 | Ingress Tool Transfer | Command and Control | Sysmon + Wazuh | ? Detected |
| T1110 | Brute Force | Credential Access | Windows Security Logs + Wazuh | ? Detected |
| T1570 | Lateral Tool Transfer | Lateral Movement | Sysmon + Wazuh | ? Detected |

---

# Coverage Analysis

A total of five MITRE ATT&CK techniques were successfully simulated and monitored throughout this Purple Team exercise.

The generated detections demonstrated Wazuh's capability to monitor endpoint activities, collect detailed telemetry, and correlate observed behaviors with the MITRE ATT&CK Framework.

This mapping enables SOC analysts to rapidly understand attacker objectives and improve investigation efficiency.

---

# Benefits of MITRE Mapping

- Standardized attack classification
- Faster incident investigation
- Better threat hunting
- Improved detection engineering
- Enhanced SOC visibility
- Enterprise-ready documentation

---

# Conclusion

MITRE ATT&CK Mapping significantly improves an organization's ability to understand attacker behavior by transforming raw security events into structured intelligence that supports effective incident response and proactive defense strategies.